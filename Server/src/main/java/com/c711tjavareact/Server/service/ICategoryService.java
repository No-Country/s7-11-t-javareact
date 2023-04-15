package com.c711tjavareact.Server.service;

import com.c711tjavareact.Server.model.dto.request.CategoryRequestDto;
import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.dto.response.CategoryResponseDto;
import com.c711tjavareact.Server.security.util.Mensaje;
import java.util.List;
import org.springframework.http.ResponseEntity;

public interface ICategoryService {

  ResponseEntity<Mensaje> createCategory(CategoryRequestDto categoryRequestDto);

  void deleteCategory (Long id);

  ResponseEntity<CategoryResponseDto> updateCategory(Long id, CategoryRequestDto categoryRequestDto);

  ResponseEntity<List<CategoryResponseDto>> findCategories();

}
