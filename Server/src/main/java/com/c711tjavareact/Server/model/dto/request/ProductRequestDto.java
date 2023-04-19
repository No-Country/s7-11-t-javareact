package com.c711tjavareact.Server.model.dto.request;

import java.io.Serializable;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * A DTO for the {@link com.c711tjavareact.Server.model.entity.Product} entity
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequestDto implements Serializable {
    @NotBlank(message = "Not Empty")
    private String name;
    private float price;
    private int quantity;
    private int discount;
}