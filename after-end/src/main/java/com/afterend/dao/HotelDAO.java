package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import com.afterend.pojo.*;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class HotelDAO {
    public static List<Hotel> showall() {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from hotel";
            PreparedStatement pstate = con.prepareStatement(sql);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Hotel s=new Hotel();
                s.setId(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("hotel_name"));
                s.setDesciption(resultSet.getString("hotel_description"));
                s.setScore(resultSet.getDouble("hotel_score"));
                s.setLocation(resultSet.getString("hotel_location"));
                s.setStar(resultSet.getInt("hotel_star"));
                s.setDistance(resultSet.getDouble("hotel_distance"));
                s.setImg_num(resultSet.getInt("hotel_imgnum"));
                s.setCity(resultSet.getString("hotel_city"));
                s.setAddress(resultSet.getString("hotel_address"));
                list.add(s);
            }
        } catch (SQLException e) {
            e.printStackTrace();
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
        return list;
    }
    public static List<Hotel> showalllimit() {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from hotel  LIMIT 0,100";
            PreparedStatement pstate = con.prepareStatement(sql);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Hotel s=new Hotel();
                s.setId(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("hotel_name"));
                s.setDesciption(resultSet.getString("hotel_description"));
                s.setScore(resultSet.getDouble("hotel_score"));
                s.setLocation(resultSet.getString("hotel_location"));
                s.setStar(resultSet.getInt("hotel_star"));
                s.setDistance(resultSet.getDouble("hotel_distance"));
                s.setImg_num(resultSet.getInt("hotel_imgnum"));
                s.setCity(resultSet.getString("hotel_city"));
                s.setAddress(resultSet.getString("hotel_address"));
                list.add(s);
            }
        } catch (SQLException e) {
            e.printStackTrace();
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
        return list;
    }
    public static Hotel SearchbyIDDetailed(SearchDetailed searchDetailed) {
        Connection con=null;
        Hotel s=  new Hotel();
        List<Room> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql1="select * from hotel where hotel_id=?";
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            pstate1.setInt(1,searchDetailed.getId());
            ResultSet resultSet1 = pstate1.executeQuery();
            while (resultSet1.next()){
                s.setId(resultSet1.getInt("hotel_id"));
                s.setName(resultSet1.getString("hotel_name"));
                s.setDesciption(resultSet1.getString("hotel_description"));
                s.setScore(resultSet1.getDouble("hotel_score"));
                s.setLocation(resultSet1.getString("hotel_location"));
                s.setStar(resultSet1.getInt("hotel_star"));
                s.setDistance(resultSet1.getDouble("hotel_distance"));
                s.setImg_num(resultSet1.getInt("hotel_imgnum"));
                s.setCity(resultSet1.getString("hotel_city"));
                s.setAddress(resultSet1.getString("hotel_address"));
            }
            String sql2="SELECT a.hotel_id,a.room_id,a.room_name,a.room_size,a.room_price,a.room_breakfast,a.room_isfreecancel,a.room_isnorequire,a.room_num,a.room_num-COALESCE(b.num, 0) num FROM ( SELECT * FROM room WHERE hotel_id=? ) as a LEFT join (select hotelid,roomid,count(*) num from `order` where  hotelid=? and state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid";
            PreparedStatement pstate2 = con.prepareStatement(sql2);
            pstate2.setInt(1,searchDetailed.getId());
            pstate2.setInt(2,searchDetailed.getId());
            pstate2.setString(1,searchDetailed.getStartdate());
            pstate2.setString(2,searchDetailed.getEnddate());
            ResultSet resultSet2 = pstate2.executeQuery();
            while (resultSet2.next()){
                Room s1=new Room();
                s1.setId(resultSet2.getInt("room_id"));
                s1.setHotelid(resultSet2.getInt("hotel_id"));
                s1.setName(resultSet2.getString("room_name"));
                s1.setSize(resultSet2.getInt("room_size"));
                s1.setPrice_b(resultSet2.getInt("room_breakfast"));
                s1.setPrice_r(resultSet2.getInt("room_price"));
                s1.setIfFreeCancle(resultSet2.getInt("room_isfreecancel"));
                s1.setIfNoRequire(resultSet2.getInt("room_isnorequire"));
                s1.setNum_max(resultSet2.getInt("room_num"));
                s1.setNum_ava(resultSet2.getInt("num"));
                list.add(s1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
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
        return s;
    }
    public static Hotel SearchbyID(Hotel hotel) {
        Connection con=null;
        Hotel s=  new Hotel();
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from hotel where hotel_id=?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,hotel.getId());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                s.setId(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("hotel_name"));
                s.setDesciption(resultSet.getString("hotel_description"));
                s.setScore(resultSet.getDouble("hotel_score"));
                s.setLocation(resultSet.getString("hotel_location"));
                s.setStar(resultSet.getInt("hotel_star"));
                s.setDistance(resultSet.getDouble("hotel_distance"));
                s.setImg_num(resultSet.getInt("hotel_imgnum"));
                s.setCity(resultSet.getString("hotel_city"));
                s.setAddress(resultSet.getString("hotel_address"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
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
        return s;
    }
    public static List<Hotel> searchByName(Hotel hotel) {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();

        try{
            con= JDBCUtils.getConnect();
            String sql="select * from hotel where hotel_name like ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,'%'+hotel.getName()+'%');
            System.out.println(pstate);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Hotel s=  new Hotel();
                s.setId(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("hotel_name"));
                s.setDesciption(resultSet.getString("hotel_description"));
                s.setScore(resultSet.getDouble("hotel_score"));
                s.setLocation(resultSet.getString("hotel_location"));
                s.setStar(resultSet.getInt("hotel_star"));
                s.setDistance(resultSet.getDouble("hotel_distance"));
                s.setImg_num(resultSet.getInt("hotel_imgnum"));
                s.setCity(resultSet.getString("hotel_city"));
                s.setAddress(resultSet.getString("hotel_address"));
                list.add(s);
            }
        } catch (SQLException e) {
            e.printStackTrace();
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
        return list;
    }
    public static List<Hotel> searchByLocation(Hotel hotel) {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();

        try{
            con= JDBCUtils.getConnect();
            String sql="select * from hotel where hotel.hotel_city like ? or hotel.hotel_location  like ? ";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,'%'+hotel.getLocation()+'%');
            pstate.setString(2,'%'+hotel.getLocation()+'%');
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Hotel s=  new Hotel();
                s.setId(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("hotel_name"));
                s.setDesciption(resultSet.getString("hotel_description"));
                s.setScore(resultSet.getDouble("hotel_score"));
                s.setLocation(resultSet.getString("hotel_location"));
                s.setStar(resultSet.getInt("hotel_star"));
                s.setDistance(resultSet.getDouble("hotel_distance"));
                s.setImg_num(resultSet.getInt("hotel_imgnum"));
                s.setCity(resultSet.getString("hotel_city"));
                s.setAddress(resultSet.getString("hotel_address"));
                list.add(s);
            }
        } catch (SQLException e) {
            e.printStackTrace();
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
        return list;
    }
    public static List<Hotel> searchByScore(Hotel hotel) {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();

        try{
            con= JDBCUtils.getConnect();
            String sql="select * from hotel where hotel.hotel_score = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setDouble(1,hotel.getScore());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Hotel s=  new Hotel();
                s.setId(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("hotel_name"));
                s.setDesciption(resultSet.getString("hotel_description"));
                s.setScore(resultSet.getDouble("hotel_score"));
                s.setLocation(resultSet.getString("hotel_location"));
                s.setStar(resultSet.getInt("hotel_star"));
                s.setDistance(resultSet.getDouble("hotel_distance"));
                s.setImg_num(resultSet.getInt("hotel_imgnum"));
                s.setCity(resultSet.getString("hotel_city"));
                s.setAddress(resultSet.getString("hotel_address"));
                list.add(s);
            }
        } catch (SQLException e) {
            e.printStackTrace();
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
        return list;
    }
    public static List<Hotel> searchByStar(Hotel hotel) {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();

        try{
            con= JDBCUtils.getConnect();
            String sql="select * from hotel where hotel.hotel_star = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setDouble(1,hotel.getStar());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Hotel s=  new Hotel();
                s.setId(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("hotel_name"));
                s.setDesciption(resultSet.getString("hotel_description"));
                s.setScore(resultSet.getDouble("hotel_score"));
                s.setLocation(resultSet.getString("hotel_location"));
                s.setStar(resultSet.getInt("hotel_star"));
                s.setDistance(resultSet.getDouble("hotel_distance"));
                s.setImg_num(resultSet.getInt("hotel_imgnum"));
                s.setCity(resultSet.getString("hotel_city"));
                s.setAddress(resultSet.getString("hotel_address"));
                list.add(s);
            }
        } catch (SQLException e) {
            e.printStackTrace();
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
        return list;
    }
    public static Hotel add(Hotel hotel) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="INSERT INTO `HotelSystem`.`hotel`(`hotel_id`, `hotel_name`, `hotel_description`, `hotel_city`, `hotel_location`, `hotel_address`, `hotel_distance`, `hotel_score`, `hotel_imgnum`, `hotel_star`) VALUES (?, ?, ?,?, ?, ?,?,?, ?, ?)";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,hotel.getId());
            pstate.setString(2,hotel.getName());
            pstate.setString(3,hotel.getDesciption());
            pstate.setString(4,hotel.getCity());
            pstate.setString(5,hotel.getLocation());
            pstate.setString(6,hotel.getAddress());
            pstate.setDouble(7,hotel.getDistance());
            pstate.setDouble(8,hotel.getScore());
            pstate.setInt(9,hotel.getImg_num());
            pstate.setInt(10,hotel.getStar());
            pstate.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
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
        return hotel;
    }
    public static Hotel delete(Hotel hotel) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="DELETE FROM `HotelSystem`.`hotel` WHERE `hotel_id` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,hotel.getId());
            pstate.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
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
        return hotel;
    }
    public static Hotel update(Hotel hotel) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="UPDATE `HotelSystem`.`hotel` SET `hotel_name` = ?, `hotel_description` = ?, `hotel_city` = ?, `hotel_location` = ?, `hotel_address` = ?, `hotel_distance` = ?, `hotel_score` = ?, `hotel_imgnum` = ?, `hotel_star` = ? WHERE `hotel_id` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,hotel.getName());
            pstate.setString(2,hotel.getDesciption());
            pstate.setString(3,hotel.getCity());
            pstate.setString(4,hotel.getLocation());
            pstate.setString(5,hotel.getAddress());
            pstate.setDouble(6,hotel.getDistance());
            pstate.setDouble(7,hotel.getScore());
            pstate.setInt(8,hotel.getImg_num());
            pstate.setInt(9,hotel.getStar());
            pstate.setInt(10,hotel.getId());
            pstate.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
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
        return hotel;
    }
}
