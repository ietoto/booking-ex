package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import com.afterend.pojo.Room;
import com.afterend.pojo.User;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class RoomDAO {
    public static Room getByHotelidAndRoomid(Room room) {
        Connection con=null;
        Room s = null;
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from room where hotel_id=? and room_id=?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,room.getHotelid());
            pstate.setInt(2,room.getId());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                s=new Room();
                s.setId(resultSet.getInt("room_id"));
                s.setHotelid(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("room_name"));
                s.setSize(resultSet.getInt("room_size"));
                s.setPrice_b(resultSet.getInt("room_breakfast"));
                s.setPrice_r(resultSet.getInt("room_price"));
                s.setIfFreeCancle(resultSet.getInt("room_isfreecancel"));
                s.setIfNoRequire(resultSet.getInt("room_isnorequire"));
                s.setNum_max(resultSet.getInt("room_num"));
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
        return s;
    }
    public static List<Room> getRoomList(Room room) {
        Connection con=null;
        List<Room> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from room where hotel_id=?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,room.getHotelid());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Room s=new Room();
                s.setId(resultSet.getInt("room_id"));
                s.setHotelid(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("room_name"));
                s.setSize(resultSet.getInt("room_size"));
                s.setPrice_b(resultSet.getInt("room_breakfast"));
                s.setPrice_r(resultSet.getInt("room_price"));
                s.setIfFreeCancle(resultSet.getInt("room_isfreecancel"));
                s.setIfNoRequire(resultSet.getInt("room_isnorequire"));
                s.setNum_max(resultSet.getInt("room_num"));
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
    public static Room add(Room room) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="INSERT INTO `HotelSystem`.`room`(`hotel_id`, `room_id`, `room_name`, `room_size`, `room_price`, `room_breakfast`, `room_isfreecancel`, `room_isnorequire`, `room_num`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,room.getHotelid());
            pstate.setInt(2,room.getId());
            pstate.setString(3,room.getName());
            pstate.setInt(4,room.getSize());
            pstate.setInt(5,room.getPrice_r());
            pstate.setInt(6,room.getPrice_b());
            pstate.setInt(7,room.isIfFreeCancle());
            pstate.setInt(8,room.isIfNoRequire());
            pstate.setInt(9,room.getNum_max());
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
        return room;
    }
    public static Room delete(Room room) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="DELETE FROM `HotelSystem`.`room` WHERE `hotel_id` = ? AND `room_id` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,room.getHotelid());
            pstate.setInt(2,room.getId());
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
        return room;
    }
    public static Room update(Room room) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="UPDATE `HotelSystem`.`room` SET `room_name` = ?, `room_size` = ?, `room_price` = ?, `room_breakfast` = ?, `room_isfreecancel` = ?, `room_isnorequire` = ?, `room_num` = ? WHERE `hotel_id` = ? AND `room_id` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,room.getName());
            pstate.setInt(2,room.getSize());
            pstate.setInt(3,room.getPrice_r());
            pstate.setInt(4,room.getPrice_b());
            pstate.setInt(5,room.isIfFreeCancle());
            pstate.setInt(6,room.isIfNoRequire());
            pstate.setInt(7,room.getNum_max());
            pstate.setInt(8,room.getHotelid());
            pstate.setInt(9,room.getId());
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
        return room;
    }
}
