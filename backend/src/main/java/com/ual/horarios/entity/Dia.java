package com.ual.horarios.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "dias")
public class Dia {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Abreviatura is mandatory")
    private String abrev;  //L, M, X, 

    private String name;  //lunes, martes

    public Dia(String abrev) {
        this.abrev = abrev;
    }

    public Dia(String abrev, String name) {
        this.abrev = abrev;
        this.name = name;
    }

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public String getAbrev() { return abrev; }
    public void setAbrev(String abrev) { this.abrev = abrev; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

}