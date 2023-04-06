package com.c711tjavareact.Server.model.mapper;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.dto.response.ProductResponseDto;
import com.c711tjavareact.Server.model.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public Product entityToDto(ProductRequestDto Request){

        Product product = new Product();

        product.setName(Request.getName());
        product.setPrice(Request.getPrice());
        product.setDiscount(Request.getDiscount());

        return product;
    }

    public ProductResponseDto dtoToEntity(Product entity) {

        ProductResponseDto responseDto = new ProductResponseDto();

        responseDto.setName(entity.getName());
        responseDto.setPrice(entity.getPrice());
        responseDto.setDiscount(entity.getDiscount());

        return  responseDto;
    }

    public Product updateProduct(Product entity, ProductRequestDto requestDto){

        Product product = new Product();

        product.setName(requestDto.getName());
        product.setPrice(requestDto.getPrice());
        product.setDiscount(requestDto.getDiscount());

        return product;
    }

    public Product updateSoftDelete(Product entity, boolean status){
        entity.setStatus(status);
        return entity;
    }

}
