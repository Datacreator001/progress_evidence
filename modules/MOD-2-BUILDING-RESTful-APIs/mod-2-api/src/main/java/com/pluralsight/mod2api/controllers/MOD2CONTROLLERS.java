package com.pluralsight.mod2api.controllers;

import com.pluralsight.mod2api.models.ApprenticeEntity;
import com.pluralsight.mod2api.services.ApprenticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class MOD2CONTROLLERS {
    @Autowired
    private ApprenticeService apprenticeService;

    @RequestMapping("/apprentices")
    public List<ApprenticeEntity> getApprentices() {
        return apprenticeService.getAllApprentices();
    }

    @RequestMapping("/apprentices/{id}")
    public ApprenticeEntity getApprentice(@PathVariable long id) {
        return apprenticeService.getOneApprentice(id);
    }

}