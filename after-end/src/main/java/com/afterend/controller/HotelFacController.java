package com.afterend.controller;

import com.afterend.pojo.*;
import com.afterend.result.Result;
import com.afterend.service.HotelFacService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import javax.swing.text.html.HTML;
import java.util.List;

@Controller
public class HotelFacController {
    @Autowired
    HotelFacService hotelFacService;

    public List<HotelFac> getHotelFac(Hotel hotel) {
        return hotelFacService.get(hotel);
    }

    //酒店经理/管理员添加酒店设施
    @CrossOrigin
    @PostMapping(value = "/api/hotelFac/add")
    @ResponseBody
    public Result addHotelFac(@RequestBody HotelFac requestHotelFac, HttpSession session) {
        HotelFac hotelfac = hotelFacService.add(requestHotelFac);
        if(null ==hotelfac) {
            System.out.println("Hotelfac adding failed!");
            return new Result(400);
        }else{
            System.out.println("Hotelfac adding success!");
            return new Result(200);
        }
    }

    //酒店经理/管理员删除酒店设施
    @CrossOrigin
    @PostMapping(value = "/api/hotelFac/delete")
    @ResponseBody
    public Result deleteHotelFac(@RequestBody HotelFac requestHotelFac, HttpSession session) {
        HotelFac hotelfac = hotelFacService.delete(requestHotelFac);
        if(null ==hotelfac) {
            System.out.println("Hotelfac deleting failed!");
            return new Result(400);
        }else{
            System.out.println("Hotelfac deleting success!");
            return new Result(200);
        }
    }

}