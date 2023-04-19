package com.c711tjavareact.Server.model.dto.request;

import com.c711tjavareact.Server.model.entity.Product;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * A DTO for the {@link com.c711tjavareact.Server.model.entity.Category} entity
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRequestDto implements Serializable {
    @NotBlank(message = "name is Empty")
    private String name;
    private List<Product> products = new ArrayList<>();
}