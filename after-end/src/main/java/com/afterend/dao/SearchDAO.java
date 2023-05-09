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
            String sql="select a.hotel_id,a.room_id,ifnull(a.room_num-b.num,a.room_num) as num_ava from (select hotel_id,room_id,room_num from room where hotel_id=?) as a LEFT join (select hotelid,roomid,count(*) num from `order` where hotelid=? and state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid;";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setInt(1,search.getId());
            pstate.setInt(2,search.getId());
            pstate.setString(3,search.getEnddate());
            pstate.setString(4,search.getStartdate());
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
    public static List<Hotel> SearchByDateAndHumanNum(Search search) {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select a.hotel_id,sum((ifnull(a.room_num-b.num,a.room_num)*a.room_size)) as num_hum from (select hotel_id,room_id,room_num,room_size from room) as a LEFT join (select hotelid,roomid,count(*) num from `order` where  state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid group by hotel_id HAVING num_hum >= ?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,search.getEnddate());
            pstate.setString(2,search.getStartdate());
            int num= (int) ((double)search.getAdult()+(double)search.getChild()/2);
            pstate.setInt(3,num);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Hotel s=new Hotel();
                s.setId(resultSet.getInt("hotel_id"));
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
    public static SearchDetailed SearchForSingalFac(Search search) {
        Connection con=null;
        SearchDetailed s=null;
        List<HotelFac> HotelFaclist=new ArrayList<>();
        List<RoomFac> RoomFaclist=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql1="SELECT * FROM fac_hotel where hotel_id=?;";
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            pstate1.setInt(1,search.getId());
            ResultSet resultSet1 = pstate1.executeQuery();
            while (resultSet1.next()){
                HotelFac temp=null;
                temp.setId(search.getId());
                temp.setName(resultSet1.getString("hotel_facname"));
                HotelFaclist.add(temp);
            }
            String sql2="SELECT hotel_id,room_facname FROM fac_room where hotel_id=? GROUP BY room_facname;";
            PreparedStatement pstate2 = con.prepareStatement(sql2);
            pstate2.setInt(1,search.getId());
            ResultSet resultSet2 = pstate1.executeQuery();
            while (resultSet2.next()){
                RoomFac temp=null;
                temp.setId(search.getId());
                temp.setName(resultSet1.getString("room_facname"));
                RoomFaclist.add(temp);
            }
            s.setHotelFacList(HotelFaclist);
            s.setRoomFacList(RoomFaclist);
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
    public static SearchDetailed SearchForAllFac() {
        Connection con=null;
        SearchDetailed s=null;
        List<HotelFac> HotelFaclist=new ArrayList<>();
        List<RoomFac> RoomFaclist=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql1="SELECT hotel_facname,count(*) num FROM fac_hotel GROUP BY hotel_facname";
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            ResultSet resultSet1 = pstate1.executeQuery();
            while (resultSet1.next()){
                HotelFac temp=null;
                temp.setName(resultSet1.getString("hotel_facname"));
                temp.setNum(resultSet1.getInt("num"));
                HotelFaclist.add(temp);
            }
            String sql2="SELECT room_facname,COUNT(*) num FROM (SELECT hotel_id,room_facname FROM fac_room GROUP BY room_facname,hotel_id)as a GROUP BY room_facname";
            PreparedStatement pstate2 = con.prepareStatement(sql2);
            ResultSet resultSet2 = pstate1.executeQuery();
            while (resultSet2.next()){
                RoomFac temp=null;
                temp.setName(resultSet1.getString("room_facname"));
                temp.setNum(resultSet1.getInt("num"));
                RoomFaclist.add(temp);
            }
            s.setHotelFacList(HotelFaclist);
            s.setRoomFacList(RoomFaclist);
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
    public static List<Hotel> SearchbyCityAndDateAndHumanNum(Search search) {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select a.hotel_id,sum((ifnull(a.room_num-b.num,a.room_num)*a.room_size)) as num_hum from (select hotel_id,room_id,room_num,room_size from room where hotel_id IN(SELECT hotel_id FROM hotel where hotel_city=?)) as a LEFT join (select hotelid,roomid,count(*) num from `order` where  state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid group by hotel_id HAVING num_hum > ?;";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,search.getLocation());
            pstate.setString(2,search.getEnddate());
            pstate.setString(3,search.getStartdate());
            int num= (int) ((double)search.getAdult()+(double)search.getChild()/2);
            pstate.setInt(4,num);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Hotel s=new Hotel();
                s.setId(resultSet.getInt("hotel_id"));
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
    public static List<Hotel> SearchbyLocationAndDateAndHumanNum(Search search) {
        Connection con=null;
        List<Hotel> list=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql="select a.hotel_id,sum((ifnull(a.room_num-b.num,a.room_num)*a.room_size)) as num_hum from (select hotel_id,room_id,room_num,room_size from room where hotel_id IN(SELECT hotel_id FROM hotel where hotel_location=?)) as a LEFT join (select hotelid,roomid,count(*) num from `order` where  state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid group by hotel_id HAVING num_hum > ?;";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,search.getLocation());
            pstate.setString(2,search.getEnddate());
            pstate.setString(3,search.getStartdate());
            int num= (int) ((double)search.getAdult()+(double)search.getChild()/2);
            pstate.setInt(4,num);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                Hotel s=new Hotel();
                s.setId(resultSet.getInt("hotel_id"));
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
    public static SearchDetailed SearchForFirstLocation(Search search) {
        Connection con=null;
        SearchDetailed s=null;
        List<Hotel> Hotellist=new ArrayList<>();
        List<HotelFac> HotelFaclist=new ArrayList<>();
        List<RoomFac> RoomFaclist=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql1="CREATE VIEW hotellist AS select a.hotel_id,sum((ifnull(a.room_num-b.num,a.room_num)*a.room_size)) as num_hum from (select hotel_id,room_id,room_num,room_size from room where hotel_id IN(SELECT hotel_id FROM hotel where hotel_location=?)) as a LEFT join (select hotelid,roomid,count(*) num from `order` where  state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid group by hotel_id HAVING num_hum > ?;";
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            pstate1.setString(1,search.getLocation());
            pstate1.setString(2,search.getEnddate());
            pstate1.setString(3,search.getStartdate());
            int num= (int) ((double)search.getAdult()+(double)search.getChild()/2);
            pstate1.setInt(4,num);
            pstate1.executeUpdate();

            String sql2="SELECT * from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate2 = con.prepareStatement(sql2);
            ResultSet resultSet2 = pstate2.executeQuery();
            while (resultSet2.next()){
                Hotel temp=null;
                temp.setId(resultSet2.getInt("hotel_id"));
                temp.setName(resultSet2.getString("hotel_name"));
                temp.setDesciption(resultSet2.getString("hotel_description"));
                temp.setScore(resultSet2.getDouble("hotel_score"));
                temp.setLocation(resultSet2.getString("hotel_location"));
                temp.setStar(resultSet2.getInt("hotel_star"));
                temp.setDistance(resultSet2.getDouble("hotel_distance"));
                temp.setImg_num(resultSet2.getInt("hotel_imgnum"));
                temp.setCity(resultSet2.getString("hotel_city"));
                temp.setAddress(resultSet2.getString("hotel_address"));
                Hotellist.add(temp);
            }
            String sql3="SELECT hotel_facname,count(*) num FROM fac_hotel WHERE hotel_id IN (SELECT hotel_id FROM hotellist)GROUP BY hotel_facname;";
            PreparedStatement pstate3 = con.prepareStatement(sql3);
            ResultSet resultSet3 = pstate3.executeQuery();
            while (resultSet3.next()){
                HotelFac temp=null;
                temp.setName(resultSet3.getString("hotel_facname"));
                temp.setNum(resultSet3.getInt("num"));
                HotelFaclist.add(temp);
            }
            String sql4="SELECT room_facname,COUNT(*) num FROM (SELECT hotel_id,room_facname FROM fac_room WHERE hotel_id IN (SELECT hotel_id FROM hotellist)GROUP BY room_facname,hotel_id)as a GROUP BY room_facname;";
            PreparedStatement pstate4 = con.prepareStatement(sql4);
            ResultSet resultSet4 = pstate4.executeQuery();
            while (resultSet4.next()){
                RoomFac temp=null;
                temp.setName(resultSet4.getString("room_facname"));
                temp.setNum(resultSet4.getInt("num"));
                RoomFaclist.add(temp);
            }
            s.setHotels(Hotellist);
            s.setHotelFacList(HotelFaclist);
            s.setRoomFacList(RoomFaclist);

            String sql5="drop view hotellist;";
            PreparedStatement pstate5 = con.prepareStatement(sql5);
            pstate5.executeUpdate();
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
}
