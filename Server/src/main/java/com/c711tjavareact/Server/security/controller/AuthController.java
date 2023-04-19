package com.c711tjavareact.Server.security.controller;
import com.c711tjavareact.Server.security.dto.JwtDto;
import com.c711tjavareact.Server.security.dto.LoginUsuario;
import com.c711tjavareact.Server.security.dto.NuevoUsuario;
import com.c711tjavareact.Server.security.entity.Rol;
import com.c711tjavareact.Server.security.entity.Usuario;
import com.c711tjavareact.Server.security.enums.RolNombre;
import com.c711tjavareact.Server.security.jwt.JwtProvider;
import com.c711tjavareact.Server.security.service.RolService;
import com.c711tjavareact.Server.security.service.UsuarioService;
import com.c711tjavareact.Server.security.util.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	UsuarioService usuarioService;
	@Autowired
	RolService rolService;
	@Autowired
	JwtProvider jwtProvider;
	//Espera un json y lo convierte a tipo clase NuevoUsuario
	@PostMapping("/add")
	public ResponseEntity<?> nuevoUsuario(@Valid @RequestBody NuevoUsuario nuevoUsuario,
										  BindingResult bindingResult) {
		if(bindingResult.hasErrors()){
			return new ResponseEntity<>(new Mensaje("Campos mal o email invalido"), HttpStatus.BAD_REQUEST);
		}
		if(usuarioService.existsByUsuario(nuevoUsuario.getNombreUsuario() )){
			return new ResponseEntity<>(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
		}
		if(usuarioService.existsByEmail(nuevoUsuario.getEmail())){
			return new ResponseEntity<>(new Mensaje("Ese email ya existe"), HttpStatus.BAD_REQUEST);
		}

		Usuario usuario = new Usuario(nuevoUsuario.getNombre(), nuevoUsuario.getNombreUsuario(),
				nuevoUsuario.getEmail(), passwordEncoder.encode(nuevoUsuario.getPassword()));

		Set<Rol> roles = new HashSet<>();
		roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).orElseThrow());
		if(nuevoUsuario.getRoles().contains("admin"))
			roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
		usuario.setRoles(roles);
		usuarioService.save(usuario);
		return new ResponseEntity<>(new Mensaje("Usuario creado"), HttpStatus.CREATED);
	}
	@PostMapping("/login")
	public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUsuario loginUsuario, BindingResult bindingResult){
		if (bindingResult.hasErrors())
			return new ResponseEntity(new Mensaje("Campos mal"), HttpStatus.BAD_REQUEST);
		Authentication authentication =
				authenticationManager.authenticate(
						new UsernamePasswordAuthenticationToken(loginUsuario.getNombreUsuario(),
								loginUsuario.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtProvider.generateToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		JwtDto jwtDto = new JwtDto(jwt, userDetails.getUsername(), userDetails.getAuthorities());
		return new ResponseEntity<>(jwtDto, HttpStatus.OK);
	}
}