package com.c711tjavareact.Server.controller;

import com.c711tjavareact.Server.exceptions.GeneralException;
import com.c711tjavareact.Server.security.util.ErrorDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(value = GeneralException.class)
    public ResponseEntity<ErrorDTO> requestExceptionHandler(GeneralException ex){
        ErrorDTO error = ErrorDTO.builder().message(ex.getMessage()).build();
        return new ResponseEntity<>(error, ex.getStatus());
    }
}
