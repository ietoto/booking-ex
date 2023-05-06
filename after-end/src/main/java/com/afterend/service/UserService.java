package com.afterend.service;

import com.afterend.dao.UserDAO;
import com.afterend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserService {
    @Autowired
    UserDAO userDAO;
    public User get(String username, String password){
        return userDAO.getByUsernameAndPassword(username, password);
    }
    public User register(User user){
        if(userDAO.getByUsernameAndPassword(user.getUsername(), user.getPassword())!=null)return null;
        return userDAO.insert(user);
    }
    public User update(User user){
        User temp=userDAO.getByUsernameAndPassword(user.getUsername(), user.getPassword());
        if(temp!=null)
            if(temp.getId()!=user.getId())return null;
        return userDAO.update(user);
    }
}

