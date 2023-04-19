package com.c711tjavareact.Server.model.dto.request;

import com.c711tjavareact.Server.model.entity.Category;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequirementRequestDto implements Serializable {
    @Id
    private Long id;

    @NotBlank(message = "Name is Empty")
    private String name;

    private LocalDateTime updateDate;

    private List<Category> categories = new ArrayList<>();
}
