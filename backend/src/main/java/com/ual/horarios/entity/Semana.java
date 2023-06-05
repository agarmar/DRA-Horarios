package com.ual.horarios.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "jornadas")
public class Semana {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Grupo is mandatory")
    private Grupo grupo;

    private Jornada[] jornadas;

    public Semana(Grupo grupo) {
        this.grupo = grupo;
        Jornada[] aux = {new Jornada("L", "lunes"), new Jornada("M", "martes"), new Jornada("X", "miercoles"), new Jornada("J", "jueves"), new Jornada("V", "viernes")};
        this.jornadas = aux;
    }

    public Semana(Grupo grupo, Jornada[] jornadas) {
        this.grupo = grupo;
        this.jornadas = jornadas;
    }

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public Grupo getGrupo() { return grupo; }
    public void setGrupo(Grupo grupo) { this.grupo = grupo; }

    public Jornada[] getJornadas() { return jornadas; }
    public void setJornadas(Jornada[] jornadas) { this.jornadas = jornadas; }

}