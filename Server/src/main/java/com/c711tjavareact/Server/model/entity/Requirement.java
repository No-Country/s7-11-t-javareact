package com.c711tjavareact.Server.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "requirement")
public class Requirement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    @NotBlank(message = "Not Empty")
    private String name;

    @UpdateTimestamp
    @Column(name = "updated_on_date")
    private LocalDateTime updateDate;

    @Column(name = "status")
    private boolean status = true;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "requirement")
    @JsonIgnoreProperties("requirement")
    List<Category> category = new ArrayList<>();
}