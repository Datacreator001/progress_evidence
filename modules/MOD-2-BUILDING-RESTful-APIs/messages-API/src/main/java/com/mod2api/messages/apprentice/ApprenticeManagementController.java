package com.mod2api.messages.apprentice;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/management/Apprentices")
public class ApprenticeManagementController {
    private static final List<Apprentice> APPRENTICES= Arrays.asList(
            new Apprentice(1,"Nick"),
            new Apprentice(2,"Ian")
    );
    @GetMapping
    public static List<Apprentice> getAPPRENTICES() {
        return APPRENTICES;
    }
    @PostMapping
    public void registerNewApprentice(@RequestBody Apprentice apprentice){
        System.out.println("registerNewApprentice");
        System.out.println(apprentice);
    }

    @DeleteMapping(path = "{studentId}")
    public void deleteApprentice(@PathVariable("studentId") Integer apprenticeId){
        System.out.println(apprenticeId);
    }
    @PutMapping(path = "{studentId}")
    public void updateApprentice(@PathVariable("studentId") Integer apprenticeId, @RequestBody Apprentice apprentice){
        System.out.println(String.format("%s %s",apprenticeId,apprentice));
    }
}
