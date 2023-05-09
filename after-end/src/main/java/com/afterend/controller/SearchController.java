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

    //搜索
    @CrossOrigin
    @PostMapping(value = "/api/search/search")
    @ResponseBody
    public List<Hotel> search(@RequestBody Search requestSearch, HttpSession session) {
        Search search= new Search();
        /*

         */

        List<Hotel> hotels = searchService.SearchbyLocationAndHotel(requestSearch);
        return hotels;
    }


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

    //根据日期和酒店id搜索, 只返回客房数量
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
