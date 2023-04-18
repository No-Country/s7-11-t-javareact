package com.c711tjavareact.Server.model.dto.response;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryResponseDto implements Serializable {
    private Long id;
    @NotBlank(message = "Not Empty")
    private String name;
    private List<ProductResponseDto> products = new ArrayList<>();
}