package com.afterend.service;

import com.afterend.dao.OrderDAO;
import com.afterend.dao.SearchDAO;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.Order;
import com.afterend.pojo.Search;
import com.afterend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    OrderDAO orderDAO;
    //查询所有订单
    public List<Order> showall(){
        return orderDAO.showall();
    }
    //根据用户id查询所有订单
    public List<Order> showByUserID(Order order){
        return orderDAO.showByUserID(order);
    }
    //根据用户姓名查询所有订单
    public List<Order> showByUserName(User user){
        return orderDAO.showByUserName(user);
    }
    //根据酒店id查询所有订单
    public List<Order> showByHotelIDNew(Hotel hotel){
        return orderDAO.showByHotelIDNew(hotel);
    }
    //根据酒店名查询所有订单
    public List<Order> showByHotelName(Hotel hotel){
        return orderDAO.showByHotelName(hotel);
    }
    //根据酒店id查询所有订单
    public List<Order> showByHotelID(Order order){
        return orderDAO.showByHotelID(order);
    }
    //添加订单
    public Order add(Order order){
        return orderDAO.insert(order);
    }
    //删除订单 根据id来删除
    public Order delete(Order order){
        return orderDAO.delete(order);
    }
    //更新订单 根据id来删除
    public Order update(Order order){
        return orderDAO.update(order);
    }

}
