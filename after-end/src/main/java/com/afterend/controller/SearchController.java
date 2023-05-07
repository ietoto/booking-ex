package com.afterend.controller;

import com.afterend.pojo.*;
import com.afterend.result.Result;
import com.afterend.service.SearchService;
import com.afterend.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import java.util.List;

@Controller
public class SearchController {
    @Autowired
    SearchService searchService;

    @CrossOrigin
    @PostMapping(value = "/api/user/searchSimple")
    @ResponseBody
    public List<Hotel> showall(HttpSession session) {
        return searchService.showall();
    }
}
