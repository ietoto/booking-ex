package com.afterend.controller;

import com.afterend.pojo.*;
import com.afterend.result.Result;
import com.afterend.service.RoomFacService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import javax.swing.text.html.HTML;
import java.util.List;

@Controller
public class RoomFacController {
    @Autowired
    RoomFacService roomFacService;

    @CrossOrigin
    @PostMapping(value = "/api/roomFac/getByHotelId")
    @ResponseBody
    public List<RoomFac> getRoomFac(@RequestBody Hotel hotel, HttpSession session) {
        return roomFacService.get(hotel);
    }

    public List<RoomFac> getRoomFac2(Hotel hotel) {
        return roomFacService.get(hotel);
    }

    @CrossOrigin
    @PostMapping(value = "/api/roomFac/getByHotelAndRoomId")
    @ResponseBody
    public List<RoomFac> getOneRoomFac(Room room) {
        Room room1 =new Room();
        room1.setHotelid(room.getHotelid());
        room1.setId(room.getId());
        return roomFacService.getByHotelIDAndRoomID(room1);
    }

    //管理员/酒店经理添加房间设施
    @CrossOrigin
    @PostMapping(value = "/api/roomFac/add")
    @ResponseBody
    public Result addRoomFac(@RequestBody RoomFac requestRoomFac, HttpSession session) {
        RoomFac roomfac = RoomFacService.add(requestRoomFac);
        if(null ==roomfac) {
            System.out.println("Hotelfac adding failed!");
            return new Result(400);
        }else{
            System.out.println("Hotelfac adding success!");
            return new Result(200);
        }
    }

    //管理员/酒店经理删除房间设施
    @CrossOrigin
    @PostMapping(value = "/api/roomFac/delete")
    @ResponseBody
    public Result deleteRoomFac(@RequestBody RoomFac requestRoomFac, HttpSession session) {
        RoomFac roomfac = roomFacService.delete(requestRoomFac);
        if(null ==roomfac) {
            System.out.println("RoomFac deleting failed!");
            return new Result(400);
        }else{
            System.out.println("RoomFac deleting success!");
            return new Result(200);
        }
    }

    @CrossOrigin
    @PostMapping(value = "/api/roomFac/update")
    @ResponseBody
    public Result updateRoomFac(@RequestBody RoomFac requestRoomFac, HttpSession session) {
        RoomFac roomfac = roomFacService.update(requestRoomFac);
        if(null ==roomfac) {
            System.out.println("RoomFac updating failed!");
            return new Result(400);
        }else{
            System.out.println("RoomFac updating success!");
            return new Result(200);
        }
    }

}
