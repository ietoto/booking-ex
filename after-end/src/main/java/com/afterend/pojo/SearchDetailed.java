package com.afterend.pojo;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public class SearchDetailed {

    int id;

    String location;
    String hotel;
    String startdate;
    String enddate;
    int adult;
    int child;
    double distance;
    List<Integer> distance_num; //0: 1公里内 1: 3公里内 2: 5公里内
    double score;
    List<Integer> score_num;    //0: beyond 9 1:beyond 8 2: beyond 7 3: beyond 6
    int star;
    List<Hotel> hotels;
    List<HotelFac> hotelFacList;
    List<RoomFac>   roomFacList;
    List<Integer> break_num; //0: 早餐100以下   1: 早餐100以上
    List<Integer> cancle_policy_num;    //0: 免费取消 1: 免费预订
    int num;    //总共找到的酒店数

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getHotel() {
        return hotel;
    }

    public void setHotel(String hotel) {
        this.hotel = hotel;
    }

    public String getStartdate() {
        return startdate;
    }

    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }

    public String getEnddate() {
        return enddate;
    }

    public void setEnddate(String enddate) {
        this.enddate = enddate;
    }

    public int getAdult() {
        return adult;
    }

    public void setAdult(int adult) {
        this.adult = adult;
    }

    public int getChild() {
        return child;
    }

    public void setChild(int child) {
        this.child = child;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public int getStar() {
        return star;
    }

    public void setStar(int star) {
        this.star = star;
    }

    public List<HotelFac> getHotelFacList() {
        return hotelFacList;
    }

    public void setHotelFacList(List<HotelFac> hotelFacList) {
        this.hotelFacList = hotelFacList;
    }

    public List<RoomFac> getRoomFacList() {
        return roomFacList;
    }

    public void setRoomFacList(List<RoomFac> roomFacList) {
        this.roomFacList = roomFacList;
    }

    public List<Hotel> getHotels() {
        return hotels;
    }

    public void setHotels(List<Hotel> hotels) {
        this.hotels = hotels;
    }

    public List<Integer> getDistance_num() {
        return distance_num;
    }

    public void setDistance_num(List<Integer> distance_num) {
        this.distance_num = distance_num;
    }

    public List<Integer> getScore_num() {
        return score_num;
    }

    public void setScore_num(List<Integer> score_num) {
        this.score_num = score_num;
    }

    public List<Integer> getBreak_num() {
        return break_num;
    }

    public void setBreak_num(List<Integer> break_num) {
        this.break_num = break_num;
    }

    public List<Integer> getCancle_policy_num() {
        return cancle_policy_num;
    }

    public void setCancle_policy_num(List<Integer> cancle_policy_num) {
        this.cancle_policy_num = cancle_policy_num;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }
}