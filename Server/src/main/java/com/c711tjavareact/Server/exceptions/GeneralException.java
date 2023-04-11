package com.c711tjavareact.Server.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;

@EqualsAndHashCode(callSuper = true)
@Data
public class GeneralException extends RuntimeException{
    private HttpStatus status;

    public GeneralException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }
}
