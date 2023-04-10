package com.c711tjavareact.Server.model.dto.response;

import java.io.Serializable;
import java.util.List;
import javax.validation.constraints.NotBlank;
import lombok.Data;

/**
 * A DTO for the {@link com.c711tjavareact.Server.model.entity.Category} entity
 */
@Data
public class CategoryResponseDto implements Serializable {
  private final Long id;
  @NotBlank(message = "Not Empty")
  private final String name;
  private final List<ProductResponseDto> products;
}