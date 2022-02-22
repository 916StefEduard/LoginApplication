package com.arjuncodes.studentsystem.Service;

import com.arjuncodes.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
