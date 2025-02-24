package isi.diti.student_service.controller;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;


@FeignClient(name = "class-service", url = "http://localhost:8081")
public interface ClassClient {
    @GetMapping("/api/classes")
    List<Class> getAllClasses();
}

