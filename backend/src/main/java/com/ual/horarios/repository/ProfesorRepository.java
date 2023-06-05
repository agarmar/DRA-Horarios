package com.ual.horarios.repository;

import com.ual.horarios.entity.Profesor;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProfesorRepository extends CrudRepository<Profesor, Long> {
    public List<Profesor> findByNameContainingIgnoreCase(@Param("name") String name);
}