package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.dao.GerarEnvioDao;
import com.example.demo.dao.UsuarioDao;
import com.example.demo.modelo.Agencia;
import com.example.demo.modelo.Gerar_envio;

@Component
public class GerarEnvioService {
	
	@Autowired
	private GerarEnvioDao envioDao;
	
	public Optional<Gerar_envio> pesquisarId(Long idEnvio) {
		return envioDao.findById(idEnvio);
	}
}
