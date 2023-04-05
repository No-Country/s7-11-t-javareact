package com.c711tjavareact.Server.service.impl;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.entity.Product;
import com.c711tjavareact.Server.model.mapper.ProductMapper;
import com.c711tjavareact.Server.repository.ProductRepository;
import com.c711tjavareact.Server.security.util.Mensaje;
import com.c711tjavareact.Server.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class ProductServiceImpl  implements IProductService {

	@Autowired
	ProductMapper productMapper;
	@Autowired
	ProductRepository productRepository;


	@Override
	@Transactional
	public ResponseEntity<ProductRequestDto> createProduct(ProductRequestDto productRequestDto) {


try{

	Product product1 = productMapper.entityToDto(productRequestDto);
	productRepository.save(product1);
    System.out.println(product1.toString());
	return  new ResponseEntity( new Mensaje("create Product"),HttpStatus.CREATED) ;

}
catch (Exception e )
{
	return new ResponseEntity(e,HttpStatus.BAD_REQUEST) ;
}


	}
}
