package com.c711tjavareact.Server.service.impl;

import com.c711tjavareact.Server.exceptions.GeneralException;
import com.c711tjavareact.Server.model.dto.request.RequirementRequestDto;
import com.c711tjavareact.Server.model.dto.response.RequirementResponseDto;
import com.c711tjavareact.Server.model.entity.Category;
import com.c711tjavareact.Server.model.entity.Requirement;
import com.c711tjavareact.Server.model.mapper.RequirementMapper;
import com.c711tjavareact.Server.repository.RequirementRepository;
import com.c711tjavareact.Server.security.util.Mensaje;
import com.c711tjavareact.Server.service.IRequirementService;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RequirementServiceImpl implements IRequirementService {
    @Autowired
    RequirementMapper requirementMapper;
    @Autowired
    RequirementRepository requirementRepository;

    @Override
    public ResponseEntity<Mensaje> createRequirement(RequirementRequestDto requirementRequestDto) {
        Requirement requirement1 = requirementMapper.entityToDto(requirementRequestDto);
        requirementRepository.save(requirement1);
        return new ResponseEntity<>(new Mensaje("create Requirement"), HttpStatus.CREATED);
    }

    @Override
    public void deleteRequirement(Long id) {
        Optional<Requirement> requirement = requirementRepository.findById(id);
        Requirement requirement1;
        if (requirement.get().isStatus()) {
            requirement1 = requirementMapper.updateSoftDelete(requirement.get(), false);
        } else {
            requirement1 = requirementMapper.updateSoftDelete(requirement.get(), true);
        }
        requirementRepository.save(requirement1);
    }

    @Override
    public ResponseEntity<RequirementResponseDto> updateRequirement(Long id, RequirementRequestDto requirementRequestDto) {
        Optional<Requirement> requirement = requirementRepository.findById(id);
        Requirement requirement1;
        RequirementResponseDto requirementResponseDto;
        if (requirement.isPresent()) {
            requirement1 = requirementMapper.updateRequirement(requirement.get(), requirementRequestDto);
            requirementRepository.save(requirement1);
            requirementResponseDto = requirementMapper.dtoToEntity(requirement1);
            return new ResponseEntity<>(requirementResponseDto, HttpStatus.OK);
        } else {
            throw new GeneralException("No se encontro la lista", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<List<RequirementResponseDto>> findRequirements() {
        List<Requirement> requirementList = requirementRepository.findAll();
        List<RequirementResponseDto> responseRequirementList = new ArrayList<>();

        requirementList.forEach(requirement -> {
            if (requirement.isStatus()) {
                List<Category> categoryList = requirement.getCategory().stream()
                    .filter(Category::isStatus)
                    .collect(Collectors.toList());
                requirement.setCategory(categoryList);
                RequirementResponseDto requirementResponseDto = requirementMapper.dtoToEntity(requirement);
                responseRequirementList.add(requirementResponseDto);
            }
        });
        return new ResponseEntity<>(responseRequirementList, HttpStatus.OK);
    }
}

