package com.afterend.dao.utils;

import java.sql.Connection;
import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;
public class JDBCUtils {
    //    1、构造方法私有
    private JDBCUtils(){}
    //    2、声明所需要的配置变量
    private static String driverClass;
    private static String url;
    private static String username;
    private static String password;
    private static Connection con;

    //    3、提供静态代码块，读取配置文件信息为变量赋值，注册驱动
    static {
        try {
//            赋值
            InputStream is = JDBCUtils.class.getClassLoader().getResourceAsStream("application.properties");
            Properties pro=new Properties();
            pro.load(is);
            driverClass=pro.getProperty("spring.datasource.driver-class-name");
            url=pro.getProperty("spring.datasource.url");
            username=pro.getProperty("spring.datasource.username");
            password=pro.getProperty("spring.datasource.password");
//            System.out.println("test "+password+" 尾");
//            注册驱动
            Class.forName(driverClass);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    //        获取数据库连接
    public static Connection getConnect(){
        try {
            con= DriverManager.getConnection(url,username,password);
//            if(con==null){
//                System.out.println("test "+password+" 头");
//            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return con;
    }
    //    关闭连接
    public static void close(Connection con, Statement state, ResultSet rs){
        if (con!=null){
            try {
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (state!=null){
            try {
                state.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (rs!=null){
            try {
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    public static void close(Connection con, Statement state){
        if (con!=null){
            try {
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (state!=null){
            try {
                state.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
