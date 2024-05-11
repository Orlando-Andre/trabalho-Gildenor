package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.modelo.Status;


public interface AtualizarRastreioDao extends CrudRepository<Status,Long> {
	
	List<Status> findByGerarEnvio_IdEnvio(Long id_envio);
	
}
