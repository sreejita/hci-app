package edu.wisc.entity.normalizer.controller;

import com.google.gson.Gson;
import edu.wisc.entity.normalizer.models.FileRead;
import edu.wisc.entity.normalizer.models.User;
import org.springframework.web.bind.annotation.*;

import java.io.*;

@RestController
@RequestMapping("/api")
public class FileViewController {

    @RequestMapping(value="/name", method=RequestMethod.GET, produces = "application/json")
    public String index() {
        return "{\"name\": \"Welcome to HCI - APP!\"}";
    }

    @PostMapping("/file")
    public void file(@RequestParam("filetext") String filetext) {
        System.out.println(filetext);
        Gson json = new Gson();
        FileRead fileData = json.fromJson(filetext, FileRead.class);
        System.out.println(fileData.getFileText());
        File file = new File("append.txt");
        FileWriter fw = null;
        BufferedWriter br = null;
        try {
            fw = new FileWriter(file, true);
            br = new BufferedWriter(fw);
            br.write(fileData.getFileText());
            br.close();
            fw.close();
        } catch(Exception e) {
            e.printStackTrace();
        }
        System.out.println(file.getAbsolutePath());

    }

    @RequestMapping(value="/file", method=RequestMethod.GET, produces = "application/json")
    public String fileRead() {
        File file = new File("append.txt");
        FileReader fr = null;
        BufferedReader br = null;
        StringBuffer buf = new StringBuffer();
        try {
            fr = new FileReader(file);
            br = new BufferedReader(fr);
            String str = "";
            while((str = br.readLine()) != null) {
                buf.append(str);
            }

            br.close();
            fr.close();
        } catch(Exception e) {
            e.printStackTrace();
        }
        return "{\"filecontents\":\"" + buf.toString() + "\"}";
    }

    @PostMapping("/profile")
    public void postProfile(@RequestParam("userprofile") String postdata) {
        System.out.println(postdata);
        Gson json = new Gson();
        User fileData = json.fromJson(postdata, User.class);
        System.out.println(fileData.getName());
        System.out.println(fileData.getEmail());
        System.out.println(fileData.getGender());
//        File file = new File("append.txt");
//        FileWriter fw = null;
//        BufferedWriter br = null;
//        try {
//            fw = new FileWriter(file, true);
//            br = new BufferedWriter(fw);
//            br.write(fileData.getFileText());
//            br.close();
//            fw.close();
//        } catch(Exception e) {
//            e.printStackTrace();
//        }
//        System.out.println(file.getAbsolutePath());
//
    }

}
