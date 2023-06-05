package com.ual.horarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ual.horarios.entity.Semana;
import com.ual.horarios.entity.Profesor;
import com.ual.horarios.entity.Asignatura;
import com.ual.horarios.service.HorarioService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/horarios")
public class HorarioController {

  @Autowired
  private HorarioService horarioService;

  @GetMapping
  public List<Semana> findAll() { return horarioService.findAll(); }

  @GetMapping
  public List<Profesor> findAllProfesores() { return horarioService.findAllProfesores(); }

  @GetMapping
  public List<Asignatura> findAllAsignaturas() { return horarioService.findAllAsignaturas(); }

  @GetMapping("/{id}")
  public ResponseEntity<Semana> findById(@PathVariable long id) {
    Semana semana = horarioService.findById(id);
    if (semana == null) { return ResponseEntity.notFound().build(); }
    return ResponseEntity.ok(semana);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Profesor> findByIdProfesor(@PathVariable long id) {
    Profesor profesor = horarioService.findByIdProfesor(id);
    if (profesor == null) { return ResponseEntity.notFound().build(); }
    return ResponseEntity.ok(profesor);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Asignatura> findByIdAsignatura(@PathVariable long id) {
    Asignatura asignatura = horarioService.findByIdAsignatura(id);
    if (asignatura == null) { return ResponseEntity.notFound().build(); }
    return ResponseEntity.ok(asignatura);
  }

  @PostMapping
  public Semana save(@RequestBody Semana semana) { return horarioService.save(semana); }

  @PostMapping
  public Profesor save(@RequestBody Profesor profesor) { return horarioService.save(profesor); }

  @PostMapping
  public Asignatura save(@RequestBody Asignatura asignatura) { return horarioService.save(asignatura); }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteById(@PathVariable long id) {
    Semana semana = horarioService.findById(id);
    if (semana == null) { return ResponseEntity.notFound().build(); }
    horarioService.deleteById(id);
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteByIdProfesor(@PathVariable long id) {
    Profesor profesor = horarioService.findByIdProfesor(id);
    if (profesor == null) { return ResponseEntity.notFound().build(); }
    horarioService.deleteByIdProfesor(id);
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteByIdAsignatura(@PathVariable long id) {
    Asignatura asignatura = horarioService.findByIdAsignatura(id);
    if (asignatura == null) { return ResponseEntity.notFound().build(); }
    horarioService.deleteByIdAsignatura(id);
    return ResponseEntity.noContent().build();
  }

}

