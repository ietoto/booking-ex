package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.Order;
import com.afterend.pojo.Search;
import com.afterend.pojo.User;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
@Service
public class OrderDAO {
    public static List<Order> showall() {
        Connection con=null;
        List<Order> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="SELECT orderid,userid,name,hotelid,hotel_name,roomid,room_name,num,money,startdate,enddate,`order`.state FROM `order`,hotel,`user`,room WHERE `order`.userid=`user`.id AND `order`.hotelid=hotel.hotel_id AND `order`.hotelid=room.hotel_id AND `order`.roomid=room.room_id";
            PreparedStatement pstate = con.prepareStatement(sql);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Order s=new Order();
                s.setId(resultSet.getInt("orderid"));
                s.setUserid(resultSet.getInt("userid"));
                s.setHotelid(resultSet.getInt("hotelid"));
                s.setRoomid(resultSet.getInt("roomid"));
                s.setNum(resultSet.getInt("num"));
                s.setMoney(resultSet.getInt("money"));
                s.setStartdate(resultSet.getString("startdate"));
                s.setEnddate(resultSet.getString("enddate"));
                s.setState(resultSet.getInt("state"));
                s.setUsername(resultSet.getString("name"));
                s.setHotel_name(resultSet.getString("hotel_name"));
                s.setRoom_name(resultSet.getString("room_name"));
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
    public static List<Order> showByUserID(Order order) {
        Connection con=null;
        List<Order> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="SELECT orderid,userid,name,hotelid,hotel_name,roomid,room_name,num,money,startdate,enddate,`order`.state FROM `order`,hotel,`user`,room WHERE userid=? AND`order`.userid=`user`.id AND `order`.hotelid=hotel.hotel_id AND `order`.hotelid=room.hotel_id AND `order`.roomid=room.room_id";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,order.getUserid());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Order s=new Order();
                s.setId(resultSet.getInt("orderid"));
                s.setUserid(resultSet.getInt("userid"));
                s.setHotelid(resultSet.getInt("hotelid"));
                s.setRoomid(resultSet.getInt("roomid"));
                s.setNum(resultSet.getInt("num"));
                s.setMoney(resultSet.getInt("money"));
                s.setStartdate(resultSet.getString("startdate"));
                s.setEnddate(resultSet.getString("enddate"));
                s.setState(resultSet.getInt("state"));
                s.setUsername(resultSet.getString("name"));
                s.setHotel_name(resultSet.getString("hotel_name"));
                s.setRoom_name(resultSet.getString("room_name"));
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
    public static List<Order> showByUserName(User user) {
        Connection con=null;
        List<Order> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="SELECT orderid,userid,name,hotelid,hotel_name,roomid,room_name,num,money,startdate,enddate,`order`.state FROM `order`,hotel,`user`,room WHERE name like ? AND`order`.userid=`user`.id AND `order`.hotelid=hotel.hotel_id AND `order`.hotelid=room.hotel_id AND `order`.roomid=room.room_id";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,'%'+user.getName()+'%');
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Order s=new Order();
                s.setId(resultSet.getInt("orderid"));
                s.setUserid(resultSet.getInt("userid"));
                s.setHotelid(resultSet.getInt("hotelid"));
                s.setRoomid(resultSet.getInt("roomid"));
                s.setNum(resultSet.getInt("num"));
                s.setMoney(resultSet.getInt("money"));
                s.setStartdate(resultSet.getString("startdate"));
                s.setEnddate(resultSet.getString("enddate"));
                s.setState(resultSet.getInt("state"));
                s.setUsername(resultSet.getString("name"));
                s.setHotel_name(resultSet.getString("hotel_name"));
                s.setRoom_name(resultSet.getString("room_name"));
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
    public static List<Order> showByHotelIDNew(Hotel hotel) {
        Connection con=null;
        List<Order> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="SELECT orderid,userid,name,hotelid,hotel_name,roomid,room_name,num,money,startdate,enddate,`order`.state FROM `order`,hotel,`user`,room WHERE hotelid = ? AND`order`.userid=`user`.id AND `order`.hotelid=hotel.hotel_id AND `order`.hotelid=room.hotel_id AND `order`.roomid=room.room_id";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,hotel.getId());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Order s=new Order();
                s.setId(resultSet.getInt("orderid"));
                s.setUserid(resultSet.getInt("userid"));
                s.setHotelid(resultSet.getInt("hotelid"));
                s.setRoomid(resultSet.getInt("roomid"));
                s.setNum(resultSet.getInt("num"));
                s.setMoney(resultSet.getInt("money"));
                s.setStartdate(resultSet.getString("startdate"));
                s.setEnddate(resultSet.getString("enddate"));
                s.setState(resultSet.getInt("state"));
                s.setUsername(resultSet.getString("name"));
                s.setHotel_name(resultSet.getString("hotel_name"));
                s.setRoom_name(resultSet.getString("room_name"));
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
    public static List<Order> showByHotelName(Hotel hotel) {
        Connection con=null;
        List<Order> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="SELECT orderid,userid,name,hotelid,hotel_name,roomid,room_name,num,money,startdate,enddate,`order`.state FROM `order`,hotel,`user`,room WHERE hotel_name like ? AND`order`.userid=`user`.id AND `order`.hotelid=hotel.hotel_id AND `order`.hotelid=room.hotel_id AND `order`.roomid=room.room_id";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,'%'+hotel.getName()+'%');
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Order s=new Order();
                s.setId(resultSet.getInt("orderid"));
                s.setUserid(resultSet.getInt("userid"));
                s.setHotelid(resultSet.getInt("hotelid"));
                s.setRoomid(resultSet.getInt("roomid"));
                s.setNum(resultSet.getInt("num"));
                s.setMoney(resultSet.getInt("money"));
                s.setStartdate(resultSet.getString("startdate"));
                s.setEnddate(resultSet.getString("enddate"));
                s.setState(resultSet.getInt("state"));
                s.setUsername(resultSet.getString("name"));
                s.setHotel_name(resultSet.getString("hotel_name"));
                s.setRoom_name(resultSet.getString("room_name"));
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
    public static List<Order> showByHotelID(Order order) {
        Connection con=null;
        List<Order> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from order where hotelid=?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,order.getHotelid());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Order s=new Order();
                s.setId(resultSet.getInt("orderid"));
                s.setUserid(resultSet.getInt("userid"));
                s.setHotelid(resultSet.getInt("hotelid"));
                s.setRoomid(resultSet.getInt("roomid"));
                s.setNum(resultSet.getInt("num"));
                s.setMoney(resultSet.getInt("money"));
                s.setStartdate(resultSet.getString("startdate"));
                s.setEnddate(resultSet.getString("enddate"));
                s.setState(resultSet.getInt("state"));
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
    public static Order insert(Order order) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="INSERT INTO `HotelSystem`.`order`(`userid`, `hotelid`, `roomid`, `num`, `money`, `startdate`, `enddate`, `state`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,order.getUserid());
            pstate.setInt(2,order.getHotelid());
            pstate.setInt(3,order.getRoomid());
            pstate.setInt(4,order.getNum());
            pstate.setInt(5,order.getMoney());
            pstate.setString(6,order.getStartdate());
            pstate.setString(7,order.getEnddate());
            pstate.setInt(8,order.getState());
            pstate.executeUpdate();
        } catch (SQLException e) {
            return null;
//            e.printStackTrace();
        }finally {
            try {
                if(con==null){
                    System.out.println("test");
                }
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return order;
    }
    public static Order delete(Order order) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="DELETE FROM `HotelSystem`.`order` WHERE `orderid` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,order.getId());
            pstate.executeUpdate();
        } catch (SQLException e) {
            return null;
//            e.printStackTrace();
        }finally {
            try {
                if(con==null){
                    System.out.println("test");
                }
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return order;
    }
    public static Order update(Order order) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="UPDATE `HotelSystem`.`order` SET `userid` = ?, `hotelid` = ?, `roomid` = ?, `num` = ?, `money` = ?, `startdate` = ?, `enddate` = ?, `state` = ? WHERE `orderid` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,order.getUserid());
            pstate.setInt(2,order.getHotelid());
            pstate.setInt(3,order.getRoomid());
            pstate.setInt(4,order.getNum());
            pstate.setInt(5,order.getMoney());
            pstate.setString(6,order.getStartdate());
            pstate.setString(7,order.getEnddate());
            pstate.setInt(8,order.getState());
            pstate.setInt(9,order.getId());
            pstate.executeUpdate();
        } catch (SQLException e) {
            return null;
//            e.printStackTrace();
        }finally {
            try {
                if(con==null){
                    System.out.println("test");
                }
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return order;
    }
}
