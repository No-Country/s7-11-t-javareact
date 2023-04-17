package com.c711tjavareact.Server.model.dto.request;

import com.c711tjavareact.Server.model.entity.Product;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RequirementRequestDto {
  @Id
  private Long id;

  @NotBlank(message = "name is empty")
  private String name;

  private LocalDateTime updateDate;

  private List<Product> productList;
}
