package com.afterend.controller;


import com.afterend.result.Result;
import com.afterend.service.TestService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {
    @Autowired
    TestService testService;

    @CrossOrigin
    @PostMapping(value = "/api/test/add")
    @ResponseBody
    //向数据库里添加数据
    public Result add(HttpSession session) {
        testService.add();
        return new Result(200);
    }
    @CrossOrigin
    @PostMapping(value = "/api/test/insert_fac_room")
    @ResponseBody
    //向数据库里添加数据
    public Result insert_fac_room(HttpSession session) {
        testService.insert_fac_room();
        return new Result(200);
    }
    @CrossOrigin
    @PostMapping(value = "/api/test/insert_fac_hotel")
    @ResponseBody
    //向数据库里添加数据
    public Result insert_fac_hotel(HttpSession session) {
        testService.insert_fac_hotel();
        return new Result(200);
    }
    @CrossOrigin
    @PostMapping(value = "/api/test/insert_hr")
    @ResponseBody
    //向数据库里添加数据
    public Result insert_hr(HttpSession session) {
        testService.insert_hr();
        return new Result(200);
    }
}
