package com.c711tjavareact.Server.model.dto.response;

import java.io.Serializable;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponseDto implements Serializable {
    private Long id;
    @NotBlank(message = "Name is Empty")
    private String name;
    private float price;
    private int quantity;
    private int discount;
}