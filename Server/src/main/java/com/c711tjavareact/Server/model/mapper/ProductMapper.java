package com.c711tjavareact.Server.model.mapper;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.entity.Product;

public class ProductMapper {

    public Product entityToDto(ProductRequestDto Request){

        Product product = new Product();

        product.setName(Request.getName());
        product.setPrice(Request.getPrice());
        product.setDiscount(Request.getDiscount());

        return product;
    }
}
