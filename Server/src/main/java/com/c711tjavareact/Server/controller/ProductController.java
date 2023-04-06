package com.c711tjavareact.Server.controller;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.service.impl.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {
    @Autowired
    ProductServiceImpl productService;

    @GetMapping("/hello/{name}")
    public String sayHello(@PathVariable String name) {
        return "Hello World! " + name;
    }


    @PostMapping("/create-product")
    public ResponseEntity<ProductRequestDto> createProduct(@RequestBody ProductRequestDto productRequestDto) {

        ResponseEntity<?> create = productService.createProduct(productRequestDto);

        return new ResponseEntity(create.getBody(), create.getStatusCode());

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
        return ResponseEntity.status(NO_CONTENT).build();
    }
}