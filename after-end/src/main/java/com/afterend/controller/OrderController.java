package com.afterend.controller;

import com.afterend.pojo.*;
import com.afterend.result.Result;
import com.afterend.service.OrderService;
import jakarta.servlet.http.HttpSession;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import java.util.List;
import java.util.Optional;

@Controller
public class OrderController {

    @Autowired
    OrderService orderService;


    @CrossOrigin
    @PostMapping(value = "/api/order/req")
    @ResponseBody
    public Result order_req(@RequestBody Order requestOrder, HttpSession session) {
        int user = requestOrder.getUserid();
        int hotel = requestOrder.getHotelid();
        int num = requestOrder.getNum();
        System.out.println("Making order: user-"+user+" hotel"+hotel+" room_num"+num);

        Order order = orderService.add(requestOrder);
        if(null==order){
            System.out.println("order request failed!");
            return new Result(400);
        }else {
            System.out.println("order request success!");
            return new Result(200);
        }
    }

    @CrossOrigin
    @PostMapping(value = "/api/order/showall")
    @ResponseBody
    public List<Order> showall(@RequestBody Order requestOrder, HttpSession session) {
        return orderService.showall();
    }

    @CrossOrigin
    @PostMapping(value = "/api/order/delete")
    @ResponseBody
    public Result deleteOrder(@RequestBody Order requestOrder, HttpSession session) {
        int user = requestOrder.getUserid();
        int hotel = requestOrder.getHotelid();
        int num = requestOrder.getNum();
        System.out.println("Deleting order: user-"+user+" hotel"+hotel+" room_num"+num);

        Order order = orderService.delete(requestOrder);
        if(null==order){
            System.out.println("order deleting failed!");
            return new Result(400);
        }else {
            System.out.println("order deleting success!");
            return new Result(200);
        }
    }

    @CrossOrigin
    @PostMapping(value = "/api/order/update")
    @ResponseBody
    public Result updateOrder(@RequestBody Order requestOrder, HttpSession session) {
        int user = requestOrder.getUserid();
        int hotel = requestOrder.getHotelid();
        int num = requestOrder.getNum();
        System.out.println("Updating order: user-"+user+" hotel"+hotel+" room_num"+num);

        Order order = orderService.update(requestOrder);
        if(null==order){
            System.out.println("order updating failed!");
            return new Result(400);
        }else {
            System.out.println("order updating success!");
            return new Result(200);
        }
    }
}