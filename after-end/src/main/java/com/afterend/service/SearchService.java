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
    //根据酒店地区、日期、人数，返回酒店id list  这里的酒店地区指Localtion eg：南京
    public List<Hotel> SearchbyLocationAndDateAndHumanNum(Search search){
        return searchDAO.SearchbyLocationAndDateAndHumanNum(search);
    }
    //根据酒店地区、日期、人数，返回酒店各个信息 list和酒店设施、客房设施及其数量  这里的酒店地区指Localtion eg：南京
    //就是第一次查找要返回的东西
    public SearchDetailed SearchForFirstLocation(Search search){
        return searchDAO.SearchForFirstLocation(search);
    }
    //根据酒店地区、日期、人数，返回酒店各个信息 list和酒店设施、客房设施及其数量  这里的酒店地区指city eg：江苏
    //就是第一次查找要返回的东西
    public SearchDetailed SearchForFirstCity(Search search){
        return searchDAO.SearchForFirstCity(search);
    }
    //根据酒店地区、日期、人数，返回酒店各个信息 list和酒店设施、客房设施及其数量
    //初次搜索的终极版，地区会在酒店city和location里都判断
    //返回的有：满足条件的酒店信息（不包括其客房和酒店设施的信息）
    //共找到的总数量、星级为0-5的数量、距离中心的1、3、5公里内的数量、评分大于9、8、7、6的数量
    //酒店和客房设施及其数量
    //早餐价格大于100或小于100的数量、免费取消、无需预订的数量
    public SearchDetailed SearchForFirst(SearchDetailed search){
        return searchDAO.SearchForFirst(search);
    }

}
