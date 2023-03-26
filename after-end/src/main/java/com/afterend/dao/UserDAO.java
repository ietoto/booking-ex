package com.afterend.dao;

import com.afterend.dao.utils.JDBCUtils;
import com.afterend.pojo.User;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
@Service
public class UserDAO {
    public static User getByUsernameAndPassword(String username, String password) {
        Connection con=null;
        User s = null;
        try{
            con= JDBCUtils.getConnect();
            String sql="select * from user where username=? and password=?";
            PreparedStatement pstate = con.prepareStatement(sql);
            pstate.setString(1,username);
            pstate.setString(2,password);
            ResultSet resultSet = pstate.executeQuery();
            while (resultSet.next()){
                s=new User();
                s.setId(resultSet.getInt("id"));
                s.setUsername(resultSet.getString("username"));
                s.setPassword(resultSet.getString("password"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                if(con==null){
                    System.out.println("test ");
                }
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return s;
    }
}
