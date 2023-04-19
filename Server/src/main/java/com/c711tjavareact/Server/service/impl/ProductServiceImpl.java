package com.c711tjavareact.Server.service.impl;

import com.c711tjavareact.Server.exceptions.GeneralException;
import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.dto.response.ProductResponseDto;
import com.c711tjavareact.Server.model.entity.Category;
import com.c711tjavareact.Server.model.entity.Product;
import com.c711tjavareact.Server.model.mapper.ProductMapper;
import com.c711tjavareact.Server.repository.CategoryRepository;
import com.c711tjavareact.Server.repository.ProductRepository;
import com.c711tjavareact.Server.security.util.Mensaje;
import com.c711tjavareact.Server.service.IProductService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    ProductMapper productMapper;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CategoryRepository categoryRepository;

    @Override
    @Transactional /*Permite que no se escriba de manera explicita que queremos guardar las modificaciones del objeto*/
    public ResponseEntity<Mensaje> createProduct(ProductRequestDto productRequestDto, Long idCategory) {

        Category category = categoryRepository.findById(idCategory).orElse(null);

        if (category != null) {
            Product product1 = productMapper.dtoToEntity(productRequestDto, category);
            product1 = productRepository.save(product1);
            category.getProducts().add(product1);
            return new ResponseEntity<>(new Mensaje("create Product"), HttpStatus.CREATED);
        } else {
            throw new GeneralException("No se encontro el producto", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public void deleteProduct(Long id) {
        Optional<Product> product = productRepository.findById(id);
        Product product1;
        if (product.get().isStatus()) {
            product1 = productMapper.updateSoftDelete(product.get(), false);
        } else {
            product1 = productMapper.updateSoftDelete(product.get(), true);
        }
        productRepository.save(product1);
    }

    @Override
    public ResponseEntity<ProductResponseDto> updateProduct(Long id, ProductRequestDto productRequestDto) {
        Optional<Product> product = productRepository.findById(id);
        Product product1;
        ProductResponseDto productResponseDto;
        if (product.isPresent()) {
            product1 = productMapper.updateProduct(product.get(), productRequestDto);
            productRepository.save(product1);
            productResponseDto = productMapper.entityToDto(product1);
            return new ResponseEntity<>(productResponseDto, HttpStatus.OK);
        } else {
            throw new GeneralException("No se encontro el producto", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<List<ProductResponseDto>> findProducts() {
        List<Product> productsList = productRepository.findAll();
        List<ProductResponseDto> responseProductsList = new ArrayList<>();

        productsList.forEach(product -> {
            if (product.isStatus()) {
                ProductResponseDto productResponseDto = productMapper.entityToDto(product);
                responseProductsList.add(productResponseDto);
            }
        });
        return new ResponseEntity<>(responseProductsList, HttpStatus.OK);
    }
}
