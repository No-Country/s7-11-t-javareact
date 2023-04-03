package com.c711tjavareact.Server.repository;

import com.c711tjavareact.Server.model.entity.Requirement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequirementRepository extends JpaRepository<Requirement, Long> {
}