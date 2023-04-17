package com.c711tjavareact.Server.model.dto.request;

import com.c711tjavareact.Server.model.entity.Requirement;
import java.io.Serializable;
import java.util.List;
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
  @NotBlank(message = "name is empty")
  private String name;
  private float price;
  private int quantity;
  private int discount;
  private List<Requirement> requirementList;
}