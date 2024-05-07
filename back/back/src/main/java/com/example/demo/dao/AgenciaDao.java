package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.modelo.Agencia;

public interface AgenciaDao extends CrudRepository<Agencia,Long>{
	
	List<Agencia> findAgenciaByNomeAndCidade(String nome, String cidade);

	List<Agencia> findByNomeStartingWithIgnoreCase(String letra);
	
	Optional<Agencia> findByIdAgencia(Long idAgencia);

	List<Agencia> findByCidadeStartingWithIgnoreCase(String cidade);

	List<Agencia> findAllByIdAgencia(Long idAgencia);

}
