package com.c711tjavareact.Server.service;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.dto.response.ProductResponseDto;
import com.c711tjavareact.Server.model.entity.Product;
import java.util.List;
import org.springframework.http.ResponseEntity;

public interface IProductService {
	ResponseEntity<ProductRequestDto>createProduct(ProductRequestDto productRequestDto);
	void deleteProduct(Long id);

	ResponseEntity<ProductResponseDto> updateProduct(Long id, ProductRequestDto productRequestDto);

	ResponseEntity<List<ProductResponseDto>> findProducts();
}
