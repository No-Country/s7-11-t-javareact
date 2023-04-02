package com.c711tjavareact.Server.security.repository;


import com.c711tjavareact.Server.security.entity.Rol;
import com.c711tjavareact.Server.security.enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolRepository extends JpaRepository<Rol, Integer> {
	Optional<Rol> findByRolNombre(RolNombre rolNombre);
}