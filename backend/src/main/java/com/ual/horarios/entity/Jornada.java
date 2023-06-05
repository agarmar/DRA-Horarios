package com.ual.horarios.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "jornadas")
public class Jornada {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Abreviatura is mandatory")
    private String abrev;  //L

    @NotBlank(message = "Name is mandatory")
    private String name;  //lunes

    private Sesion[] sesiones;

    public Jornada(String abrev, String name) {
        this.abrev = abrev;
        this.name = name;
        Sesion[] aux = {new Sesion(new Tramo(1)), new Sesion(new Tramo(2)), new Sesion(new Tramo(3)), new Sesion(new Tramo(4)), new Sesion(new Tramo(5)), new Sesion(new Tramo(6))};
        this.sesiones = aux;
    }

    public Jornada(String abrev, String name, Sesion[] sesiones) {
        this.abrev = abrev;
        this.name = name;
        this.sesiones = sesiones;
    }

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public String getAbrev() { return abrev; }
    public void setAbrev(String abrev) { this.abrev = abrev; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Sesion[] getSesiones() { return sesiones; }
    public void setSesiones(Sesion[] sesiones) { this.sesiones = sesiones; }

}