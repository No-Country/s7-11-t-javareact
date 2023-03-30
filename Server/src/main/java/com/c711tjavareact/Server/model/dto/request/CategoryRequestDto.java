package com.c711tjavareact.Server.model.dto.request;

import com.c711tjavareact.Server.model.entity.Product;
import java.io.Serializable;
import java.util.List;
import javax.validation.constraints.NotBlank;
import lombok.Data;

/**
 * A DTO for the {@link com.c711tjavareact.Server.model.entity.Category} entity
 */
@Data
public class CategoryRequestDto implements Serializable {
  @NotBlank(message = "Not Empty")
  private final String name;
  private final List<Product> products;
}