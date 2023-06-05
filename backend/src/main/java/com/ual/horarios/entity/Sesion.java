package com.ual.horarios.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "sesiones")
public class Sesion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

   // @NotBlank(message = "Grupo is mandatory")
   // private Grupo grupo;
     @NotBlank(message = "Asignatura is mandatory")
    private Asignatura asignatura;
    @NotBlank(message = "Profesor is mandatory")
    private Profesor profesor;

    private Dia dia;
    private Tramo tramo;

    public Sesion(Tramo tramo) {
        this.tramo = tramo;
    }

    //public Sesion(Grupo grupo, Asignatura asignatura, Profesor profesor) {
    public Sesion(Asignatura asignatura, Profesor profesor) {
        //this.grupo = grupo;
        this.asignatura = asignatura;
        this.profesor = profesor;
    }

    //public Sesion(Grupo grupo, Asignatura asignatura, Profesor profesor, Dia dia, Tramo tramo) {
    public Sesion(Asignatura asignatura, Profesor profesor, Dia dia, Tramo tramo) {
        //this.grupo = grupo;
        this.asignatura = asignatura;
        this.profesor = profesor;
        this.dia = dia;
        this.tramo = tramo;
    }

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    //public Grupo getGrupo() { return grupo; }
    //public void setGrupo(Grupo grupo) { this.grupo = grupo; }

    public Asignatura getAsignatura() { return asignatura; }
    public void setAsignatura(Asignatura asignatura) { this.asignatura = asignatura; }

    public Profesor getProfesor() { return profesor; }
    public void setProfesor(Profesor profesor) { this.profesor = profesor; }

    public Dia getDia() { return dia; }
    public void setDia(Dia dia) { this.dia = dia; }

    public Tramo geTramo() { return tramo; }
    public void setTramo(Tramo tramo) { this.tramo = tramo; }

}