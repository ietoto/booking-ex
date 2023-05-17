package com.afterend.controller;

import com.afterend.pojo.*;
import com.afterend.result.Result;
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
public class RoomController {
    @Autowired
    RoomService roomService;

    @CrossOrigin
    @ResponseBody
    public List<Room> getRoomListWithFac(Hotel hotel) {
        Room room =new Room();
        room.setHotelid(hotel.getId());
        List<Room> rooms = roomService.getRoomList(room);
        if(0 == rooms.size()){
            System.out.println("Get room and fac:roomList failed");
        }else{
            System.out.println("Get room and fac:roomList success");
        }

        //set room facilities
        RoomFacController roomFacController = new RoomFacController();
        for(int i=0;i<rooms.size();i++){
            List<RoomFac> roomFacList = roomFacController.getOneRoomFac1(room);
            List<String> facilities_room = new ArrayList<>();
            for (int j = 0; j < roomFacList.size(); j++) {
                facilities_room.add(roomFacList.get(j).getName());
            }
            rooms.get(i).setFacilities(facilities_room);
        }
        return rooms;
    }

    @CrossOrigin
    @PostMapping(value = "/api/room/getRooms")
    @ResponseBody
    public  List<Room> getRoomList(@RequestBody Hotel hotel,HttpSession session){
        Room room = new Room();
        room.setHotelid(hotel.getId());
        List<Room> rooms = roomService.getRoomList(room);
        System.out.println(rooms.get(0).getIfFreeCancle());
        if(0 == rooms.size()){
            System.out.println("Get rooms list failed!");
        }else {
            System.out.println("Get rooms list success!");
        }
        return rooms;
    }

    public  List<Room> getRoomList2(Hotel hotel){
        Room room = new Room();
        room.setHotelid(hotel.getId());
        List<Room> rooms = roomService.getRoomList(room);
        if(0 == rooms.size()){
            System.out.println("Get rooms list failed!");
        }else {
            System.out.println("Get rooms list success!");
        }
        return rooms;
    }

    //管理员/酒店经理添加房间
    @CrossOrigin
    @PostMapping(value = "/api/room/add")
    @ResponseBody
    public Result addRoom(@RequestBody Room requestRoom, HttpSession session) {
        Room room = roomService.add(requestRoom);
        if(null ==room) {
            System.out.println("Room adding failed!");
            return new Result(400);
        }else{
            System.out.println("Room adding success!");
            return new Result(200);
        }
    }

    //管理员/酒店经理删除房间
    @CrossOrigin
    @PostMapping(value = "/api/room/delete")
    @ResponseBody
    public Result deleteRoom(@RequestBody Room requestRoom, HttpSession session) {
        Room room = roomService.delete(requestRoom);
        if(null ==room) {
            System.out.println("Room deleting failed!");
            return new Result(400);
        }else{
            System.out.println("Room deleting success!");
            return new Result(200);
        }
    }

    @CrossOrigin
    @PostMapping(value = "/api/room/update")
    @ResponseBody
    public Result updateRoom(@RequestBody Room requestRoom, HttpSession session) {
        Room room = roomService.update(requestRoom);
        if(null ==room) {
            System.out.println("Room updating failed!");
            return new Result(400);
        }else{
            System.out.println("Room updating success!");
            return new Result(200);
        }
    }

}
