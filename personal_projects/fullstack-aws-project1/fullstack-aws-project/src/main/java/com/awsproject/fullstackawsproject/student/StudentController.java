package com.awsproject.fullstackawsproject.student;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController //exposes endpoints that the client can consume
@RequestMapping(path= "api/v1/students") // Change in URL
@AllArgsConstructor

public class StudentController {

    private final StudentService studentService;
    @GetMapping
    public List<Student> getAllStudents(){

        return studentService.getAllStudents();
    }
}
