package com.afterend.service;

import com.afterend.dao.HotelDAO;
import com.afterend.dao.OrderDAO;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelService {
    @Autowired
    HotelDAO hotelDAO;
    //查询所有酒店
    public List<Hotel> showall(){
        return hotelDAO.showall();
    }
    //查询所有酒店，之显示100条
    public List<Hotel> showalllimit(){
        return hotelDAO.showalllimit();
    }
    //根据酒店id查询酒店 最详细
    public Hotel SearchbyIDDetailed(Hotel hotel){
        return hotelDAO.SearchbyIDDetailed(hotel);
    }
    //根据酒店id查询酒店
    public Hotel SearchbyID(Hotel hotel){
        return hotelDAO.SearchbyID(hotel);
    }
    public List<Hotel> searchByName(Hotel hotel){
        return hotelDAO.searchByName(hotel);
    }
    public List<Hotel> searchByLocation(Hotel hotel){
        return hotelDAO.searchByLocation(hotel);
    }
    public List<Hotel> searchByScore(Hotel hotel){
        return hotelDAO.searchByScore(hotel);
    }
    public List<Hotel> searchByStar(Hotel hotel){
        return hotelDAO.searchByStar(hotel);
    }
    //添加酒店，如果存在酒店id则失败
    public Hotel add(Hotel hotel){
        if(SearchbyID(hotel)!=null)return null;
        return hotelDAO.add(hotel);
    }
    //删除酒店，根据酒店id
    public Hotel delete(Hotel hotel){
        return hotelDAO.delete(hotel);
    }
    //更新酒店，根据酒店id
    public Hotel update(Hotel hotel){
        return hotelDAO.update(hotel);
    }
}
