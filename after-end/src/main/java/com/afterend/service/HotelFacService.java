package com.afterend.service;

import com.afterend.dao.HotelFacDAO;
import com.afterend.dao.UserDAO;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.HotelFac;
import com.afterend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class HotelFacService {
    @Autowired
    HotelFacDAO hotelFacDAO;
    //根据酒店id返回酒店的设施
    public List<HotelFac> get(Hotel hotel){
        return hotelFacDAO.getByHotelid(hotel);
    }
    //添加对应酒店的设施信息
    public HotelFac get(HotelFac hotelFac){
        return hotelFacDAO.add(hotelFac);
    }
    //删除对应酒店的设施信息
    public HotelFac delete(HotelFac hotelFac){
        return hotelFacDAO.delete(hotelFac);
    }
}
