package com.ual.horarios.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "tramos")
public class Tramo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Hora is mandatory")
    private Number hora;

    private String de;
    private String a;

    public Tramo(Number hora) {
        this.hora = hora;
    }

    public Tramo(Number hora, String de, String a) {
        this.hora = hora;
        this.de = a;
        this.de = de;
    }

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }

    public Number getHora() { return hora; }
    public void setHora(Number hora) { this.hora = hora; }

    public String getDe() { return de; }
    public void setDe(String de) { this.de = de; }

    public String getA() { return a; }
    public void setA(String a) { this.a = a; }

}