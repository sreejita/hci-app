package edu.wisc.entity.normalizer.controller;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class FileViewController {

    @RequestMapping(value="/name", method=RequestMethod.GET, produces = "application/json")
    public String index() {
        return "{\"name\": \"Welcome to HCI - APP!\"}";
    }


}
