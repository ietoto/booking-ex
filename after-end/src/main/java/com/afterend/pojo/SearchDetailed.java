package com.afterend.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import com.afterend.pojo.HotelFac;

import  com.afterend.pojo.RoomFac;

@Entity
@Table(name = "searchdetailed")
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})

public class SearchDetailed {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
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
    List<HotelFac> hotelFacList
}