package com.afterend.service;

import com.afterend.dao.TestDAO;
import com.afterend.dao.UserDAO;
import com.afterend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService  {
    @Autowired
    TestDAO testDAO;
    public void add(){
        testDAO.add();
    }
    public void insert_fac_room(){
        testDAO.insert_fac_room();
    }
    public void insert_fac_hotel(){
        testDAO.insert_fac_hotel();
    }
    public void insert_hr(){
        testDAO.insert_hr();
    }
}
