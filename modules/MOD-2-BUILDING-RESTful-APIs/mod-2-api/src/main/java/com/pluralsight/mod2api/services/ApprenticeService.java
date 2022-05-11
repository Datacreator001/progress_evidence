package com.pluralsight.mod2api.services;

import java.util.List;
import com.pluralsight.mod2api.models.ApprenticeEntity;
import com.pluralsight.mod2api.repos.ApprenticeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApprenticeService {
    @Autowired
    ApprenticeRepo apprenticeRepo;
    public List<ApprenticeEntity> getAllApprentices()
    {
        return apprenticeRepo.findAll();
    }
    public ApprenticeEntity getOneApprentice(long id){return apprenticeRepo.findById(id).get();}
    public String addOneApprentice(ApprenticeEntity apprentice)
    {
        apprenticeRepo.save(apprentice);
        return "Finshed";
    }
    public void updaateOneApprentice(long id, ApprenticeEntity apprentice){apprenticeRepo.save(apprentice);}
    public  void deleteOneAppprentice(long id){apprenticeRepo.deleteById(id);}
}
