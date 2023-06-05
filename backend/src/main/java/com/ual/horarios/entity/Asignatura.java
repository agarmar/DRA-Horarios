package com.ual.horarios.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "asignaturas")
public class Asignatura {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Abreviatura is mandatory")
    private String abrev;  //Mat, Ing

    private String name;
    private String observaciones;

    public Asignatura(String abrev) {
        this.abrev = abrev;
    }

    public Asignatura(String abrev, String name, String observaciones) {
        this.abrev = abrev;
        this.name = name;
        this.observaciones = observaciones;
    }

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public String getAbrev() { return abrev; }
    public void setAbrev(String abrev) { this.abrev = abrev; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getObservaciones() { return observaciones; }
    public void setObservaciones(String observaciones) { this.observaciones = observaciones; }

}