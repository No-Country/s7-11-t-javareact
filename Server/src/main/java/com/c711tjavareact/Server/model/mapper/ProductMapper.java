package com.c711tjavareact.Server.model.mapper;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.dto.response.ProductResponseDto;
import com.c711tjavareact.Server.model.entity.Category;
import com.c711tjavareact.Server.model.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public Product dtoToEntity(ProductRequestDto Request, Category category){

        Product product = new Product();

        product.setName(Request.getName());
        product.setPrice(Request.getPrice());
        product.setQuantity(Request.getQuantity());
        product.setDiscount(Request.getDiscount());
        product.setCategory(category);

        return product;
    }

    public ProductResponseDto entityToDto(Product entity) {

        ProductResponseDto responseDto = new ProductResponseDto();
        responseDto.setId(entity.getId());
        responseDto.setName(entity.getName());
        responseDto.setPrice(entity.getPrice());
        responseDto.setQuantity(entity.getQuantity());
        responseDto.setDiscount(entity.getDiscount());

        return  responseDto;
    }

    public Product updateProduct(Product product, ProductRequestDto requestDto){

        product.setName(requestDto.getName());
        product.setPrice(requestDto.getPrice());
        product.setQuantity(requestDto.getQuantity());
        product.setDiscount(requestDto.getDiscount());

        return product;
    }

    public Product updateSoftDelete(Product entity, boolean status){
        entity.setStatus(status);
        return entity;
    }

}
