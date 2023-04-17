package com.c711tjavareact.Server.model.dto.response;

import com.c711tjavareact.Server.model.entity.Product;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * A DTO for the {@link com.c711tjavareact.Server.model.entity.Requirement} entity
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequirementResponseDto implements Serializable {
  private Long id;
  @NotBlank(message = "Not Empty")
  private String name;
  private LocalDateTime updateDate;
  private List<CategoryResponseDto> categoryResponseDtoList = new ArrayList<>();
}