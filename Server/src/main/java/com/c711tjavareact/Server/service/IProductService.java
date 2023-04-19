package com.c711tjavareact.Server.service;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.dto.response.ProductResponseDto;

import java.util.List;

import com.c711tjavareact.Server.security.util.Mensaje;
import org.springframework.http.ResponseEntity;

public interface IProductService {
    ResponseEntity<Mensaje> createProduct(ProductRequestDto productRequestDto, Long Id);

    void deleteProduct(Long id);

    ResponseEntity<ProductResponseDto> updateProduct(Long id, ProductRequestDto productRequestDto);

    ResponseEntity<List<ProductResponseDto>> findProducts();
}
