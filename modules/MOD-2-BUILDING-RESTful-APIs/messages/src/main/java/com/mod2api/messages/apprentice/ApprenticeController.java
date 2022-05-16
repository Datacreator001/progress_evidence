package com.mod2api.messages.apprentice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping
public class ApprenticeController {

    @Autowired
    public ApprenticeController(ApprenticeService apprenticeService) {
        this.apprenticeService = apprenticeService;
    }

    @GetMapping(value ="/Instructions")
    private  String getInstructions(){
        String uri = "https://http-challenge.multiverse-coaches.io";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }
    private final ApprenticeService apprenticeService;
    @GetMapping(value = "/Apprentice")
    public List<Apprentice> getApprentice(){
        return apprenticeService.getApprentice();
    }
}
