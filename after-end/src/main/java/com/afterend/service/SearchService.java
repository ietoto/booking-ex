package com.afterend.service;

import com.afterend.dao.SearchDAO;
import com.afterend.dao.UserDAO;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.Room;
import com.afterend.pojo.Search;
import com.afterend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {
    @Autowired
    SearchDAO searchDAO;
    //通过酒店名和酒店地区查找酒店RoomFac
    public List<Hotel> SearchbyLocationAndHotel(Search search){
        return searchDAO.SearchbyLocationAndHotel(search);
    }
    //根据日期和酒店id，返回对应酒店的客房数量
    public List<Room> SearchForHotelRoomNum(Search search){
        return searchDAO.SearchForHotelRoomNum(search);
    }
}
