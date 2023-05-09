package com.afterend.controller;

import com.afterend.pojo.*;
import com.afterend.result.Result;
import com.afterend.service.HotelService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import javax.swing.text.html.HTML;
import java.util.ArrayList;
import java.util.List;

@Controller
public class HotelController {

    @Autowired
    HotelService hotelService;
    @CrossOrigin
    @PostMapping(value = "/api/hotel/showall")
    @ResponseBody
    public List<Hotel> showall(HttpSession session) {
        return (hotelService.showall());
    }

    @CrossOrigin
    @PostMapping(value = "/api/hotel/info")
    @ResponseBody
    public Hotel hotelInfo(@RequestBody Hotel requestHotel, HttpSession session) {
        Hotel hotel = requestHotel;
        // get hotel facilities
        HotelFacController hotelFacController = new HotelFacController();
        List<HotelFac> hotelFacList = hotelFacController.getHotelFac(requestHotel);
        List<String> facilities_hotel = new ArrayList<>();
        for(int i =0;i<hotelFacList.size();i++)
        {
            facilities_hotel.add(hotelFacList.get(i).getName());
        }
        hotel.setFacilities(facilities_hotel);

        //get rooms
        RoomController roomController = new RoomController();
        List<Room> rooms = roomController.getRoomList(requestHotel);

        //get room facilities
        RoomFacController roomFacController = new RoomFacController();
        List<RoomFac> roomFacList = roomFacController.getRoomFac(requestHotel);
        List<String> facilities_room = new ArrayList<>();
        for(int i=0;i<roomFacList.size();i++)
        {
            facilities_room.add(roomFacList.get(i).getName());

        }


        return hotel;
    }

    @CrossOrigin
    @PostMapping(value = "/api/hotel/add")
    @ResponseBody
    public Result addHotel(@RequestBody Hotel requestHotel, HttpSession session) {
        String name = requestHotel.getName();
        name = HtmlUtils.htmlEscape(name);
        System.out.println("Adding hotel: "+name+"...");

        Hotel hotel = hotelService.add(requestHotel);
        if(null ==hotel) {
            System.out.println("Hotel adding failed!");
            return new Result(400);
        }else{
            System.out.println("Hotel adding success!");
            return new Result(200);
        }
    }

    @CrossOrigin
    @PostMapping(value = "/api/hotel/delete")
    @ResponseBody
    public Result deleteHotel(@RequestBody Hotel requestHotel, HttpSession session) {
        String name = requestHotel.getName();
        name = HtmlUtils.htmlEscape(name);
        System.out.println("Deleting hotel: "+name+"...");

        Hotel hotel = hotelService.delete(requestHotel);
        if(null ==hotel) {
            System.out.println("Hotel deleting failed!");
            return new Result(400);
        }else{
            System.out.println("Hotel deleting success!");
            return new Result(200);
        }
    }

    @CrossOrigin
    @PostMapping(value = "/api/hotel/update")
    @ResponseBody
    public Result updateHotel(@RequestBody Hotel requestHotel, HttpSession session) {
        String name = requestHotel.getName();
        name = HtmlUtils.htmlEscape(name);
        System.out.println("Updating hotel: "+name+"...");

        Hotel hotel = hotelService.update(requestHotel);
        if(null ==hotel) {
            System.out.println("Hotel updating failed!");
            return new Result(400);
        }else{
            System.out.println("Hotel updating success!");
            return new Result(200);
        }
    }
}