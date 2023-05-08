package com.afterend.service;

import com.afterend.dao.RoomFacDAO;
import com.afterend.dao.UserDAO;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.HotelFac;
import com.afterend.pojo.RoomFac;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomFacService {
    @Autowired
    RoomFacDAO roomFacDAO;
    //根据酒店id返回酒店的设施
    public List<RoomFac> get(Hotel hotel){
        return roomFacDAO.getByHotelid(hotel);
    }
    //添加对应酒店客房的设施信息
    public RoomFac get(RoomFac roomFac){
        return roomFacDAO.add(roomFac);
    }
    //删除对应酒店客房的设施信息
    public RoomFac delete(RoomFac roomFac){
        return roomFacDAO.delete(roomFac);
    }

}
