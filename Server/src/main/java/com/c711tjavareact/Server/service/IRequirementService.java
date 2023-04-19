package com.c711tjavareact.Server.service;

import com.c711tjavareact.Server.model.dto.request.RequirementRequestDto;
import com.c711tjavareact.Server.model.dto.response.RequirementResponseDto;
import com.c711tjavareact.Server.security.util.Mensaje;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IRequirementService {

    ResponseEntity<Mensaje> createRequirement(RequirementRequestDto requirementRequestDto);

    void deleteRequirement(Long id);

    ResponseEntity<RequirementResponseDto> updateRequirement(Long id, RequirementRequestDto requirementRequestDto);

    ResponseEntity<List<RequirementResponseDto>> findRequirements();
}
