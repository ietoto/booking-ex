package com.afterend.controller;

import com.afterend.pojo.*;
import com.afterend.result.Result;
import com.afterend.service.HotelFacService;
import com.afterend.service.HotelService;
import com.afterend.service.RoomService;
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
    @Autowired
    private HotelFacController hotelFacController;
    @Autowired
    private RoomController roomController;


    @CrossOrigin
    @ResponseBody
    public List<Hotel> showall(HttpSession session) {
        return (hotelService.showall());
    }

    @CrossOrigin
    @PostMapping(value = "/api/hotel/showLimit")
    @ResponseBody
    public List<Hotel> showAllLimit(HttpSession session) {
        List<Hotel> hotels = hotelService.showalllimit();
        if(0 == hotels.size()){
            System.out.println("Show all hotels failed!");
        }else {
            System.out.println("Show all hotels successful!");
        }
        return hotels;
    }

    //获取单个酒店详细信息
    @CrossOrigin
    @ResponseBody
    public Hotel hotelInfo(Hotel requestHotel) {
        Hotel hotel = hotelService.SearchbyID(requestHotel);
        if(null == hotel){
            System.out.println("Get hotel info failed!");
        }else {
            System.out.println("Get hotel info success");
            System.out.println("Setting hotel...");
            //set imgList
            List<String> images = new ArrayList<>();
            for(int i=0;i<hotel.getImg_num();i++){
                images.add("http://localhost:8443/image/"+1000*((hotel.getId())%1000)+"/"+hotel.getId()+"_"+i+".jpg");
            }
            hotel.setImgList(images);


            // set hotel facilities
            List<HotelFac> hotelFacList = hotelFacController.getHotelFac2(requestHotel);
//            List<HotelFac> hotelFacList = hotelFacService.get(hotel);
//            if(0==hotelFacList.size()){
//                System.out.println("Get fac by hotelId failed!");
//            }else {
//                System.out.println("Get fac by hotelId success!");
//            }

            List<String> facilities_hotel = new ArrayList<>();
            for (int i = 0; i < hotelFacList.size(); i++) {
                facilities_hotel.add(hotelFacList.get(i).getName());
            }
            hotel.setFacilities(facilities_hotel);

            //set rooms
            List<Room> rooms = roomController.getRoomListWithFac(requestHotel);
            hotel.setRooms(rooms);


        }

        return hotel;
    }

    @CrossOrigin
    @ResponseBody
    public Hotel hotelInfo(SearchDetailed searchDetailed) {
        Hotel hotel = hotelService.SearchbyIDDetailed(searchDetailed);
        if(null == hotel){
            System.out.println("Get hotel info failed!");
        }else {
            System.out.println("Get hotel info success");
            System.out.println("Setting hotel...");
            //set imgList
            List<String> images = new ArrayList<>();
            for(int i=0;i<hotel.getImg_num();i++){
                images.add("http://localhost:8443/image/"+1000*((hotel.getId())%1000)+"/"+hotel.getId()+"_"+i+".jpg");
            }
            hotel.setImgList(images);
            // set hotel facilities
            List<HotelFac> hotelFacList = hotelFacController.getHotelFac2(hotel);
//            List<HotelFac> hotelFacList = hotelFacService.get(hotel);
//            if(0==hotelFacList.size()){
//                System.out.println("Get fac by hotelId failed!");
//            }else {
//                System.out.println("Get fac by hotelId success!");
//            }

            List<String> facilities_hotel = new ArrayList<>();
            for (int i = 0; i < hotelFacList.size(); i++) {
                facilities_hotel.add(hotelFacList.get(i).getName());
            }
            hotel.setFacilities(facilities_hotel);

            //set rooms
            List<Room> rooms = roomController.getRoomListWithFac(hotel);
            hotel.setRooms(rooms);

        }

        return hotel;
    }

    @CrossOrigin
    @PostMapping(value = "/api/hotel/searchByIdDetailed")
    @ResponseBody
    public Hotel hotelInfoDetailed(@RequestBody Hotel requestHotel, HttpSession session) {
        Hotel hotel = hotelService.SearchbyID(requestHotel);
        if(null == hotel){
            System.out.println("Get hotel info failed!");
        }else {
            System.out.println("Get hotel info success");
            System.out.println("Setting hotel...");
            //set img
            hotel.setImg("http://localhost:8443/image/-1/"+hotel.getId()+".jpg");
            //set imgList
            List<String> images = new ArrayList<>();
            for(int i=0;i<hotel.getImg_num();i++){
                images.add("http://localhost:8443/image/"+1000*((hotel.getId())%1000)+"/"+hotel.getId()+"_"+i+".jpg");
            }
            hotel.setImgList(images);


            // set hotel facilities
            List<HotelFac> hotelFacList = hotelFacController.getHotelFac2(requestHotel);
//            List<HotelFac> hotelFacList = hotelFacService.get(hotel);
//            if(0==hotelFacList.size()){
//                System.out.println("Get fac by hotelId failed!");
//            }else {
//                System.out.println("Get fac by hotelId success!");
//            }

            List<String> facilities_hotel = new ArrayList<>();
            for (int i = 0; i < hotelFacList.size(); i++) {
                facilities_hotel.add(hotelFacList.get(i).getName());
            }
            hotel.setFacilities(facilities_hotel);

            //set rooms
            List<Room> rooms = roomController.getRoomListWithFac(requestHotel);
            hotel.setRooms(rooms);

        }

        return hotel;
    }

    @CrossOrigin
    @PostMapping(value = "/api/hotel/searchById")
    @ResponseBody
    public Hotel searchById(@RequestBody Hotel requestHotel, HttpSession session){
        Hotel hotel = new Hotel();
        hotel = hotelService.SearchbyID(requestHotel);
        if(null == hotel){
            System.out.println("Can't find hotel by id!");
        }else {
            System.out.println("Successfully find hotel by id!");
        }
        return hotel;
    }

    @CrossOrigin
    @PostMapping(value = "/api/hotel/searchByName")
    @ResponseBody
    public List<Hotel> searchByName(@RequestBody Hotel hotel,HttpSession session) {
        return hotelService.searchByName(hotel);
    }
    @CrossOrigin
    @PostMapping(value = "/api/hotel/searchByLocation")
    @ResponseBody
    public List<Hotel> searchByLocation(@RequestBody Hotel hotel,HttpSession session) {
        return hotelService.searchByLocation(hotel);
    }
    @CrossOrigin
    @PostMapping(value = "/api/hotel/searchByScore")
    @ResponseBody
    public List<Hotel> searchByScore(@RequestBody Hotel hotel,HttpSession session) {
        return hotelService.searchByScore(hotel);
    }
    @CrossOrigin
    @PostMapping(value = "/api/hotel/searchByStar")
    @ResponseBody
    public List<Hotel> searchByStar(@RequestBody Hotel hotel,HttpSession session) {
        return hotelService.searchByStar(hotel);
    }
    //管理员添加酒店
    @CrossOrigin
    @PostMapping(value = "/api/hotel/add")
    @ResponseBody
    public Result addHotel(@RequestBody Hotel requestHotel, HttpSession session) {

        Hotel hotel = hotelService.add(requestHotel);
        if(null ==hotel) {
            System.out.println("Hotel adding failed!");
            return new Result(400);
        }else{
            System.out.println("Hotel adding success!");
            return new Result(200);
        }
    }

    //管理员删除酒店
    @CrossOrigin
    @PostMapping(value = "/api/hotel/delete")
    @ResponseBody
    public Result deleteHotel(@RequestBody Hotel requestHotel, HttpSession session) {
        Hotel hotel = hotelService.delete(requestHotel);
        if(null ==hotel) {
            System.out.println("Hotel deleting failed!");
            return new Result(400);
        }else{
            System.out.println("Hotel deleting success!");
            return new Result(200);
        }
    }

    //管理员/酒店经理更新酒店信息
    @CrossOrigin
    @PostMapping(value = "/api/hotel/update")
    @ResponseBody
    public Result updateHotel(@RequestBody Hotel requestHotel, HttpSession session) {
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
