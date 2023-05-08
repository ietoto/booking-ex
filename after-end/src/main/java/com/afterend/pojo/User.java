package com.afterend.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "user")
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    String username;
    String password;
    String name;//人名
    String postbox;//邮箱
    String phone;//电话
    int state;//类型（0-为系统管理员admin 1-为酒店管理员mgr 2-为用户user）
    int hotel_id;//负责的酒店 id，若不是酒店管理员则为 0
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName(){return name;}
    public void setName(String name) {
        this.name = name;
    }
    public String getPostbox(){return postbox;}
    public void setPostbox(String postbox) {
        this.postbox = postbox;
    }
    public String getPhone(){return phone;}
    public void setPhone(String postbox) {
        this.phone = phone;
    }
    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
    public int getHotel_id() {
        return hotel_id;
    }

    public void setHotel_id(int hotel_id) {
        this.hotel_id = hotel_id;
    }
}

