package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import com.afterend.pojo.Hotel;
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
public class SearchDAO {
    public static List<Hotel> SearchbyLocationAndHotel(Search search) {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
//            String sql="select * from hotel where hotel_location=? and hotel_name=?";
//            PreparedStatement pstate = con.prepareStatement(sql);
//            pstate.setString(1,search.getLocation());
//            pstate.setString(2,search.getHotel());
//            ResultSet resultSet = pstate.executeQuery();
            int i=0;
            List<String> attribute=new ArrayList<>();
            String sql="select * from hotel where ";
            if(search.getLocation()!=null){
                sql+="hotel_location=?";
                attribute.add(search.getLocation());
                i++;
            }
            if(search.getHotel()!=null){
                if(i!=0){
                    sql+=" and hotel_name=?";
                    attribute.add(search.getHotel());
                }
                else sql+="hotel_name=?";
                attribute.add(search.getHotel());
                i++;
            }
            PreparedStatement pstate = con.prepareStatement(sql);
            for(int j=1;j<=attribute.size();j++)
            {
                pstate.setString(j,attribute.get(j-1));
            }
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
                    System.out.println("test ");
                }
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return list;
    }
}
