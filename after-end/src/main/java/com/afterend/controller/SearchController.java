package com.afterend.controller;

import com.afterend.pojo.*;
import com.afterend.result.Result;
import com.afterend.service.SearchService;
import com.afterend.service.UserService;
import com.afterend.dao.utils.*;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

import java.util.List;

@Controller
public class SearchController {
    @Autowired
    SearchService searchService;
    @Autowired
    private HotelController hotelController;
    @Autowired
    private RoomController roomController;

    //初次搜索, 根据位置, 日期, 人数
    //返回(可以参考pojo.SearchDetailed)：满足条件的酒店信息（不包括其客房和酒店设施的信息）
    //共找到的总数量、星级为0-5的数量、距离中心的1、3、5公里内的数量、评分大于9、8、7、6的数量
    //酒店和客房设施及其数量
    //早餐价格大于100或小于100的数量、免费取消、无需预订的数量
    @CrossOrigin
    @PostMapping(value = "/api/search/search")
    @ResponseBody
    public SearchDetailed search(@RequestBody SearchDetailed requestSearch, HttpSession session) {
        System.out.println("Searching...");
        SearchDetailed searchDetailed = searchService.SearchForFirst(requestSearch);
        if(null==searchDetailed){
            System.out.println("No result find.");
        }else {
            System.out.println("Search success.");
            //设置封面图片路径
            List<Hotel> hotels = searchDetailed.getHotels();
            for(int i=0;i<hotels.size();i++){
                hotels.get(i).setImg("../../../after-end/picture/image_hotel/"+hotels.get(i).getId()+".jpg");
            }
            
            //计算价格以及推荐客房
            recommend(searchDetailed);
            
            searchDetailed.setHotels(hotels);
            
        }

        return searchDetailed;
    }

    //filter
    //根据酒店地区、日期、人数，返回酒店各个信息 list和酒店设施、客房设施及其数量
    //地区会在酒店city和location里都判断
    //返回的有：满足条件的酒店信息（不包括其客房和酒店设施的信息）
    //共找到的总数量、星级为0-5的数量、距离中心的1、3、5公里内的数量、评分大于9、8、7、6的数量
    //酒店和客房设施及其数量
    //早餐价格大于100或小于100的数量、免费取消、无需预订的数量
    @CrossOrigin
    @PostMapping(value = "/api/search/filter")
    @ResponseBody
    public SearchDetailed filter(@RequestBody SearchDetailed requestSearch, HttpSession session) {
        System.out.println("Searching...");
        SearchDetailed searchDetailed = searchService.SearchForSecond(requestSearch);
        if(null==searchDetailed){
            System.out.println("No result find.");
        }else {
            System.out.println("Search success.");
            System.out.println("setting filter result.");
            //设置封面图片路径
            List<Hotel> hotels = searchDetailed.getHotels();
            for(int i=0;i<hotels.size();i++){
                hotels.get(i).setImg("../../../after-end/picture/image_hotel/"+hotels.get(i).getId()+".jpg");
            }
            
            //计算价格以及推荐客房
            recommend(searchDetailed);
            
            searchDetailed.setHotels(hotels);
//            System.out.println("total hotel number: "+searchDetailed.getNum());
        }

        return searchDetailed;
    }
    
        public void recommend(SearchDetailed requestSearch){
        List<Hotel> hotels = requestSearch.getHotels();
        List<Hotel> room_rec = new ArrayList<>();
        //计算价格, 动态规划
        List<Integer> price = new ArrayList<>();
        Dateutils dateutils = new Dateutils();
        int start = dateutils.DatetoInt(requestSearch.getStartdate());
        int end = dateutils.DatetoInt(requestSearch.getEnddate());
        int time = end - start;
        for(int k=0;k<hotels.size();k++){
            Hotel hotel = hotels.get(k);
            hotel.setRooms(roomController.getRoomList2(hotel));
            List<Room> rooms = hotel.getRooms();
            int adult_num = requestSearch.getAdult();
            int child_num = requestSearch.getChild();
            int total = adult_num + child_num;

            // 对房间列表按大小从小到大进行排序
            Collections.sort(rooms, Comparator.comparingInt(Room::getSize));

            // 创建二维数组用于存储最优解的状态
            int[][] dp = new int[rooms.size() + 1][total + 1];

            // 初始化二维数组
            for (int i = 0; i <= rooms.size(); i++) {
                for (int j = 0; j <= total; j++) {
                    dp[i][j] = Integer.MAX_VALUE; // 初始化为最大值
                }
            }

            // 设置初始状态
            dp[0][0] = 0;

            // 动态规划求解
            for (int i = 1; i <= rooms.size(); i++) {
                for (int j = 0; j <= total; j++) {
                    // 不选当前房间
                    dp[i][j] = dp[i - 1][j];

                    // 选当前房间
                    if (j >= rooms.get(i - 1).getSize() && dp[i][j - rooms.get(i - 1).getSize()] != Integer.MAX_VALUE) {
                        dp[i][j] = Math.min(dp[i][j], dp[i][j - rooms.get(i - 1).getSize()] + 1);
                    }
                }
            }

            // 根据最优解的状态求解房间选择和总价格
            List<String> selectedRooms = new ArrayList<>();
            int remainingTotal = total;
            int totalPrice = 0;
            for (int i = rooms.size(); i > 0; i--) {
                if (dp[i][remainingTotal] != dp[i - 1][remainingTotal]) {
                    Room room = rooms.get(i - 1);
                    int numOfRooms = remainingTotal / room.getSize();
                    selectedRooms.add(room.getId() + " x " + numOfRooms);

                    remainingTotal -= numOfRooms * room.getSize();
                    totalPrice += numOfRooms * room.getPrice_r();
                }
            }

            if (remainingTotal == 0) {
                    System.out.println("推荐客房成功");
                    for (String roomInfo : selectedRooms) {
                        System.out.println(roomInfo);
                    }
                    System.out.println("总价格：" + totalPrice);
                Hotel hotel1=new Hotel();
                hotel1.setRooms(rooms);
                room_rec.add(hotel1);
                price.add(totalPrice*time);
            } else {
                    System.out.println("推荐客房失败");
                price.add(-1);
            }


        }
        requestSearch.setRoom_rec(room_rec);
        requestSearch.setPrice(price);
    }

    //获取单个酒店详情
    //需要酒店id、地区、日期、人数
    @CrossOrigin
    @PostMapping(value = "/api/search/Hotel_Info")
    @ResponseBody
    public SearchDetailed hotel_info(@RequestBody SearchDetailed requestSearch, HttpSession session) {
        Hotel hotel = new Hotel();
        hotel.setId(requestSearch.getId());
        SearchDetailed searchDetailed = requestSearch;
        hotel = hotelController.hotelInfo(hotel);
        List<Hotel> hotels = new ArrayList<>();
        hotels.add(hotel);
        searchDetailed.setHotels(hotels);
        //可用房间以及价格
        recommend(searchDetailed);



        return searchDetailed;

    }


    //通过位置和酒店名, 搜索酒店
    @CrossOrigin
    @PostMapping(value = "/api/search/searchByLocation")
    @ResponseBody
    public List<Hotel> searchWithLocation(@RequestBody Search requestSearch, HttpSession session) {
        System.out.println("Searching with location and hotel name...");

        List<Hotel> hotels = searchService.SearchbyLocationAndHotel(requestSearch);
        if(0 == hotels.size()){
            System.out.println("No result find.");
        }else{
            System.out.println("Results find.");
        }
        return hotels;
    }

    //根据日期和酒店id搜索, 只返回客房数量num_max
    @CrossOrigin
    @PostMapping(value = "/api/search/searchHotelRoomNum")
    @ResponseBody
    public List<Room> searchHotelRoomNum(@RequestBody Search requestSearch, HttpSession session) {
        System.out.println("Searching room number...");

        List<Room> rooms = searchService.SearchForHotelRoomNum(requestSearch);
        if(0 == rooms.size()){
            System.out.println("No result find.");
        }else{
            System.out.println("Results find.");
        }
        return rooms;
    }

    //根据日期和人数, 搜索酒店id
    @CrossOrigin
    @PostMapping(value = "/api/search/searchByDateAndPeople")
    @ResponseBody
    public List<Hotel> searchByDateAndPeople(@RequestBody Search requestSearch, HttpSession session) {
        System.out.println("Searching hotel id...");

        List<Hotel> hotels = searchService.SearchByDateAndHumanNum(requestSearch);
        if(0 == hotels.size()){
            System.out.println("No result find.");
        }else{
            System.out.println("Results find.");
        }
        return hotels;
    }

    //根据酒店id, 搜索该酒店的设施和客房设施
    @CrossOrigin
    @PostMapping(value = "/api/search/searchSingleFac")
    @ResponseBody
    public SearchDetailed searchSingleFac(@RequestBody Search requestSearch, HttpSession session) {
        System.out.println("Searching hotel's facilities...");

        SearchDetailed searchDetailed = searchService.SearchForSingalFac(requestSearch);
        if(null == searchDetailed){
            System.out.println("No result find.");
        }else{
            System.out.println("Results find.");
        }
        return searchDetailed;
    }

    //根据省份(eg.江苏)日期人数, 搜索酒店
    @CrossOrigin
    @PostMapping(value = "/api/search/searchByCityAndDateAndPeople")
    @ResponseBody
    public List<Hotel> searchByCityAndDateAndPeople(@RequestBody Search requestSearch, HttpSession session) {
        System.out.println("Searching hotel List...");

        List<Hotel> hotels = searchService.SearchbyCityAndDateAndHumanNum(requestSearch);
        if(0 == hotels.size()){
            System.out.println("No result find.");
        }else{
            System.out.println("Results find.");
        }
        return hotels;
    }

    //根据城市(eg.南京)日期人数, 搜索酒店
    @CrossOrigin
    @PostMapping(value = "/api/search/searchByLocationAndDateAndPeople")
    @ResponseBody
    public List<Hotel> searchByLocationAndDateAndPeople(@RequestBody Search requestSearch, HttpSession session) {
        System.out.println("Searching hotel List_location...");

        List<Hotel> hotels = searchService.SearchbyLocationAndDateAndHumanNum(requestSearch);
        if(0 == hotels.size()){
            System.out.println("No result find.");
        }else{
            System.out.println("Results find.");
        }
        return hotels;
    }



}
