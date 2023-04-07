package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.*;
import java.util.Random;

@Service
public class TestDAO {
    public static void add() {
        Connection con=null;
        try {
//            for(int i=1;i<=425;i++){
            for(int i=151;i<=425;i++){
                System.out.println(i);
                String filename = "D:/Study/课程资料/大三下/软件工程/实验/数据/"+i+".txt";

                try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
                    String line;
                    line = br.readLine();
                    String[] parts = line.split(":");
                    int id = Integer.parseInt(parts[1].substring(1));
                    System.out.println(id);
                    line = br.readLine();
                    parts = line.split(":");
                    String img = parts[1]+parts[2];
                    img=img.substring(1);
                    line = br.readLine();
                    line = br.readLine();
                    parts = line.split(":");
                    String location = parts[1];
                    location=location.substring(1);
                    int locationid = 0;
                    con= JDBCUtils.getConnect();
                    String sql="select * from location where name=?";
                    PreparedStatement pstate = con.prepareStatement(sql);
                    pstate.setString(1,location);
                    ResultSet resultSet = pstate.executeQuery();
                    while (resultSet.next()){
                        locationid=resultSet.getInt("id");
                    }
                    line = br.readLine();
                    parts = line.split(":");
                    String name=parts[1];
                    name=name.substring(1);
                    double score;
                    line = br.readLine();
                    parts = line.split(":");
                    if(parts[1]!=" No score"){
//                        System.out.println(parts[1]);
                        String[] temp = parts[1].split("分");
                        score= Double.parseDouble(temp[1]);
                    }
                    else{
                        score=0;
                    }
                    line = br.readLine();
                    parts = line.split(":");
                    String description=parts[1];
                    description=description.substring(1);
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
//                    sql="insert into hotel (`name`, `description`, `locationid`, `score`, `img`) values("+name+","+description+","+locationid+","+score+","+img+")";
                    String sql1="insert into hotel (`id`,`name`, `description`, `locationid`, `score`, `img`) values(?,?,?,?,?,?)";
                    PreparedStatement p=con.prepareStatement(sql1);
                    p.setInt(1,id);
                    p.setString(2,name);
                    p.setString(3,description);
                    p.setInt(4,locationid);
                    p.setDouble(5,score);
                    p.setString(6,img);
                    p.executeUpdate();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
//            try {
//                con.close();
//            } catch (SQLException e) {
//                e.printStackTrace();
//            }
        }
    }
    public static void insert_fac_room() {
        Connection con=null;
        try {
            for(int i=1;i<=15;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"卫生间");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"淋浴");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"沙发");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"拖鞋");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"书桌");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"衣架");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"卫生纸");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"用餐区");
                p.executeUpdate();
            }
            for(int i=1;i<=8;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"免费洗浴用品");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"电话");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"冰箱");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"电烧水壶");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"电视");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"插座");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"沏茶/咖啡设备");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"吹风机");
                p.executeUpdate();
            }
            for(int i=11;i<=15;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"免费洗浴用品");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"电话");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"冰箱");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"电烧水壶");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"电视");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"插座");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"沏茶/咖啡设备");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"吹风机");
                p.executeUpdate();
            }
            for(int i=3;i<=8;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"唤醒服务");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"电梯直达");
                p.executeUpdate();
            }
            for(int i=11;i<=15;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"唤醒服务");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"电梯直达");
                p.executeUpdate();
            }
            for(int i=5;i<=8;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"空调");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"地暖");
                p.executeUpdate();
            }
            for(int i=11;i<=15;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"空调");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"地暖");
                p.executeUpdate();
            }
            for(int i=5;i<=6;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"木质地板");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"奢华家居");
                p.executeUpdate();
            }
            for(int i=13;i<=15;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"人造山水");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"音乐服务");
                p.executeUpdate();
            }
            for(int i=14;i<=14;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"仆人服务");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"风格定制");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"私人影院");
                p.executeUpdate();
            }
            for(int i=15;i<=15;i++){
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"异世风光");
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`fac_room`(`roomid`, `facname`) VALUES (?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setString(2,"室内观景");
                p.executeUpdate();
            }
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public static void insert_fac_hotel() {
        Connection con=null;
        try {
            Random random = new Random();
            for(int i=1;i<=425;i++){
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"健身中心");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"免费停车");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"悦咖啡厅");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"暖气");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"行李寄存");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"电梯");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"卫生条件良好");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"风景优美");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"刷卡进门");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"游泳池");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"保险箱");
                    p.executeUpdate();
                }
                if(random.nextInt(10)<2){
                    con= JDBCUtils.getConnect();
                    Statement statement = con.createStatement();
                    String sql="INSERT INTO `HotelSystem`.`fac_hotel`(`hotelid`, `facname`) VALUES (?, ?)";
                    PreparedStatement p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setString(2,"无障碍设施");
                    p.executeUpdate();
                }
            }
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public static void insert_hr() {
        Connection con=null;
        try {
            Random random = new Random();
            for(int i=1;i<=425;i++){
                System.out.println(i);
                int num=random.nextInt(5)*2+1;
                con= JDBCUtils.getConnect();
                Statement statement = con.createStatement();
                String sql="INSERT INTO `HotelSystem`.`hr`(`hotelid`, `roomid`, `price`, `breakfast`, `num`) VALUES (?, ?, ?, ?, ?)";
                PreparedStatement p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setInt(2,num);
                p.setInt(3,random.nextInt(8)*100+300+random.nextInt(50)*2);//在300-1000之间
                if(random.nextInt(10)<1)p.setInt(4,-1);
                else p.setInt(4,random.nextInt(6)*50+50+random.nextInt(50));
                p.setInt(5,random.nextInt(16)*10+50);
                p.executeUpdate();
                sql="INSERT INTO `HotelSystem`.`hr`(`hotelid`, `roomid`, `price`, `breakfast`, `num`) VALUES (?, ?, ?, ?, ?)";
                p=con.prepareStatement(sql);
                p.setInt(1,i);
                p.setInt(2,num+1);
                p.setInt(3,random.nextInt(8)*100+300+random.nextInt(50)*2);//在300-1000之间
                if(random.nextInt(10)<1)p.setInt(4,-1);
                else p.setInt(4,random.nextInt(6)*50+50+random.nextInt(50));
                p.setInt(5,random.nextInt(16)*10+50);
                p.executeUpdate();

                if(random.nextInt(100)<3){
                    sql="INSERT INTO `HotelSystem`.`hr`(`hotelid`, `roomid`, `price`, `breakfast`, `num`) VALUES (?, ?, ?, ?, ?)";
                    p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setInt(2,11);
                    p.setInt(3,random.nextInt(8)*100+500+random.nextInt(50)*2);//在300-1000之间
                    if(random.nextInt(10)<1)p.setInt(4,-1);
                    else p.setInt(4,random.nextInt(6)*50+50+random.nextInt(50));
                    p.setInt(5,random.nextInt(16)*10+50);
                    p.executeUpdate();
                }
                if(random.nextInt(100)<3){
                    sql="INSERT INTO `HotelSystem`.`hr`(`hotelid`, `roomid`, `price`, `breakfast`, `num`) VALUES (?, ?, ?, ?, ?)";
                    p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setInt(2,12);
                    p.setInt(3,random.nextInt(8)*100+500+random.nextInt(50)*2);//在300-1000之间
                    if(random.nextInt(10)<1)p.setInt(4,-1);
                    else p.setInt(4,random.nextInt(6)*50+50+random.nextInt(50));
                    p.setInt(5,random.nextInt(16)*10+50);
                    p.executeUpdate();
                }
                if(random.nextInt(100)<3){
                    sql="INSERT INTO `HotelSystem`.`hr`(`hotelid`, `roomid`, `price`, `breakfast`, `num`) VALUES (?, ?, ?, ?, ?)";
                    p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setInt(2,13);
                    p.setInt(3,random.nextInt(8)*100+800+random.nextInt(50)*2);//在300-1000之间
                    if(random.nextInt(10)<1)p.setInt(4,-1);
                    else p.setInt(4,random.nextInt(6)*50+250+random.nextInt(50));
                    p.setInt(5,random.nextInt(16)*10+50);
                    p.executeUpdate();
                }
                if(random.nextInt(100)<3){
                    sql="INSERT INTO `HotelSystem`.`hr`(`hotelid`, `roomid`, `price`, `breakfast`, `num`) VALUES (?, ?, ?, ?, ?)";
                    p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setInt(2,14);
                    p.setInt(3,random.nextInt(8)*100+1000+random.nextInt(50)*2);//在300-1000之间
                    p.setInt(4,random.nextInt(6)*50+500+random.nextInt(50));
                    p.setInt(5,random.nextInt(16)*10+50);
                    p.executeUpdate();
                }
                if(random.nextInt(100)<3){
                    sql="INSERT INTO `HotelSystem`.`hr`(`hotelid`, `roomid`, `price`, `breakfast`, `num`) VALUES (?, ?, ?, ?, ?)";
                    p=con.prepareStatement(sql);
                    p.setInt(1,i);
                    p.setInt(2,15);
                    p.setInt(3,random.nextInt(8)*100+1000+random.nextInt(50)*2);//在300-1000之间
                    p.setInt(4,random.nextInt(6)*50+500+random.nextInt(50));
                    p.setInt(5,random.nextInt(16)*10+50);
                    p.executeUpdate();
                }
            }
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
