package com.afterend.dao.utils;

import java.sql.Connection;

public class Dateutils {
    public static int DatetoInt(String date){
        String[] s = date.split("-");
        return Integer.parseInt(s[0])*365
                +Integer.parseInt(s[1])*30
                +Integer.parseInt(s[2]);
    }
}
