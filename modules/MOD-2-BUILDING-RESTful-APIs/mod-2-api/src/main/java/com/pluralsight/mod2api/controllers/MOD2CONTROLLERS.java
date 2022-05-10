package com.pluralsight.mod2api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;

@RestController
public class MOD2CONTROLLERS {
    @RequestMapping("/hello")
    public String hello(){
        return "https://http-challenge.multiverse-coaches.io.";
    }

    @GetMapping(value = "/MV", produces = "application/json") public String getURLValue(HttpServletRequest request){
        String url = "https://http-challenge.multiverse-coaches.io";
        RestTemplate restTemplate =new RestTemplate();
        String result =restTemplate.getForObject(url, String.class);
        return result;

    }
}
