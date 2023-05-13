package com.afterend.controller;

import com.afterend.pojo.User;
import com.afterend.result.Result;
import com.afterend.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping(value = "/api/user/login")
    @ResponseBody
    public User login(@RequestBody User requestUser, HttpSession session) {
        String Username = requestUser.getUsername();
        Username = HtmlUtils.htmlEscape(Username);

        User user = userService.get(Username, requestUser.getPassword());
        if (null == user) {
            System.out.println("User name/password error! The username is:"+Username+" Password is:"+requestUser.getPassword());
            return user;
        } else {
            System.out.println("The username/password is correct! The username is:"+Username+" Password is:"+requestUser.getPassword());
//            session.setAttribute("user", user);
            return user;
        }
    }
    @CrossOrigin
    @PostMapping(value = "/api/user/register")
    @ResponseBody
    public User register(@RequestBody User requestUser, HttpSession session) {
        String Username = requestUser.getUsername();
        Username = HtmlUtils.htmlEscape(Username);
        System.out.println(requestUser.getPhone());
        User user = userService.register(requestUser);
        if (null == user) {
            System.out.println("Registration failed! The username is:"+Username+" Password is:"+requestUser.getPassword());
            return user;
        } else {
            System.out.println("Registration successful! The username is:"+Username+" Password is:"+requestUser.getPassword());
            return user;
        }
    }
//    更新用户信息，默认存在该用户,以id为主，如果更新后的用户名密码和别人冲突，则更新失败
    @CrossOrigin
    @PostMapping(value = "/api/user/update")
    @ResponseBody
    public User update(@RequestBody User requestUser, HttpSession session) {
        String Username = requestUser.getUsername();
        Username = HtmlUtils.htmlEscape(Username);

        User user = userService.update(requestUser);
        if (null == user) {
            System.out.println("update failed! The username is:"+Username+" Password is:"+requestUser.getPassword());
            return user;
        } else {
            System.out.println("update successful! The username is:"+Username+" Password is:"+requestUser.getPassword());
            return user;
        }
    }
//    显示所有用户信息
    @CrossOrigin
    @PostMapping(value = "/api/user/showall")
    @ResponseBody
    public List<User> showall(HttpSession session) {
        return userService.showall();
    }
    //    显示用户信息根据用户名
    @CrossOrigin
    @PostMapping(value = "/api/user/showbyusername")
    @ResponseBody
    public List<User> showbyusername(@RequestBody User requestUser,HttpSession session) {
        return userService.showbyusername(requestUser);
    }
    //    删除用户信息
    @CrossOrigin
    @PostMapping(value = "/api/user/delete")
    @ResponseBody
    public User delete(@RequestBody User requestUser, HttpSession session) {
        User user = userService.delete(requestUser);
        if (null == user) {
            System.out.println("delete failed! ");
            return user;
        } else {
            System.out.println("delete successful!");
            return user;
        }
    }
}
