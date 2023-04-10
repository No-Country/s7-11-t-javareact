package com.c711tjavareact.Server.model.dto.response;

import com.c711tjavareact.Server.model.entity.Category;
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
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponseDto implements Serializable {
  private Long id;
  @NotBlank(message = "Not Empty")
  private String name;
  private float price;
  private int quantity;
  private int discount;
  private boolean status;
  private Category category;
  private List<Requirement> requirementList;
}