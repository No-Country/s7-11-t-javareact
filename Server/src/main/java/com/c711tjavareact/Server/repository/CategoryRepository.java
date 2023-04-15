package com.c711tjavareact.Server.repository;

import com.c711tjavareact.Server.model.entity.Category;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}