package com.c711tjavareact.Server.controller;

import com.c711tjavareact.Server.model.dto.request.ProductRequestDto;
import com.c711tjavareact.Server.model.dto.response.ProductResponseDto;
import com.c711tjavareact.Server.service.impl.ProductServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/api/v1/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    ProductServiceImpl productService;

    @GetMapping("/hello/{name}")
    public String sayHello(@PathVariable String name) {
        return "Hello World! " + name;
    }


    @PostMapping("/create-product/{idCategory}")
    public ResponseEntity<ProductRequestDto> createProduct(@RequestBody ProductRequestDto productRequestDto,
                                                           @PathVariable Long idCategory) {

        ResponseEntity<?> create = productService.createProduct(productRequestDto, idCategory);

        return new ResponseEntity(create.getBody(), create.getStatusCode());

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
        return ResponseEntity.status(NO_CONTENT).build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ProductResponseDto> updateProduct(@PathVariable Long id,
                                                            @RequestBody ProductRequestDto productRequestDto) {
        ResponseEntity<ProductResponseDto> update = productService.updateProduct(id, productRequestDto);

        return new ResponseEntity<ProductResponseDto>(update.getBody(), update.getStatusCode());
    }

    @GetMapping("/findProducts")
    public ResponseEntity<List<ProductResponseDto>> findProducts(){
        ResponseEntity<List<ProductResponseDto>> findProducts = productService.findProducts();

        return new ResponseEntity<List<ProductResponseDto>>(findProducts.getBody(), findProducts.getStatusCode());
    }
}