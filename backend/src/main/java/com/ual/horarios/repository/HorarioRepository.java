package com.ual.horarios.repository;

import com.ual.horarios.entity.Semana;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface HorarioRepository extends CrudRepository<Semana, Long> {
    public List<Semana> findByNameContainingIgnoreCase(@Param("name") String name);
}
