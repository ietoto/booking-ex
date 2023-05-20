package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.Order;
import com.afterend.pojo.User;
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
