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
    int num_rec;
    int num_ava;
    int size;
    int price_r;
    int price_b;
    @Transient
    List<String> facilities;

    int state;

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

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}