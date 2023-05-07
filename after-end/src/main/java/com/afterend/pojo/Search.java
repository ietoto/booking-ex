package com.afterend.pojo;

public class Search {
    int id;

    String location;
    String hotel;
    String startdate;
    String enddate;
    int adult;
    int child;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setHotel(String hotel) {
        this.hotel = hotel;
    }

    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }

    public void setEnddate(String enddate) {
        this.enddate = enddate;
    }

    public void setAdult(int adult) {
        this.adult = adult;
    }

    public void setChild(int child) {
        this.child = child;
    }

    public String getLocation() {
        return location;
    }

    public String getHotel() {
        return hotel;
    }

    public String getStartdate() {
        return startdate;
    }

    public String getEnddate() {
        return enddate;
    }

    public int getAdult() {
        return adult;
    }

    public int getChild() {
        return child;
    }



}