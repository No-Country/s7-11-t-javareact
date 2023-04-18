package com.c711tjavareact.Server.repository;

import com.c711tjavareact.Server.model.entity.Product;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByName(String name);
}