package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.GerarEnvioDao;
import com.example.demo.modelo.GerarEnvio;

@Service
public class GerarEnvioService {
	
	@Autowired
	private GerarEnvioDao envioDao;
	
	public Optional<GerarEnvio> pesquisarId(Long idEnvio) {
		return envioDao.findById(idEnvio);
	}

	public GerarEnvio criar(GerarEnvio novoEnvio) {
		return envioDao.save(novoEnvio);
	}
}
