package com.c711tjavareact.Server.model.dto.response;

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
public class ProductResponseDto implements Serializable {
  private final Long id;
  @NotBlank(message = "Not Empty")
  private final String name;
  private final float price;
  private final int quantity;
  private final int discount;
  private final boolean status;
  private final Category category;
  private final List<Requirement> requirementList;
}