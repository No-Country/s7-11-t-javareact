package com.c711tjavareact.Server.controller;

import com.c711tjavareact.Server.model.dto.request.RequirementRequestDto;
import com.c711tjavareact.Server.model.dto.response.RequirementResponseDto;
import com.c711tjavareact.Server.security.util.Mensaje;
import com.c711tjavareact.Server.service.impl.RequirementServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/api/v1/requirement")
public class RequirementController {
    @Autowired
    RequirementServiceImpl requirementService;

    @PostMapping("/create-requirement")
    public ResponseEntity<Mensaje> createRequirement(@RequestBody RequirementRequestDto requirementRequestDto){
        ResponseEntity<Mensaje> create = requirementService.createRequirement(requirementRequestDto);

        return new ResponseEntity<Mensaje>(create.getBody(),create.getStatusCode());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteRequirement(@PathVariable Long id){
        requirementService.deleteRequirement(id);
        return ResponseEntity.status(NO_CONTENT).build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<RequirementResponseDto> updateRequirement(@PathVariable Long id,
                                                                 @RequestBody RequirementRequestDto requirementRequestDto) {
        ResponseEntity<RequirementResponseDto> update = requirementService.updateRequirement(id, requirementRequestDto);

        return new ResponseEntity<RequirementResponseDto>(update.getBody(), update.getStatusCode());
    }

    @GetMapping("/findRequirements")
    public ResponseEntity<List<RequirementResponseDto>> findRequirements(){
        ResponseEntity<List<RequirementResponseDto>> findRequirements = requirementService.findRequirements();

        return new ResponseEntity<List<RequirementResponseDto>>(findRequirements.getBody(), findRequirements.getStatusCode());
    }
}
