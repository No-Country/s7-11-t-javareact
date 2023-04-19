package com.c711tjavareact.Server.controller;

import static org.springframework.http.HttpStatus.NO_CONTENT;

import com.c711tjavareact.Server.model.dto.request.CategoryRequestDto;
import com.c711tjavareact.Server.model.dto.response.CategoryResponseDto;
import com.c711tjavareact.Server.security.util.Mensaje;
import com.c711tjavareact.Server.service.impl.CategoryServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/category")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    CategoryServiceImpl categoryService;

    @PostMapping("/create-category/{idRequirement}")
    public ResponseEntity<Mensaje> createCategory(@RequestBody CategoryRequestDto categoryRequestDto,
                                                  @PathVariable Long idRequirement) {

        ResponseEntity<Mensaje> create = categoryService.createCategory(categoryRequestDto, idRequirement);

        return new ResponseEntity<Mensaje>(create.getBody(), create.getStatusCode());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.status(NO_CONTENT).build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CategoryResponseDto> updateCategory(@PathVariable Long id,
                                                              @RequestBody CategoryRequestDto categoryRequestDto) {
        ResponseEntity<CategoryResponseDto> update = categoryService.updateCategory(id, categoryRequestDto);

        return new ResponseEntity<CategoryResponseDto>(update.getBody(), update.getStatusCode());
    }

    @GetMapping("/findCategories")
    public ResponseEntity<List<CategoryResponseDto>> findCategories() {
        ResponseEntity<List<CategoryResponseDto>> findCategories = categoryService.findCategories();

        return new ResponseEntity<List<CategoryResponseDto>>(findCategories.getBody(), findCategories.getStatusCode());
    }
}
