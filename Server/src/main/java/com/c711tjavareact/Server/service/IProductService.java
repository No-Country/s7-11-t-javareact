package com.c711tjavareact.Server.service;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import org.springframework.http.ResponseEntity;

public interface IProductService {
	ResponseEntity<ProductRequestDto>createProduct(ProductRequestDto productRequestDto);
}
