package com.afterend.service;

import com.afterend.dao.RoomFacDAO;
import com.afterend.dao.UserDAO;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.HotelFac;
import com.afterend.pojo.Room;
import com.afterend.pojo.RoomFac;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomFacService {
    @Autowired
    static
    RoomFacDAO roomFacDAO;
    //根据酒店id返回酒店的设施
    public List<RoomFac> get(Hotel hotel){
        return roomFacDAO.getByHotelid(hotel);
    }
    //根据酒店id和客房id返回客房的设施
    public List<RoomFac> getByHotelIDAndRoomID(Room room){
        return roomFacDAO.getByHotelIDAndRoomID(room);
    }
    //添加对应酒店客房的设施信息
    public static RoomFac add(RoomFac roomFac){
        return roomFacDAO.add(roomFac);
    }
    //删除对应酒店客房的设施信息
    public RoomFac delete(RoomFac roomFac){
        return roomFacDAO.delete(roomFac);
    }

}
