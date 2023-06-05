package com.ual.horarios.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ual.horarios.entity.Semana;
import com.ual.horarios.entity.Profesor;
import com.ual.horarios.entity.Asignatura;
import com.ual.horarios.repository.HorarioRepository;
import com.ual.horarios.repository.ProfesorRepository;
import com.ual.horarios.repository.AsignaturaRepository;
import java.util.List;


@Service
public class HorarioService {

  @Autowired
  private HorarioRepository horarioRepository;

  @Autowired
  private ProfesorRepository profesorRepository;
  
  @Autowired
  private AsignaturaRepository asignaturaRepository;

  public List<Semana> findAll() { return (List<Semana>) horarioRepository.findAll(); }
  public List<Profesor> findAllProfesores() { return (List<Profesor>) profesorRepository.findAll(); }
  public List<Asignatura> findAllAsignaturas() { return (List<Asignatura>) asignaturaRepository.findAll(); }

  public Semana findById(long id) { return horarioRepository.findById(id).orElse(null); }
  public Profesor findByIdProfesor(long id) { return profesorRepository.findById(id).orElse(null); }
  public Asignatura findByIdAsignatura(long id) { return asignaturaRepository.findById(id).orElse(null); }

  public Semana save(Semana semana) { return horarioRepository.save(semana); }
  public Profesor save(Profesor profesor) { return profesorRepository.save(profesor); }
  public Asignatura save(Asignatura asignatura) { return asignaturaRepository.save(asignatura); }

  public void deleteById(long id) { horarioRepository.deleteById(id); }
  public void deleteByIdProfesor(long id) { profesorRepository.deleteById(id); }
  public void deleteByIdAsignatura(long id) { asignaturaRepository.deleteById(id); }
}
