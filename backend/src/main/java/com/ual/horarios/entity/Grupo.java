package com.ual.horarios.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "grupos")
public class Grupo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Abreviatura is mandatory")
    private String abrev;   //1ºA

    private String curso;  //1º
    private String grupo;  //A
    private String observaciones;

    public Grupo(String abrev) {
        this.abrev = abrev;
    }

    public Grupo(String abrev, String curso, String grupo, String observaciones) {
        this.abrev = abrev;
        this.curso = curso;
        this.grupo = grupo;
        this.observaciones = observaciones;
    }

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public String getAbrev() { return abrev; }
    public void setAbrev(String abrev) { this.abrev = abrev; }

    public String getCurso() { return curso; }
    public void setCurso(String curso) { this.curso = curso; }

    public String getGrupo() { return grupo; }
    public void setGrupo(String grupo) { this.grupo = grupo; }

    public String getObservaciones() { return observaciones; }
    public void setObservaciones(String observaciones) { this.observaciones = observaciones; }

}