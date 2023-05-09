package com.afterend.service;

import com.afterend.dao.SearchDAO;
import com.afterend.dao.UserDAO;
import com.afterend.pojo.*;
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
    //根据日期和人数，返回可住酒店的id
    public List<Hotel> SearchByDateAndHumanNum(Search search){
        return searchDAO.SearchByDateAndHumanNum(search);
    }
    //根据酒店id，返回酒店的设施和客房设施
    public SearchDetailed SearchForSingalFac(Search search){
        return searchDAO.SearchForSingalFac(search);
    }
    //返回酒店的设施和客房设施,及其数量
    public SearchDetailed SearchForAllFac(){
        return searchDAO.SearchForAllFac();
    }
    //根据酒店地区、日期、人数，返回酒店list  这里的酒店地区指city eg：江苏
    public List<Hotel> SearchbyCityAndDateAndHumanNum(Search search){
        return searchDAO.SearchbyCityAndDateAndHumanNum(search);
    }
    //根据酒店地区、日期、人数，返回酒店list  这里的酒店地区指Localtion eg：南京
    public List<Hotel> SearchbyLocationAndDateAndHumanNum(Search search){
        return searchDAO.SearchbyLocationAndDateAndHumanNum(search);
    }


}
