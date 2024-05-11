package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.dao.AtualizarRastreioDao;
import com.example.demo.modelo.Status;


@Component
public class AtualizarRastreioService {
	
	@Autowired
	private AtualizarRastreioDao rastreioDao;
	
	public List<Status> pesquisarIdEnvio(Long id_envio) {
		return rastreioDao.findByGerarEnvio_IdEnvio(id_envio);
	}

}
