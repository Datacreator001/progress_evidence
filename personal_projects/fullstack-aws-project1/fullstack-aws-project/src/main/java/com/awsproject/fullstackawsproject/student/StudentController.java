package com.awsproject.fullstackawsproject.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController //exposes endpoints that the client can consume
@RequestMapping(path= "api/v1/students") // Change in URL
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents(){
        List<Student> students = Arrays.asList(
                new Student(1L,
                        "Jamila",
                        "Jamila@amigoscode",
                        Gender.FEMALE),
                new Student(2L,
                        "Alex",
                        "Alex@amigoscode",
                        Gender.MALE)
        );
        return students;
    }
}
