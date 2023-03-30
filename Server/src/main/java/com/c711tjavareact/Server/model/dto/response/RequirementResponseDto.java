package com.c711tjavareact.Server.model.dto.response;

import com.c711tjavareact.Server.model.entity.Product;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import javax.validation.constraints.NotBlank;
import lombok.Data;

/**
 * A DTO for the {@link com.c711tjavareact.Server.model.entity.Requirement} entity
 */
@Data
public class RequirementResponseDto implements Serializable {
  private final Long id;
  @NotBlank(message = "Not Empty")
  private final String name;
  private final LocalDateTime updateDate;
  private final List<Product> productList;
}