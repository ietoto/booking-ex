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


    //用户请求订单
    @CrossOrigin
    @PostMapping(value = "/api/order/req")
    @ResponseBody
    public Result order_req(@RequestBody Order requestOrder, HttpSession session) {
        Order order = orderService.add(requestOrder);
        if(null==order){
            System.out.println("order request failed!");
            return new Result(400);
        }else {
            System.out.println("order request success!");
            return new Result(200);
        }
    }

    //用户查订单-根据用户id
    @CrossOrigin
    @PostMapping(value = "/api/order/user_showall")
    @ResponseBody
    public List<Order> showallU(@RequestBody User requestUser, HttpSession session) {
        Order order=new Order();
        order.setUserid(requestUser.getId());
        List<Order> orders = orderService.showByUserID(order);
        if(0 == orders.size()){
            System.out.println("Show orders failed!");
        }else {
            System.out.println("Show orders success!");
        }
        return orders;
    }

    //酒店经理查订单-根据酒店id
    @CrossOrigin
    @PostMapping(value = "/api/order/manager_showall")
    @ResponseBody
    public List<Order> showallM(@RequestBody Hotel requestHotel, HttpSession session) {
        Order order=new Order();
        order.setHotelid(requestHotel.getId());
        List<Order> orders = orderService.showByHotelID(order);
        if(0 == orders.size()){
            System.out.println("Show orders failed!");
        }else {
            System.out.println("Show orders success!");
        }
        return orders;
    }

    //查看所有订单
    @CrossOrigin
    @PostMapping(value = "/api/order/admin_showall")
    @ResponseBody
    public List<Order> showallA(HttpSession session) {
        List<Order> orders = orderService.showall();
        if(0 == orders.size()){
            System.out.println("Show orders failed!");
        }else {
            System.out.println("Show orders success!");
        }
        return orders;
    }

    //管理员/酒店经理删除订单
    @CrossOrigin
    @PostMapping(value = "/api/order/delete")
    @ResponseBody
    public Result deleteOrder(@RequestBody Order requestOrder, HttpSession session) {
        Order order = orderService.delete(requestOrder);
        if(null==order){
            System.out.println("order deleting failed!");
            return new Result(400);
        }else {
            System.out.println("order deleting success!");
            return new Result(200);
        }
    }

    //管理员/酒店经理修改订单信息
    @CrossOrigin
    @PostMapping(value = "/api/order/update")
    @ResponseBody
    public Result updateOrder(@RequestBody Order requestOrder, HttpSession session) {
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
