package com.c711tjavareact.Server.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import static javax.persistence.FetchType.EAGER;

@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    @NotBlank(message = "Not Empty")
    private String name;

    @Column(name = "price")
    private float price;

    @Column(name = "quantity", nullable = false)
    private int quantity;
    @Column(name = "discount")
    private int discount;

    @Column(name = "status")
    private boolean status = true;

    @ManyToOne(fetch = EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    Category category;
}