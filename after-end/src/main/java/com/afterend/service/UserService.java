package com.afterend.service;

import com.afterend.dao.UserDAO;
import com.afterend.pojo.Order;
import com.afterend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<User> showall(){
        return userDAO.showall();
    }
    //删除用户 根据id来删除
    public User delete(User user){
        return userDAO.delete(user);
    }

    public List<User> showbyusername(User user){
        return userDAO.showbyusername(user);
    }
    public List<User> showbyname(User user){
        return userDAO.showbyname(user);
    }
}

