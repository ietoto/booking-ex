package com.afterend.controller;

import com.afterend.pojo.*;
import com.afterend.result.Result;
import com.afterend.service.SearchService;
import com.afterend.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import java.util.List;

@Controller
public class SearchController {
    @Autowired
    SearchService searchService;

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
//            List<Integer> distance_num=searchDetailed.getDistance_num();
//            List<Integer> score_num=searchDetailed.getScore_num();
//            List<Integer> star_num=searchDetailed.getStar_num();
//            List<Integer> break_num=searchDetailed.getBreak_num();
//            List<Integer> cancle_policy_num=searchDetailed.getCancle_policy_num();
//            List<HotelFac> hotelFacList = searchDetailed.getHotelFacList();
//            List<RoomFac> roomFacList = searchDetailed.getRoomFacList();
//
//            System.out.println("Print hotel facilities: ID    Number");
//            for(int i=0;i<hotelFacList.size();i++) {
//                System.out.println(i+": "+hotelFacList.get(i).getNum());
//            }
//
//            System.out.println("Print Room facilities: HotelID    Number");
//            for (int i=0;i<roomFacList.size();i++){
//                System.out.println(i+": " + roomFacList.get(i).getNum());
//            }
//
//            System.out.println("total hotel number: "+searchDetailed.getNum());
//            System.out.println("Beneath 1km: " + distance_num.get(0));

//            System.out.println("Beneath 3km: " + distance_num.get(1));
//            System.out.println("Beneath 5km: " + distance_num.get(2));
//            System.out.println("Score beyond 9: " + score_num.get(0));
//            System.out.println("Score beyond 8: " + score_num.get(1));
//            System.out.println("Score beyond 7: " + score_num.get(2));
//            System.out.println("Score beyond 6: " + score_num.get(3));
//            System.out.println("B&B: " + star_num.get(0));
//            System.out.println("1 star: " + star_num.get(1));
//            System.out.println("2 star: " + star_num.get(2));
//            System.out.println("3 star: " + star_num.get(3));
//            System.out.println("4 star: " + star_num.get(4));
//            System.out.println("5 star: " + star_num.get(5));
//            System.out.println("Breakfast beyond 100RMB: " + break_num.get(0));
//            System.out.println("Breakfast below 100RMB: " + break_num.get(1));
//            System.out.println("Free cancel" + cancle_policy_num.get(0));
//            System.out.println("Free reserve" + cancle_policy_num.get(1));
        }

        return searchDetailed;
    }

    //filter
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
            System.out.println("total hotel number: "+searchDetailed.getNum());
        }

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
