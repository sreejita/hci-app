package edu.wisc.entity.normalizer.controller;

import com.google.gson.Gson;
import edu.wisc.entity.normalizer.models.FileRead;
import edu.wisc.entity.normalizer.models.User;
import edu.wisc.entity.normalizer.services.CsvReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Calendar;

@RestController
@RequestMapping("/api")
public class FileViewController {

    @Autowired
    CsvReader csvReaderService;
    @PostMapping(value="write/{email}", produces = "application/json")
    @ResponseBody
    public String writeLogs(@PathVariable("email") String email, @RequestParam("content") String content) throws IOException{
        try {
            String timeStamp = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(Calendar.getInstance().getTime());
            System.out.println(email);
            System.out.println(content);
            File logFile = new File("src/main/resources/logs/" + email + ".txt");
            FileWriter fw = new FileWriter(logFile, true); //the true will append the new data
            fw.write(timeStamp + " - ");
            fw.append(content);//appends the string to the file
            fw.append('\n');
            fw.close();
            String message = "Logs written successfully";
            return message;
        } catch (IOException e) {
            String message = "Error could not write logs \n " + e.toString();
            return message;
        }
    }

    @RequestMapping(value = "/file/{exp}",  method = RequestMethod.GET, produces = "application/json")
    public String getProducts(@PathVariable("exp") String experimentNumber) throws IOException {
        System.out.println(experimentNumber);
        File csvFile = new File("src/main/resources/csv/"+experimentNumber+".csv");
        return CsvReader.getProductsFromCsv(csvFile);
        //return "test";
    }

}
