package com.c711tjavareact.Server.model.dto.response;

import java.io.Serializable;
import java.util.List;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * A DTO for the {@link com.c711tjavareact.Server.model.entity.Category} entity
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryResponseDto implements Serializable {
  private Long id;
  @NotBlank(message = "Not Empty")
  private String name;
  private List<ProductResponseDto> products;
}