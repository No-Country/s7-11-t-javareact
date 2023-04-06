package com.c711tjavareact.Server.service;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.entity.Product;
import org.springframework.http.ResponseEntity;

public interface IProductService {
	ResponseEntity<ProductRequestDto>createProduct(ProductRequestDto productRequestDto);
	void deleteProduct(Long id);
}
