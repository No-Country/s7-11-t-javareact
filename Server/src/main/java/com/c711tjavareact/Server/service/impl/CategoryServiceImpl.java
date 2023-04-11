package com.c711tjavareact.Server.service.impl;

import com.c711tjavareact.Server.exceptions.GeneralException;
import com.c711tjavareact.Server.model.dto.request.CategoryRequestDto;
import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.dto.response.CategoryResponseDto;
import com.c711tjavareact.Server.model.dto.response.ProductResponseDto;
import com.c711tjavareact.Server.model.entity.Category;
import com.c711tjavareact.Server.model.entity.Product;
import com.c711tjavareact.Server.model.mapper.CategoryMapper;
import com.c711tjavareact.Server.repository.CategoryRepository;
import com.c711tjavareact.Server.security.util.Mensaje;
import com.c711tjavareact.Server.service.ICategoryService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements ICategoryService {

  @Autowired
  CategoryRepository categoryRepository;

  @Autowired
  CategoryMapper categoryMapper;
  @Override
  public ResponseEntity<Mensaje> createCategory(CategoryRequestDto categoryRequestDto) {
    Category category1 = categoryMapper.entityToDto(categoryRequestDto);
    categoryRepository.save(category1);
    return new ResponseEntity<>(new Mensaje("create Category"), HttpStatus.CREATED);
  }

  @Override
  public void deleteCategory(Long id) {
    Optional<Category> category = categoryRepository.findById(id);
    Category category1;
    if (category.get().isStatus()){
      category1 = categoryMapper.updateSoftDelete(category.get(), false);
    }else {
      category1 = categoryMapper.updateSoftDelete(category.get(), true);
    }
    categoryRepository.save(category1);
  }

  @Override
  public ResponseEntity<CategoryResponseDto> updateCategory(Long id,
                                                            CategoryRequestDto categoryRequestDto) {
    Optional<Category> category = categoryRepository.findById(id);
    Category category1;
    CategoryResponseDto categoryResponseDto;
    if (category.isPresent()) {
      category1 = categoryMapper.updateCategory(category.get(),categoryRequestDto);
      categoryRepository.save(category1);
      categoryResponseDto = categoryMapper.dtoToEntity(category1);
      return new ResponseEntity<>(categoryResponseDto, HttpStatus.OK);
    } else {
      throw new GeneralException("No se encontro el producto", HttpStatus.BAD_REQUEST);
    }
  }

  @Override
  public ResponseEntity<List<CategoryResponseDto>> findCategories() {
    List<Category> categoryList = categoryRepository.findAll();
    List<CategoryResponseDto> responseCategoryList = new ArrayList<>();

    categoryList.forEach(category -> {
      if(category.isStatus()){
        CategoryResponseDto categoryResponseDto = categoryMapper.dtoToEntity(category);
        responseCategoryList.add(categoryResponseDto);
      }
    });
    return new ResponseEntity<>(responseCategoryList, HttpStatus.OK);
  }
}
