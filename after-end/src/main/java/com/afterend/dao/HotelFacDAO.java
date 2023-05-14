package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.HotelFac;
import com.afterend.pojo.User;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class HotelFacDAO {
    public static List<HotelFac> getByHotelid(Hotel hotel) {
        Connection con=null;
        List<HotelFac> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from fac_hotel where hotel_id=?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,hotel.getId());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                HotelFac s=new HotelFac();
                s.setId(resultSet.getInt("hotel_id"));
                s.setName(resultSet.getString("hotel_facname"));
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
    public static HotelFac add(HotelFac hotelFac) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotel_id`, `hotel_facname`) VALUES (?, ?)";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,hotelFac.getId());
            pstate.setString(2,hotelFac.getName());
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
        return hotelFac;
    }
    public static HotelFac delete(HotelFac hotelFac) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="DELETE FROM `HotelSystem`.`fac_hotel` WHERE `hotel_id` = ? AND `hotel_facname` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,hotelFac.getId());
            pstate.setString(2,hotelFac.getName());
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
        return hotelFac;
    }
    public static HotelFac update(HotelFac hotelFac) {
        Connection con=null;
        try{
            con= JDBCUtils.getConnect();
            String sql="UPDATE `HotelSystem`.`fac_hotel` SET `hotel_facname` = ? WHERE `hotel_id` = ? AND `hotel_facname` = ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,hotelFac.getNew_name());
            pstate.setInt(2,hotelFac.getId());
            pstate.setString(3,hotelFac.getName());
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
        return hotelFac;
    }

}
