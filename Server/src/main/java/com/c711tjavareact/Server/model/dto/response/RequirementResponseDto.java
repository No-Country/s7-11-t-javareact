package com.c711tjavareact.Server.model.dto.response;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequirementResponseDto implements Serializable {
    private Long id;
    @NotBlank(message = "Name is Empty")
    private String name;
    private LocalDateTime updateDate;
    private List<CategoryResponseDto> categoryList = new ArrayList<>();
}