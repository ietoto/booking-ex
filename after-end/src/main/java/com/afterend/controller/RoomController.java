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

    public List<Room> getRoomListWithFac(Hotel hotel) {
        Room room =new Room();
        room.setHotelid(hotel.getId());
        return roomService.getRoomList(room);
    }

    public  List<Room> getRoomList(Hotel hotel){
        Room room = new Room();
        room.setHotelid(hotel.getId());
        List<Room> rooms = roomService.getRoomList(room);
        return rooms;
    }

    public  List<Room> getRoomList(Hotel hotel){
        Room room = new Room();
        room.setHotelid(hotel.getId());
        List<Room> rooms = roomService.getRoomList(room);
        return rooms;
    }

    //管理员/酒店经理添加房间
    @CrossOrigin
    @PostMapping(value = "/api/room/add")
    @ResponseBody
    public Result addRoom(@RequestBody Room requestRoom, HttpSession session) {
        String name = requestRoom.getName();
        name = HtmlUtils.htmlEscape(name);
        System.out.println("Adding room: "+name+"...");

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
        String name = requestRoom.getName();
        name = HtmlUtils.htmlEscape(name);
        System.out.println("Deleting room: "+name+"...");

        Room room = roomService.delete(requestRoom);
        if(null ==room) {
            System.out.println("Room deleting failed!");
            return new Result(400);
        }else{
            System.out.println("Room deleting success!");
            return new Result(200);
        }
    }

}
