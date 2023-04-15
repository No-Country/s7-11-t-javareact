package com.c711tjavareact.Server.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;
import springfox.documentation.spring.web.json.Json;

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


/*    @ManyToMany(mappedBy = "productList")
    private  List<Requirement> requirementList;*/

}