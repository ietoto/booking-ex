package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.HotelFac;
import com.afterend.pojo.Room;
import com.afterend.pojo.RoomFac;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
@Service
public class RoomFacDAO {
    public static List<RoomFac> getByHotelid(Hotel hotel) {
        Connection con=null;
        List<RoomFac> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from fac_room where hotel_id=?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,hotel.getId());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                RoomFac s=new RoomFac();
                s.setId(resultSet.getInt("room_id"));
                s.setHotelid(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("room_facname"));
                list.add(s);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                if(con==null){
                    System.out.println("test ");
                }
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return list;
    }
    public static List<RoomFac> getByHotelIDAndRoomID(Room room) {
        Connection con=null;
        List<RoomFac> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from fac_room where hotel_id=? and room_id=?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,room.getHotelid());
            pstate.setInt(2,room.getId());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                RoomFac s=new RoomFac();
                s.setId(resultSet.getInt("room_id"));
                s.setHotelid(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("room_facname"));
                list.add(s);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                if(con==null){
                    System.out.println("test ");
                }
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return list;
    }
    public static RoomFac add(RoomFac roomFac) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="INSERT INTO `HotelSystem`.`fac_room`(`hotel_id`, `room_id`, `room_facname`) VALUES (?, ?, ?)";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,roomFac.getHotelid());
            pstate.setInt(2,roomFac.getId());
            pstate.setString(3,roomFac.getName());
            pstate.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                if(con==null){
                    System.out.println("test ");
                }
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return roomFac;
    }
    public static RoomFac delete(RoomFac roomFac) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="DELETE FROM `HotelSystem`.`fac_room` WHERE `hotel_id` = ? AND `room_id` = ? AND `room_facname` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,roomFac.getHotelid());
            pstate.setInt(2,roomFac.getId());
            pstate.setString(3,roomFac.getName());
            pstate.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                if(con==null){
                    System.out.println("test ");
                }
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return roomFac;
    }
}
