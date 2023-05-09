package com.afterend.pojo;

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
    double score;
    int star;
    List<Hotel> hotels;
    List<HotelFac> hotelFacList;
    List<RoomFac>   roomFacList;

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
}