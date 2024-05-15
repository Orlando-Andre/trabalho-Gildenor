package com.example.demo.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.modelo.Status;

public interface StatusDao extends CrudRepository<Status, Long> {


	List<Status> findByGerarEnvioIdEnvio(Long idEnvio);
	

}
