package isi.diti.class_service.controller;

import isi.diti.class_service.entity.Classe;
import isi.diti.class_service.repository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/classes")
public class ClassController {
    @Autowired
    private ClassRepository classRepository;

   @GetMapping
   public List<Classe> getAllClasses() {
       return classRepository.findAll();
    }

    @PostMapping
  public Classe createClass(@RequestBody Classe newclass) {
       return classRepository.save(newclass);
    }
}
