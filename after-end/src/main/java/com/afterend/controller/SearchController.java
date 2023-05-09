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

    //只返回客房数量
    @CrossOrigin
    @PostMapping(value = "/api/search/searchHotelRoomNum")
    @ResponseBody
    public List<Room> searchHotelRoomNum(@RequestBody Search requestSearch, HttpSession session) {
        System.out.println("Searching...");

        List<Room> rooms = searchService.SearchForHotelRoomNum(requestSearch);
        if(0 == rooms.size()){
            System.out.println("No result find.");
        }else{
            System.out.println("Results find.");
        }
        return rooms;
    }

}
