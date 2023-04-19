package com.c711tjavareact.Server.model.mapper;

import com.c711tjavareact.Server.model.dto.request.RequirementRequestDto;
import com.c711tjavareact.Server.model.dto.response.CategoryResponseDto;
import com.c711tjavareact.Server.model.dto.response.RequirementResponseDto;
import com.c711tjavareact.Server.model.entity.Requirement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RequirementMapper {
    @Autowired
    private CategoryMapper categoryMapper;

    public Requirement dtoToEntity(RequirementRequestDto Request) {
        Requirement requirement = new Requirement();

        requirement.setName(Request.getName());
        requirement.setUpdateDate(Request.getUpdateDate());
        requirement.setCategory(Request.getCategories());
        return requirement;
    }

    public RequirementResponseDto entityToDto(Requirement entity) {
        RequirementResponseDto requirementResponseDto = new RequirementResponseDto();

        requirementResponseDto.setId(entity.getId());
        requirementResponseDto.setName(entity.getName());
        requirementResponseDto.setUpdateDate(entity.getUpdateDate());

        List<CategoryResponseDto> listCategoryDto = new ArrayList<>();
        entity.getCategory().forEach(category -> {
            CategoryResponseDto categoryResponseDto = categoryMapper.entityToDto(category);
            listCategoryDto.add(categoryResponseDto);
        });

        requirementResponseDto.setCategoryList(listCategoryDto);

        return requirementResponseDto;
    }

    public Requirement updateRequirement(Requirement requirement, RequirementRequestDto requestDto) {

        requirement.setName(requestDto.getName());
        requirement.setCategory(requestDto.getCategories());

        return requirement;

    }

    public Requirement updateSoftDelete(Requirement requirement, boolean status) {
        requirement.setStatus(status);
        return requirement;
    }
}
