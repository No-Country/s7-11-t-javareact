package com.c711tjavareact.Server.security.util;

import com.c711tjavareact.Server.security.entity.Rol;
import com.c711tjavareact.Server.security.enums.RolNombre;
import com.c711tjavareact.Server.security.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class CreateRoles implements CommandLineRunner {

	@Autowired
	RolService rolService;

	@Override
	public void run(String... args) throws Exception {

		Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
		Rol rolUser = new Rol(RolNombre.ROLE_USER);
		rolService.save(rolAdmin);
		rolService.save(rolUser);


	}
}
