package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
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
public class UserDAO {
    public static User getByUsernameAndPassword(String username, String password) {
        Connection con=null;
        User s = null;
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from user where username=? and password=?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,username);
            pstate.setString(2,password);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                s=new User();
                s.setId(resultSet.getInt("id"));
                s.setUsername(resultSet.getString("username"));
                s.setPassword(resultSet.getString("password"));
                s.setName(resultSet.getString("name"));
                s.setPostbox(resultSet.getString("postbox"));
                s.setPhone(resultSet.getString("phone"));
                s.setState(resultSet.getInt("state"));
                s.setHotel_id(resultSet.getInt("hotel_id"));
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
    public static User insert(User user) {
        Connection con=null;
        User s = null;
        try{
            con= JDBCUtils.getConnect();
            String sql1="INSERT INTO `HotelSystem`.`user`(`username`, `password`, `name`, `postbox`, `phone`, `state`, `hotel_id`) VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            pstate1.setString(1,user.getUsername());
            pstate1.setString(2,user.getPassword());
            pstate1.setString(3,user.getName());
            pstate1.setString(4,user.getPostbox());
            pstate1.setString(5,user.getPhone());
            pstate1.setInt(6,user.getState());
            pstate1.setInt(7,user.getHotel_id());
            pstate1.executeUpdate();
            String sql2="select * from user where username=? and password=?";
            PreparedStatement pstate2 = con.prepareStatement(sql2);
            pstate2.setString(1,user.getUsername());
            pstate2.setString(2,user.getPassword());
            ResultSet resultSet = pstate2.executeQuery();
            while (resultSet.next()){
                s=new User();
                s.setId(resultSet.getInt("id"));
                s.setUsername(resultSet.getString("username"));
                s.setPassword(resultSet.getString("password"));
                s.setName(resultSet.getString("name"));
                s.setPostbox(resultSet.getString("postbox"));
                s.setPhone(resultSet.getString("phone"));
                s.setState(resultSet.getInt("state"));
                s.setHotel_id(resultSet.getInt("hotel_id"));
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
    public static User update(User user) {
        Connection con=null;
        User s = null;
        try{
            con= JDBCUtils.getConnect();
            String sql1="UPDATE `HotelSystem`.`user` SET `username`=?, `password`=?, `name` = ?, `postbox` = ?, `phone` = ?, `state` = ?, `hotel_id` = ? WHERE `id` = ?";
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            pstate1.setString(1,user.getUsername());
            pstate1.setString(2,user.getPassword());
            pstate1.setString(3,user.getName());
            pstate1.setString(4,user.getPostbox());
            pstate1.setString(5,user.getPhone());
            pstate1.setInt(6,user.getState());
            pstate1.setInt(7,user.getHotel_id());
            pstate1.setInt(8,user.getId());
            pstate1.executeUpdate();
            String sql2="select * from user where username=? and password=?";
            PreparedStatement pstate2 = con.prepareStatement(sql2);
            pstate2.setString(1,user.getUsername());
            pstate2.setString(2,user.getPassword());
            ResultSet resultSet = pstate2.executeQuery();
            while (resultSet.next()){
                s=new User();
                s.setId(resultSet.getInt("id"));
                s.setUsername(resultSet.getString("username"));
                s.setPassword(resultSet.getString("password"));
                s.setName(resultSet.getString("name"));
                s.setPostbox(resultSet.getString("postbox"));
                s.setPhone(resultSet.getString("phone"));
                s.setState(resultSet.getInt("state"));
                s.setHotel_id(resultSet.getInt("hotel_id"));
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
    public static List<User> showall() {
        Connection con=null;
        List<User> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from user";
            PreparedStatement pstate = con.prepareStatement(sql);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                User s=new User();
                s.setId(resultSet.getInt("id"));
                s.setUsername(resultSet.getString("username"));
                s.setPassword(resultSet.getString("password"));
                s.setName(resultSet.getString("name"));
                s.setPostbox(resultSet.getString("postbox"));
                s.setPhone(resultSet.getString("phone"));
                s.setState(resultSet.getInt("state"));
                s.setHotel_id(resultSet.getInt("hotel_id"));
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
    public static User delete(User user) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="DELETE FROM `HotelSystem`.`user` WHERE `id` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,user.getId());
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
        return user;
    }
}
