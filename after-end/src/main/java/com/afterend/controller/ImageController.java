package com.afterend.controller;

//import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

@Controller
public class ImageController {
    @GetMapping("/image/{id}/{filename}")
    public ResponseEntity<byte[]> getImage(HttpServletRequest request, @PathVariable Long id,@PathVariable String filename) {
        try {
            // 读取图片文件
            System.out.println(id);
            System.out.println(filename);
            String path="";
            if(id!=0)
            {
                path="D:\\Study\\课程资料\\大三下\\软件工程\\实验\\image\\"+ filename;
            }else
            {
                path="D:\\Study\\课程资料\\大三下\\软件工程\\实验\\images\\"+ filename;
            }
            File file = new File(path);
            InputStream in = new FileInputStream(file);
            byte[] bytes = IOUtils.toByteArray(in);
            in.close();
            // 构造ResponseEntity对象
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            headers.setContentLength(bytes.length);
            return new ResponseEntity<byte[]>(bytes, headers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<byte[]>(HttpStatus.NOT_FOUND);
        }
    }
}
