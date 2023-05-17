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
                    sql+=" and hotel_name like ?";
                    attribute.add('%'+search.getHotel()+'%');
                }
                else{
                    sql+="hotel_name like ?";
                    attribute.add('%'+search.getHotel()+'%');}
                i++;
            }
            System.out.println(sql);
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
            String sql1="CREATE VIEW hotellist AS select a.hotel_id,sum((ifnull(a.room_num-b.num,a.room_num)*a.room_size)) as num_hum from (select hotel_id,room_id,room_num,room_size from room where hotel_id IN(SELECT hotel_id FROM hotel where hotel_location Like ?)) as a LEFT join (select hotelid,roomid,count(*) num from `order` where  state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid group by hotel_id HAVING num_hum > ?;";
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            pstate1.setString(1,'%'+search.getLocation()+'%');
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
    public static SearchDetailed SearchForFirstCity(Search search) {
        Connection con=null;
        SearchDetailed s=null;
        List<Hotel> Hotellist=new ArrayList<>();
        List<HotelFac> HotelFaclist=new ArrayList<>();
        List<RoomFac> RoomFaclist=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql1="CREATE VIEW hotellist AS select a.hotel_id,sum((ifnull(a.room_num-b.num,a.room_num)*a.room_size)) as num_hum from (select hotel_id,room_id,room_num,room_size from room where hotel_id IN(SELECT hotel_id FROM hotel where hotel_city=?)) as a LEFT join (select hotelid,roomid,count(*) num from `order` where  state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid group by hotel_id HAVING num_hum > ?;";
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
    public static SearchDetailed SearchForFirst(SearchDetailed search) {
        Connection con=null;
        SearchDetailed s= new SearchDetailed();
        List<Integer> star_num=new ArrayList<>();
        List<Integer> distance_num=new ArrayList<>();
        List<Integer> score_num=new ArrayList<>();

        List<Hotel> Hotellist=new ArrayList<>();
        List<HotelFac> HotelFaclist=new ArrayList<>();
        List<RoomFac> RoomFaclist=new ArrayList<>();

        List<Integer> break_num=new ArrayList<>();
        List<Integer> cancle_policy_num=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql00="DROP VIEW IF EXISTS hotellist;";
            PreparedStatement pstate00 = con.prepareStatement(sql00);
            pstate00.executeUpdate();
            String sql1="CREATE VIEW hotellist AS select a.hotel_id,sum((ifnull(a.room_num-b.num,a.room_num)*a.room_size)) as num_hum from (select hotel_id,room_id,room_num,room_size from room where hotel_id IN(SELECT hotel_id FROM hotel where hotel_name Like ? OR hotel_city Like ? OR hotel_location Like ?)) as a LEFT join (select hotelid,roomid,count(*) num from `order` where  state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid group by hotel_id HAVING num_hum > ?;";
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            pstate1.setString(1,'%'+search.getLocation()+'%');
            pstate1.setString(2,'%'+search.getLocation()+'%');
            pstate1.setString(3,'%'+search.getLocation()+'%');
            pstate1.setString(4,search.getEnddate());
            pstate1.setString(5,search.getStartdate());
            int num= (int) ((double)search.getAdult()+(double)search.getChild()/2);
            pstate1.setInt(6,num);
            pstate1.executeUpdate();

            String sql2="SELECT * from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate2 = con.prepareStatement(sql2);
            ResultSet resultSet2 = pstate2.executeQuery();
            while (resultSet2.next()){
                Hotel temp=new Hotel();
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
            String sql3="SELECT count(*)num FROM hotellist;";
            PreparedStatement pstate3 = con.prepareStatement(sql3);
            ResultSet resultSet3 = pstate3.executeQuery();
            while (resultSet3.next()){
                s.setNum(resultSet3.getInt("num"));
            }
            String sql4="SELECT sum(star0)star_0,sum(star1)star_1,sum(star2)star_2,sum(star3)star_3,sum(star4)star_4,sum(star5)star_5 FROM(SELECT if(hotel_star=0,1,0)star0,if(hotel_star=1,1,0)star1,if(hotel_star=2,1,0)star2,if(hotel_star=3,1,0)star3,if(hotel_star=4,1,0)star4,if(hotel_star=5,1,0)star5 from hotel where hotel_id in (SELECT hotel_id FROM hotellist)) a;";
            PreparedStatement pstate4 = con.prepareStatement(sql4);
            ResultSet resultSet4 = pstate4.executeQuery();
            while (resultSet4.next()){
                star_num.add(resultSet4.getInt("star_0"));
                star_num.add(resultSet4.getInt("star_1"));
                star_num.add(resultSet4.getInt("star_2"));
                star_num.add(resultSet4.getInt("star_3"));
                star_num.add(resultSet4.getInt("star_4"));
                star_num.add(resultSet4.getInt("star_5"));
                s.setStar_num(star_num);
            }
            String sql01="DROP VIEW IF EXISTS distance;";
            PreparedStatement pstate01 = con.prepareStatement(sql01);
            pstate01.executeUpdate();
            String sql5="CREATE VIEW distance AS SELECT hotel_distance,if(hotel_distance>0 and hotel_distance<=1,1,0) dis_1,if(hotel_distance>0 and hotel_distance<=3,1,0) dis_3,if(hotel_distance>0 and hotel_distance<=5,1,0) dis_5 from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate5 = con.prepareStatement(sql5);
            pstate5.executeUpdate();
            String sql6="SELECT sum(dis_1) dis1,sum(dis_3) dis3,sum(dis_5) dis5 FROM distance;";
            PreparedStatement pstate6 = con.prepareStatement(sql6);
            ResultSet resultSet6 = pstate6.executeQuery();
            while (resultSet6.next()){
                distance_num.add(resultSet6.getInt("dis1"));
                distance_num.add(resultSet6.getInt("dis3"));
                distance_num.add(resultSet6.getInt("dis5"));
                s.setDistance_num(distance_num);
            }
            String sql7="drop view distance;";
            PreparedStatement pstate7 = con.prepareStatement(sql7);
            pstate7.executeUpdate();
            String sql02="DROP VIEW IF EXISTS score;";
            PreparedStatement pstate02 = con.prepareStatement(sql02);
            pstate02.executeUpdate();
            String sql8="CREATE VIEW score AS SELECT hotel_score,if(hotel_score>=9,1,0) sco_9,if(hotel_score>=8,1,0) dis_8,if(hotel_score>=7,1,0) dis_7,if(hotel_score>=6,1,0) dis_6 from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate8 = con.prepareStatement(sql8);
            pstate8.executeUpdate();
            String sql9="SELECT sum(sco_9) sco9,sum(dis_8) sco8,sum(dis_7) sco7,sum(dis_6) sco6 FROM score;";
            PreparedStatement pstate9 = con.prepareStatement(sql9);
            ResultSet resultSet9 = pstate9.executeQuery();
            while (resultSet9.next()){
                score_num.add(resultSet9.getInt("sco9"));
                score_num.add(resultSet9.getInt("sco8"));
                score_num.add(resultSet9.getInt("sco7"));
                score_num.add(resultSet9.getInt("sco6"));
                s.setScore_num(score_num);
            }
            String sql10="drop view score;";
            PreparedStatement pstate10 = con.prepareStatement(sql10);
            pstate10.executeUpdate();
            String sql11="SELECT hotel_facname,count(*) num FROM fac_hotel WHERE hotel_id IN (SELECT hotel_id FROM hotellist)GROUP BY hotel_facname;";
            PreparedStatement pstate11 = con.prepareStatement(sql11);
            ResultSet resultSet11 = pstate11.executeQuery();
            while (resultSet11.next()){
                HotelFac temp=new HotelFac();
                temp.setName(resultSet11.getString("hotel_facname"));
                temp.setNum(resultSet11.getInt("num"));
                HotelFaclist.add(temp);
            }
            String sql12="SELECT room_facname,COUNT(*) num FROM (SELECT hotel_id,room_facname FROM fac_room WHERE hotel_id IN (SELECT hotel_id FROM hotellist)GROUP BY room_facname,hotel_id)as a GROUP BY room_facname;";
            PreparedStatement pstate12 = con.prepareStatement(sql12);
            ResultSet resultSet12 = pstate12.executeQuery();
            while (resultSet12.next()){
                RoomFac temp=new RoomFac();
                temp.setName(resultSet12.getString("room_facname"));
                temp.setNum(resultSet12.getInt("num"));
                RoomFaclist.add(temp);
            }
            String sql13="SELECT sum(under100)under_100,sum(up100)up_100,sum(freecancel)free_cancel,sum(norequire)no_require FROM (SELECT if(sum(if(room_breakfast<100,1,0))>0,1,0)under100,if(sum(if(room_breakfast>=100,1,0))>0,1,0)up100,if(sum(room_isfreecancel)>0,1,0)freecancel,if(sum(room_isnorequire)>0,1,0)norequire FROM room WHERE hotel_id IN (SELECT hotel_id FROM hotellist) GROUP BY hotel_id) a;";
            PreparedStatement pstate13 = con.prepareStatement(sql13);
            ResultSet resultSet13 = pstate13.executeQuery();
            while (resultSet13.next()){
                break_num.add(resultSet13.getInt("under_100"));
                break_num.add(resultSet13.getInt("up_100"));
                cancle_policy_num.add(resultSet13.getInt("free_cancel"));
                cancle_policy_num.add(resultSet13.getInt("no_require"));
                s.setBreak_num(break_num);
                s.setCancle_policy_num(cancle_policy_num);
            }
            s.setHotels(Hotellist);
            s.setHotelFacList(HotelFaclist);
            s.setRoomFacList(RoomFaclist);

            String sql14="drop view hotellist;";
            PreparedStatement pstate14 = con.prepareStatement(sql14);
            pstate14.executeUpdate();
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
    public static SearchDetailed SearchForFirstLimit(SearchDetailed search) {
        Connection con=null;
        SearchDetailed s= new SearchDetailed();
        List<Integer> star_num=new ArrayList<>();
        List<Integer> distance_num=new ArrayList<>();
        List<Integer> score_num=new ArrayList<>();

        List<Hotel> Hotellist=new ArrayList<>();
        List<HotelFac> HotelFaclist=new ArrayList<>();
        List<RoomFac> RoomFaclist=new ArrayList<>();

        List<Integer> break_num=new ArrayList<>();
        List<Integer> cancle_policy_num=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql00="DROP VIEW IF EXISTS hotellist;";
            PreparedStatement pstate00 = con.prepareStatement(sql00);
            pstate00.executeUpdate();
            String sql1="CREATE VIEW hotellist AS select a.hotel_id,sum((ifnull(a.room_num-b.num,a.room_num)*a.room_size)) as num_hum from (select hotel_id,room_id,room_num,room_size from room where hotel_id IN(SELECT hotel_id FROM hotel where hotel_name Like ? OR hotel_city Like ? OR hotel_location Like ?)) as a LEFT join (select hotelid,roomid,count(*) num from `order` where  state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid group by hotel_id HAVING num_hum > ? limit 50;";
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            pstate1.setString(1,'%'+search.getLocation()+'%');
            pstate1.setString(2,'%'+search.getLocation()+'%');
            pstate1.setString(3,'%'+search.getLocation()+'%');
            pstate1.setString(4,search.getEnddate());
            pstate1.setString(5,search.getStartdate());
            int num= (int) ((double)search.getAdult()+(double)search.getChild()/2);
            pstate1.setInt(6,num);
            pstate1.executeUpdate();

            String sql2="SELECT * from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate2 = con.prepareStatement(sql2);
            ResultSet resultSet2 = pstate2.executeQuery();
            while (resultSet2.next()){
                Hotel temp=new Hotel();
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
            String sql3="SELECT count(*)num FROM hotellist;";
            PreparedStatement pstate3 = con.prepareStatement(sql3);
            ResultSet resultSet3 = pstate3.executeQuery();
            while (resultSet3.next()){
                s.setNum(resultSet3.getInt("num"));
            }
            String sql4="SELECT sum(star0)star_0,sum(star1)star_1,sum(star2)star_2,sum(star3)star_3,sum(star4)star_4,sum(star5)star_5 FROM(SELECT if(hotel_star=0,1,0)star0,if(hotel_star=1,1,0)star1,if(hotel_star=2,1,0)star2,if(hotel_star=3,1,0)star3,if(hotel_star=4,1,0)star4,if(hotel_star=5,1,0)star5 from hotel where hotel_id in (SELECT hotel_id FROM hotellist)) a;";
            PreparedStatement pstate4 = con.prepareStatement(sql4);
            ResultSet resultSet4 = pstate4.executeQuery();
            while (resultSet4.next()){
                star_num.add(resultSet4.getInt("star_0"));
                star_num.add(resultSet4.getInt("star_1"));
                star_num.add(resultSet4.getInt("star_2"));
                star_num.add(resultSet4.getInt("star_3"));
                star_num.add(resultSet4.getInt("star_4"));
                star_num.add(resultSet4.getInt("star_5"));
                s.setStar_num(star_num);
            }
            String sql01="DROP VIEW IF EXISTS distance;";
            PreparedStatement pstate01 = con.prepareStatement(sql01);
            pstate01.executeUpdate();
            String sql5="CREATE VIEW distance AS SELECT hotel_distance,if(hotel_distance>0 and hotel_distance<=1,1,0) dis_1,if(hotel_distance>0 and hotel_distance<=3,1,0) dis_3,if(hotel_distance>0 and hotel_distance<=5,1,0) dis_5 from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate5 = con.prepareStatement(sql5);
            pstate5.executeUpdate();
            String sql6="SELECT sum(dis_1) dis1,sum(dis_3) dis3,sum(dis_5) dis5 FROM distance;";
            PreparedStatement pstate6 = con.prepareStatement(sql6);
            ResultSet resultSet6 = pstate6.executeQuery();
            while (resultSet6.next()){
                distance_num.add(resultSet6.getInt("dis1"));
                distance_num.add(resultSet6.getInt("dis3"));
                distance_num.add(resultSet6.getInt("dis5"));
                s.setDistance_num(distance_num);
            }
            String sql7="drop view distance;";
            PreparedStatement pstate7 = con.prepareStatement(sql7);
            pstate7.executeUpdate();
            String sql02="DROP VIEW IF EXISTS score;";
            PreparedStatement pstate02 = con.prepareStatement(sql02);
            pstate02.executeUpdate();
            String sql8="CREATE VIEW score AS SELECT hotel_score,if(hotel_score>=9,1,0) sco_9,if(hotel_score>=8,1,0) dis_8,if(hotel_score>=7,1,0) dis_7,if(hotel_score>=6,1,0) dis_6 from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate8 = con.prepareStatement(sql8);
            pstate8.executeUpdate();
            String sql9="SELECT sum(sco_9) sco9,sum(dis_8) sco8,sum(dis_7) sco7,sum(dis_6) sco6 FROM score;";
            PreparedStatement pstate9 = con.prepareStatement(sql9);
            ResultSet resultSet9 = pstate9.executeQuery();
            while (resultSet9.next()){
                score_num.add(resultSet9.getInt("sco9"));
                score_num.add(resultSet9.getInt("sco8"));
                score_num.add(resultSet9.getInt("sco7"));
                score_num.add(resultSet9.getInt("sco6"));
                s.setScore_num(score_num);
            }
            String sql10="drop view score;";
            PreparedStatement pstate10 = con.prepareStatement(sql10);
            pstate10.executeUpdate();
            String sql11="SELECT hotel_facname,count(*) num FROM fac_hotel WHERE hotel_id IN (SELECT hotel_id FROM hotellist)GROUP BY hotel_facname;";
            PreparedStatement pstate11 = con.prepareStatement(sql11);
            ResultSet resultSet11 = pstate11.executeQuery();
            while (resultSet11.next()){
                HotelFac temp=new HotelFac();
                temp.setName(resultSet11.getString("hotel_facname"));
                temp.setNum(resultSet11.getInt("num"));
                HotelFaclist.add(temp);
            }
            String sql12="SELECT room_facname,COUNT(*) num FROM (SELECT hotel_id,room_facname FROM fac_room WHERE hotel_id IN (SELECT hotel_id FROM hotellist)GROUP BY room_facname,hotel_id)as a GROUP BY room_facname;";
            PreparedStatement pstate12 = con.prepareStatement(sql12);
            ResultSet resultSet12 = pstate12.executeQuery();
            while (resultSet12.next()){
                RoomFac temp=new RoomFac();
                temp.setName(resultSet12.getString("room_facname"));
                temp.setNum(resultSet12.getInt("num"));
                RoomFaclist.add(temp);
            }
            String sql13="SELECT sum(under100)under_100,sum(up100)up_100,sum(freecancel)free_cancel,sum(norequire)no_require FROM (SELECT if(sum(if(room_breakfast<100,1,0))>0,1,0)under100,if(sum(if(room_breakfast>=100,1,0))>0,1,0)up100,if(sum(room_isfreecancel)>0,1,0)freecancel,if(sum(room_isnorequire)>0,1,0)norequire FROM room WHERE hotel_id IN (SELECT hotel_id FROM hotellist) GROUP BY hotel_id) a;";
            PreparedStatement pstate13 = con.prepareStatement(sql13);
            ResultSet resultSet13 = pstate13.executeQuery();
            while (resultSet13.next()){
                break_num.add(resultSet13.getInt("under_100"));
                break_num.add(resultSet13.getInt("up_100"));
                cancle_policy_num.add(resultSet13.getInt("free_cancel"));
                cancle_policy_num.add(resultSet13.getInt("no_require"));
                s.setBreak_num(break_num);
                s.setCancle_policy_num(cancle_policy_num);
            }
            s.setHotels(Hotellist);
            s.setHotelFacList(HotelFaclist);
            s.setRoomFacList(RoomFaclist);

            String sql14="drop view hotellist;";
            PreparedStatement pstate14 = con.prepareStatement(sql14);
            pstate14.executeUpdate();
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
    public static SearchDetailed SearchForSecond(SearchDetailed search) {
        Connection con=null;
        SearchDetailed s= new SearchDetailed();
        List<Integer> star_num=new ArrayList<>();
        List<Integer> distance_num=new ArrayList<>();
        List<Integer> score_num=new ArrayList<>();

        List<Hotel> Hotellist=new ArrayList<>();
        List<HotelFac> HotelFaclist=new ArrayList<>();
        List<RoomFac> RoomFaclist=new ArrayList<>();

        List<Integer> break_num=new ArrayList<>();
        List<Integer> cancle_policy_num=new ArrayList<>();
        try{
            con= JDBCUtils.getConnect();
            String sql00="DROP VIEW IF EXISTS hotellist;";
            PreparedStatement pstate00 = con.prepareStatement(sql00);
            pstate00.executeUpdate();
            String sql1="CREATE VIEW hotellist AS select a.hotel_id,sum((ifnull(a.room_num-b.num,a.room_num)*a.room_size)) as num_hum from (select hotel_id,room_id,room_num,room_size from room where hotel_id IN(SELECT hotel_id FROM hotel where (hotel_name Like ? OR hotel_city Like ? OR hotel_location Like ?) ";

            int i=-1;
            if(search.getSelect_distance_num()!=null){
                for(int j=0;j<search.getSelect_distance_num().size();j++){
                    if(search.getSelect_distance_num().get(j))i=j;
                }
            }
            switch (i){
                case 0:{
                    sql1+="AND hotel_distance<=1 AND hotel_distance>0 ";
                    break;
                }
                case 1:{
                    sql1+="AND hotel_distance<=3 AND hotel_distance>0 ";
                    break;
                }
                case 2:{
                    sql1+="AND hotel_distance<=5 AND hotel_distance>0 ";
                    break;
                }
            }
            i=-1;
            if(search.getSelect_score_num()!=null){
                for(int j=0;j<search.getSelect_score_num().size();j++){
                    if(search.getSelect_score_num().get(j))i=j;
                }
            }
            switch (i){
                case 0:{
                    sql1+="AND hotel_score>=9 ";
                    break;
                }
                case 1:{
                    sql1+="AND hotel_score>=8 ";
                    break;
                }
                case 2:{
                    sql1+="AND hotel_score>=7 ";
                    break;
                }
                case 3:{
                    sql1+="AND hotel_score>=6 ";
                    break;
                }
            }
            i=-1;
            if(search.getSelect_star_num()!=null){
                for(int j=0;j<search.getSelect_star_num().size();j++){
                    if(search.getSelect_star_num().get(j)){
                        i=j;
                        break;
                    }
                }
            }
            if(i!=-1){
                sql1+="AND (";
                for(int j=0;j<search.getSelect_star_num().size();j++){
                    if(search.getSelect_star_num().get(j)){
                        if(i==j){
                            sql1+=" hotel_star="+Integer.toString(i);
                        }
                        else{
                            sql1+=" OR hotel_star="+Integer.toString(i);
                        }
                    }
                }
                sql1+=" )";
            }

            sql1+=")";
            i=-1;
            if(search.getSelect_policy_num()!=null){
                for(int j=0;j<search.getSelect_policy_num().size();j++){
                    if(search.getSelect_policy_num().get(j)){
                        i=j;
                        break;
                    }
                }
            }
            if(i!=-1){
                if(search.getSelect_policy_num().get(0)){
                    sql1+=" AND room_isfreecancel= 1";
                }
                if(search.getSelect_policy_num().get(1)){
                    sql1+=" AND room_isnorequire= 1";
                }
            }

            i=-1;
            if(search.getSelect_break_num()!=null){
                for(int j=0;j<search.getSelect_break_num().size();j++){
                    if(search.getSelect_break_num().get(j)){
                        i=j;
                        break;
                    }
                }
            }
            if(i!=-1){
                sql1+="AND (";
                for(int j=0;j<search.getSelect_break_num().size();j++){
                    if(search.getSelect_break_num().get(j)){
                        if(i==j){
                            if (j == 0) {
                                sql1+=" room_breakfast<100";
                            }
                            else{
                                sql1+=" room_breakfast>=100";
                            }
                        }
                        else{
                            if (j == 0) {
                                sql1+=" OR room_breakfast<100";
                            }
                            else{
                                sql1+=" OR room_breakfast>=100";
                            }
                        }
                    }
                }
                sql1+=" )";
            }

            i=-1;
            if(search.getSelect_hotelFacList()!=null){
                for(int j=0;j<search.getSelect_hotelFacList().size();j++){
                    if(search.getSelect_hotelFacList().get(j).getNum()>0){
                        i=j;
                        break;
                    }
                }
            }
            if(i!=-1){
                sql1+=" AND hotel_id IN(SELECT hotel_id FROM fac_hotel where ";
                for(int j=0;j<search.getSelect_hotelFacList().size();j++){
                    if(search.getSelect_hotelFacList().get(j).getNum()>0){
                        if(i==j){
                            sql1+="hotel_facname="+search.getSelect_hotelFacList().get(j).getName();
                        }
                        else{
                            sql1+=" OR hotel_facname="+search.getSelect_hotelFacList().get(j).getName();
                        }
                    }
                }
                sql1+=" )";
            }

            i=-1;
            if(search.getSelect_roomFacList()!=null){
                for(int j=0;j<search.getSelect_roomFacList().size();j++){
                    if(search.getSelect_roomFacList().get(j).getNum()>0){
                        i=j;
                        break;
                    }
                }
            }
            if(i!=-1){
                sql1+=" AND hotel_id IN(SELECT hotel_id FROM fac_room where ";
                for(int j=0;j<search.getSelect_roomFacList().size();j++){
                    if(search.getSelect_roomFacList().get(j).getNum()>0){
                        if(i==j){
                            sql1+="room_facname="+search.getSelect_roomFacList().get(j).getName();
                        }
                        else{
                            sql1+=" OR room_facname="+search.getSelect_roomFacList().get(j).getName();
                        }
                    }
                }
                sql1+=" )";
            }

            sql1+=") as a LEFT join (select hotelid,roomid,count(*) num from `order` where  state=1 and startdate<=? and enddate >=? GROUP BY hotelid,roomid) as b on a.hotel_id=b.hotelid and a.room_id=b.roomid group by hotel_id HAVING num_hum > ?;";
            System.out.println(sql1);
            PreparedStatement pstate1 = con.prepareStatement(sql1);
            pstate1.setString(1,'%'+search.getLocation()+'%');
            pstate1.setString(2,'%'+search.getLocation()+'%');
            pstate1.setString(3,'%'+search.getLocation()+'%');
            pstate1.setString(4,search.getEnddate());
            pstate1.setString(5,search.getStartdate());
            int num= (int) ((double)search.getAdult()+(double)search.getChild()/2);
            pstate1.setInt(6,num);
            pstate1.executeUpdate();

            String sql2="SELECT * from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate2 = con.prepareStatement(sql2);
            ResultSet resultSet2 = pstate2.executeQuery();
            while (resultSet2.next()){
                Hotel temp=new Hotel();
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
            String sql3="SELECT count(*)num FROM hotellist;";
            PreparedStatement pstate3 = con.prepareStatement(sql3);
            ResultSet resultSet3 = pstate3.executeQuery();
            while (resultSet3.next()){
                s.setNum(resultSet3.getInt("num"));
            }
            String sql4="SELECT sum(star0)star_0,sum(star1)star_1,sum(star2)star_2,sum(star3)star_3,sum(star4)star_4,sum(star5)star_5 FROM(SELECT if(hotel_star=0,1,0)star0,if(hotel_star=1,1,0)star1,if(hotel_star=2,1,0)star2,if(hotel_star=3,1,0)star3,if(hotel_star=4,1,0)star4,if(hotel_star=5,1,0)star5 from hotel where hotel_id in (SELECT hotel_id FROM hotellist)) a;";
            PreparedStatement pstate4 = con.prepareStatement(sql4);
            ResultSet resultSet4 = pstate4.executeQuery();
            while (resultSet4.next()){
                star_num.add(resultSet4.getInt("star_0"));
                star_num.add(resultSet4.getInt("star_1"));
                star_num.add(resultSet4.getInt("star_2"));
                star_num.add(resultSet4.getInt("star_3"));
                star_num.add(resultSet4.getInt("star_4"));
                star_num.add(resultSet4.getInt("star_5"));
                s.setStar_num(star_num);
            }
            String sql01="DROP VIEW IF EXISTS distance;";
            PreparedStatement pstate01 = con.prepareStatement(sql01);
            pstate01.executeUpdate();
            String sql5="CREATE VIEW distance AS SELECT hotel_distance,if(hotel_distance>0 and hotel_distance<=1,1,0) dis_1,if(hotel_distance>0 and hotel_distance<=3,1,0) dis_3,if(hotel_distance>0 and hotel_distance<=5,1,0) dis_5 from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate5 = con.prepareStatement(sql5);
            pstate5.executeUpdate();
            String sql6="SELECT sum(dis_1) dis1,sum(dis_3) dis3,sum(dis_5) dis5 FROM distance;";
            PreparedStatement pstate6 = con.prepareStatement(sql6);
            ResultSet resultSet6 = pstate6.executeQuery();
            while (resultSet6.next()){
                distance_num.add(resultSet6.getInt("dis1"));
                distance_num.add(resultSet6.getInt("dis3"));
                distance_num.add(resultSet6.getInt("dis5"));
                s.setDistance_num(distance_num);
            }
            String sql7="drop view distance;";
            PreparedStatement pstate7 = con.prepareStatement(sql7);
            pstate7.executeUpdate();
            String sql02="DROP VIEW IF EXISTS score;";
            PreparedStatement pstate02 = con.prepareStatement(sql02);
            pstate02.executeUpdate();
            String sql8="CREATE VIEW score AS SELECT hotel_score,if(hotel_score>=9,1,0) sco_9,if(hotel_score>=8,1,0) dis_8,if(hotel_score>=7,1,0) dis_7,if(hotel_score>=6,1,0) dis_6 from hotel where hotel_id in (SELECT hotel_id FROM hotellist);";
            PreparedStatement pstate8 = con.prepareStatement(sql8);
            pstate8.executeUpdate();
            String sql9="SELECT sum(sco_9) sco9,sum(dis_8) sco8,sum(dis_7) sco7,sum(dis_6) sco6 FROM score;";
            PreparedStatement pstate9 = con.prepareStatement(sql9);
            ResultSet resultSet9 = pstate9.executeQuery();
            while (resultSet9.next()){
                score_num.add(resultSet9.getInt("sco9"));
                score_num.add(resultSet9.getInt("sco8"));
                score_num.add(resultSet9.getInt("sco7"));
                score_num.add(resultSet9.getInt("sco6"));
                s.setScore_num(score_num);
            }
            String sql10="drop view score;";
            PreparedStatement pstate10 = con.prepareStatement(sql10);
            pstate10.executeUpdate();
            String sql11="SELECT hotel_facname,count(*) num FROM fac_hotel WHERE hotel_id IN (SELECT hotel_id FROM hotellist)GROUP BY hotel_facname;";
            PreparedStatement pstate11 = con.prepareStatement(sql11);
            ResultSet resultSet11 = pstate11.executeQuery();
            while (resultSet11.next()){
                HotelFac temp=new HotelFac();
                temp.setName(resultSet11.getString("hotel_facname"));
                temp.setNum(resultSet11.getInt("num"));
                HotelFaclist.add(temp);
            }
            String sql12="SELECT room_facname,COUNT(*) num FROM (SELECT hotel_id,room_facname FROM fac_room WHERE hotel_id IN (SELECT hotel_id FROM hotellist)GROUP BY room_facname,hotel_id)as a GROUP BY room_facname;";
            PreparedStatement pstate12 = con.prepareStatement(sql12);
            ResultSet resultSet12 = pstate12.executeQuery();
            while (resultSet12.next()){
                RoomFac temp=new RoomFac();
                temp.setName(resultSet12.getString("room_facname"));
                temp.setNum(resultSet12.getInt("num"));
                RoomFaclist.add(temp);
            }
            String sql13="SELECT sum(under100)under_100,sum(up100)up_100,sum(freecancel)free_cancel,sum(norequire)no_require FROM (SELECT if(sum(if(room_breakfast<100,1,0))>0,1,0)under100,if(sum(if(room_breakfast>=100,1,0))>0,1,0)up100,if(sum(room_isfreecancel)>0,1,0)freecancel,if(sum(room_isnorequire)>0,1,0)norequire FROM room WHERE hotel_id IN (SELECT hotel_id FROM hotellist) GROUP BY hotel_id) a;";
            PreparedStatement pstate13 = con.prepareStatement(sql13);
            ResultSet resultSet13 = pstate13.executeQuery();
            while (resultSet13.next()){
                break_num.add(resultSet13.getInt("under_100"));
                break_num.add(resultSet13.getInt("up_100"));
                cancle_policy_num.add(resultSet13.getInt("free_cancel"));
                cancle_policy_num.add(resultSet13.getInt("no_require"));
                s.setBreak_num(break_num);
                s.setCancle_policy_num(cancle_policy_num);
            }
            s.setHotels(Hotellist);
            s.setHotelFacList(HotelFaclist);
            s.setRoomFacList(RoomFaclist);

            String sql14="drop view hotellist;";
            PreparedStatement pstate14 = con.prepareStatement(sql14);
            pstate14.executeUpdate();
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
