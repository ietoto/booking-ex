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

    public List<RoomFac> getRoomFac(Hotel hotel) {
        return roomFacService.get(hotel);
    }

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
        String name = requestRoomFac.getName();
        name = HtmlUtils.htmlEscape(name);
        System.out.println("Adding roomfac: "+name+"...");

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
        String name = requestRoomFac.getName();
        name = HtmlUtils.htmlEscape(name);
        System.out.println("Deleting roomfac: "+name+"...");

        RoomFac roomfac = roomFacService.delete(requestRoomFac);
        if(null ==roomfac) {
            System.out.println("RoomFac deleting failed!");
            return new Result(400);
        }else{
            System.out.println("RoomFac deleting success!");
            return new Result(200);
        }
    }

}