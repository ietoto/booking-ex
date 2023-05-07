package com.afterend.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "hotel")
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})

public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotel_id")
    int id;

    String name;
    String desciption;
    String location;
    double score;
    String img;

    public int getId(){return id;}

    public void setId(int id){this.id=id;}

    public String getName(){return name;}

    public void setName(String name){this.name=name;}

    public String getDesciption(){return desciption;}

    public void setDesciption(String desciption){this.desciption=desciption;}

    public String getLocation(){return location;}

    public void setLocation(String location){this.location=location;}

    public double getScore(){return score;}

    public void setScore(){this.score=score;}

    public String getImg(){return img;}

    public void setImg(String img){this.img=img;}


}