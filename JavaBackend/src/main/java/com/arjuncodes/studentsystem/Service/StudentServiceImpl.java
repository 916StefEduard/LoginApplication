package com.arjuncodes.studentsystem.Service;

import com.arjuncodes.studentsystem.Repository.StudentRepository;
import com.arjuncodes.studentsystem.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired // inject the current repository into our class
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }


}
