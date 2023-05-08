package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import com.afterend.pojo.Hotel;
import com.afterend.pojo.Room;
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
    public static List<Room> SearchForHotelRoomNum(Search search) {
        Connection con=null;
        List<Room> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select a.hotel_id,a.room_id,a.room_num-b.num as num_ava from (select hotel_id,room_id,room_num from room where hotel_id=?) as a join (select hotelid,roomid,count(*) num from `order` where hotelid=? and state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid;";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,search.getId());
            pstate.setInt(2,search.getId());
            pstate.setString(3,search.getStartdate());
            pstate.setString(4,search.getEnddate());
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Room s=new Room();
                s.setId(resultSet.getInt("room_id"));
                s.setHotelid(resultSet.getInt("hotel_id"));
                s.setNum_ava(resultSet.getInt("num_ava"));
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
}
