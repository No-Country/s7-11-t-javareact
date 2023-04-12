package com.c711tjavareact.Server.model.mapper;


import com.c711tjavareact.Server.model.dto.request.RequirementRequestDto;
import com.c711tjavareact.Server.model.dto.response.RequirementResponseDto;
import com.c711tjavareact.Server.model.entity.Requirement;
import org.springframework.stereotype.Component;

@Component
public class RequirementMapper {

    public Requirement entityToDto(RequirementRequestDto Request) {
        Requirement requirement = new Requirement();

        requirement.setName(Request.getName());
        requirement.setProductList(Request.getProductList());

        return requirement;
    }

    public RequirementResponseDto dtoToEntity(Requirement entity) {
        RequirementResponseDto requirementResponseDto = new RequirementResponseDto();

        requirementResponseDto.setId(entity.getId());
        requirementResponseDto.setName(entity.getName());

/*    List<ProductResponseDto> listProductDto = new ArrayList<>();
    entity.getProducts().forEach(product -> {
      ProductResponseDto productResponseDto = productMapper.dtoToEntity(product);
      listProductDto.add(productResponseDto);
    });

    categoryResponseDto.setProducts(listProductDto);*/

        return requirementResponseDto;
    }

    public Requirement updateRequirement(Requirement requirement, RequirementRequestDto requestDto){

        requirement.setName(requestDto.getName());
        requirement.setProductList(requestDto.getProductList());

        return requirement;

    }
    public Requirement updateSoftDelete(Requirement requirement, boolean status){
        requirement.setStatus(status);
        return requirement;
    }
}
