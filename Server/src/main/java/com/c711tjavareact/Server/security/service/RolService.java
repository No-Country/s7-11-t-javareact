package com.c711tjavareact.Server.security.service;

import com.c711tjavareact.Server.security.entity.Rol;
import com.c711tjavareact.Server.security.enums.RolNombre;
import com.c711tjavareact.Server.security.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class RolService {

	@Autowired
	RolRepository rolRepository;

	public Optional<Rol> getByRolNombre(RolNombre rolNombre){
		return  rolRepository.findByRolNombre(rolNombre);
	}

	public void save(Rol rol){
		rolRepository.save(rol);
	}
}