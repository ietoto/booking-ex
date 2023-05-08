package com.afterend.service;

import com.afterend.dao.RoomDAO;
import com.afterend.dao.UserDAO;
import com.afterend.pojo.Room;
import com.afterend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {
    @Autowired
    RoomDAO roomDAO;
    //根据对应酒店id和客房id返回客房
    public Room get(Room room){
        return roomDAO.getByHotelidAndRoomid(room);
    }
    //给对应酒店添加新的客房
    public Room add(Room room){
        return roomDAO.add(room);
    }
    //根据对应酒店id和客房id删除客房
    public Room delete(Room room){
        return roomDAO.delete(room);
    }
    //根据对应酒店id和客房id修改客房
    public Room update(Room room){
        return roomDAO.update(room);
    }

}
