package com.c711tjavareact.Server.model.dto.request;

import com.c711tjavareact.Server.model.entity.Category;
import com.c711tjavareact.Server.model.entity.Requirement;
import java.io.Serializable;
import java.util.List;
import javax.validation.constraints.NotBlank;
import lombok.Data;

/**
 * A DTO for the {@link com.c711tjavareact.Server.model.entity.Product} entity
 */
@Data
public class ProductRequestDto implements Serializable {
  @NotBlank(message = "Not Empty")
  private final String name;
  private final float price;
  private final int quantity;
  private final int discount;
  private final Category category;
  private final List<Requirement> requirementList;
}