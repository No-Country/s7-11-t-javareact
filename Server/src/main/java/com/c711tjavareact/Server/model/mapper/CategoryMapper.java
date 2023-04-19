package com.c711tjavareact.Server.model.mapper;

import com.c711tjavareact.Server.model.dto.request.CategoryRequestDto;
import com.c711tjavareact.Server.model.dto.response.CategoryResponseDto;
import com.c711tjavareact.Server.model.dto.response.ProductResponseDto;
import com.c711tjavareact.Server.model.entity.Category;
import com.c711tjavareact.Server.model.entity.Requirement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {

    @Autowired
    private ProductMapper productMapper;

    public Category dtoToEntity(CategoryRequestDto Request, Requirement requirement) {
        Category category = new Category();

        category.setName(Request.getName());
        category.setProducts(Request.getProducts());
        category.setRequirement(requirement);

        return category;
    }

    public CategoryResponseDto entityToDto(Category entity) {
        CategoryResponseDto categoryResponseDto = new CategoryResponseDto();

        categoryResponseDto.setId(entity.getId());
        categoryResponseDto.setName(entity.getName());

        List<ProductResponseDto> listProductDto = new ArrayList<>();
        entity.getProducts().forEach(product -> {
            ProductResponseDto productResponseDto = productMapper.entityToDto(product);
            listProductDto.add(productResponseDto);
        });

        categoryResponseDto.setProducts(listProductDto);

        return categoryResponseDto;
    }

    public Category updateCategory(Category category, CategoryRequestDto requestDto) {

        category.setName(requestDto.getName());
        category.setProducts(requestDto.getProducts());

        return category;

    }

    public Category updateSoftDelete(Category entity, boolean status) {
        entity.setStatus(status);
        return entity;
    }
}
