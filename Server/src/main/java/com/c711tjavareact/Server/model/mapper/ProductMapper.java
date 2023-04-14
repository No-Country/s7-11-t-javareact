package com.c711tjavareact.Server.model.mapper;

import com.c711tjavareact.Server.model.dto.request.CategoryRequestDto;
import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.dto.response.ProductResponseDto;
import com.c711tjavareact.Server.model.entity.Category;
import com.c711tjavareact.Server.model.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public Product entityToDto(ProductRequestDto Request, Category category){

        Product product = new Product();

        product.setName(Request.getName());
        product.setPrice(Request.getPrice());
        product.setQuantity(Request.getQuantity());
        product.setDiscount(Request.getDiscount());
        product.setCategory(category);

        return product;
    }

    public ProductResponseDto dtoToEntity(Product entity) {

        ProductResponseDto responseDto = new ProductResponseDto();

        responseDto.setName(entity.getName());
        responseDto.setPrice(entity.getPrice());
        responseDto.setQuantity(entity.getQuantity());
        responseDto.setDiscount(entity.getDiscount());
        responseDto.setCategory(entity.getCategory());

        return  responseDto;
    }

    public Product updateProduct(Product product, ProductRequestDto requestDto){

        product.setName(requestDto.getName());
        product.setPrice(requestDto.getPrice());
        product.setQuantity(requestDto.getQuantity());
        product.setDiscount(requestDto.getDiscount());
        product.setCategory(requestDto.getCategory());

        return product;

    }

    public Product updateSoftDelete(Product entity, boolean status){
        entity.setStatus(status);
        return entity;
    }

}
