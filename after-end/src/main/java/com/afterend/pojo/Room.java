package com.afterend.pojo;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "room")
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})

public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    int id;

    String name;
    int hotelid;
    int num_max;    //客房总数
    int num_rec;    //推荐订房数
    int num_ava;    //剩余空房数
    int size;
    int price_r;
    int price_b;
    int ifFreeCancle;   //免费取消
    int ifNoRequire;    //免费预订
    @Transient
    List<String> facilities;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNum_rec() {
        return num_rec;
    }

    public void setNum_rec(int num_rec) {
        this.num_rec = num_rec;
    }

    public int getNum_ava() {
        return num_ava;
    }

    public void setNum_ava(int num_ava) {
        this.num_ava = num_ava;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getPrice_r() {
        return price_r;
    }

    public void setPrice_r(int price_r) {
        this.price_r = price_r;
    }

    public int getPrice_b() {
        return price_b;
    }

    public void setPrice_b(int price_b) {
        this.price_b = price_b;
    }

    public List<String> getFacilities() {
        return facilities;
    }

    public void setFacilities(List<String> facilities) {
        this.facilities = facilities;
    }

    public int getIfFreeCancle() {
        return ifFreeCancle;
    }

    public void setIfFreeCancle(int ifFreeCancle) {
        this.ifFreeCancle = ifFreeCancle;
    }

    public int getIfNoRequire() {
        return ifNoRequire;
    }

    public void setIfNoRequire(int ifNoRequire) {
        this.ifNoRequire = ifNoRequire;
    }

    public int getHotelid() {
        return hotelid;
    }

    public void setHotelid(int hotelid) {
        this.hotelid = hotelid;
    }

    public int getNum_max() {
        return num_max;
    }

    public void setNum_max(int num_max) {
        this.num_max = num_max;
    }
}
