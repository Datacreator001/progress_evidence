package com.mod2api.messages.apprentice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ApprenticeService {
    private final ApprenticeRepo apprenticeRepo;
    @Autowired
    public ApprenticeService(ApprenticeRepo apprenticeRepo) {
        this.apprenticeRepo = apprenticeRepo;
    }


    public List<Apprentice> getApprentice(){
       return apprenticeRepo.findAll();
    }
}
