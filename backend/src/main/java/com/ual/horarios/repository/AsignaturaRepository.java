package com.ual.horarios.repository;

import com.ual.horarios.entity.Asignatura;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AsignaturaRepository extends CrudRepository<Asignatura, Long> {
    public List<Asignatura> findByNameContainingIgnoreCase(@Param("name") String name);
}