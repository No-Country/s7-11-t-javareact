package com.c711tjavareact.Server.model.dto.request;

import java.io.Serializable;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequestDto implements Serializable {
    @NotBlank(message = "name is empty")
    private String name;
    private float price;
    private int quantity;
    private int discount;
}