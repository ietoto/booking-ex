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
    //添加订单
    public Order add(Order order){
        return orderDAO.insert(order);
    }
    //删除订单 根据id来删除
    public Order delete(Order order){
        return orderDAO.delete(order);
    }
}
