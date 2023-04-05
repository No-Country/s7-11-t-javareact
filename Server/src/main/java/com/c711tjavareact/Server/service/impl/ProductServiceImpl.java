package com.c711tjavareact.Server.service.impl;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.mapper.ProductMapper;
import com.c711tjavareact.Server.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class ProductServiceImpl  implements IProductService {

	@Autowired
	ProductMapper productMapper;






	@Override
	@Transactional
	public ResponseEntity<ProductRequestDto> createProduct(ProductRequestDto productRequestDto) {
		return null;
	}
}
