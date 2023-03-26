package com.afterend.controller;

import com.afterend.pojo.User;
import com.afterend.result.Result;
import com.afterend.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;
import jakarta.servlet.http.HttpSession;

@Controller
public class LoginController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping(value = "/api/login")
    @ResponseBody
    public Result login(@RequestBody User requestUser, HttpSession session) {
        String Username = requestUser.getUsername();
            System.out.println(Username);
            System.out.println(requestUser.getPassword());
        Username = HtmlUtils.htmlEscape(Username);

        User user = userService.get(Username, requestUser.getPassword());
        System.out.println(user.getId());
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        if (null == user) {
            System.out.println("用户名/密码错误！用户名为:"+Username+" 密码为:"+requestUser.getPassword());
            return new Result(400);
        } else {
            System.out.println("用户名/密码正确！用户名为:"+Username+" 密码为:"+requestUser.getPassword());
//            session.setAttribute("user", user);
            return new Result(200);
        }
    }
}
