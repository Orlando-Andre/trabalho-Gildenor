package com.example.demo.controle;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.GerarEnvio;
import com.example.demo.service.GerarEnvioService;

@RestController
@CrossOrigin("*")
@RequestMapping("/envios")
public class GerarEnvioControle {
	
	@Autowired
	private GerarEnvioService envioService;
	
	@GetMapping("/pesquisar/{idEnvio}") 
	public Optional<GerarEnvio> pesquisar(@PathVariable Long idEnvio) {
		return envioService.pesquisarId(idEnvio);
	}

}
