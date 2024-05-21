package com.example.demo.controle;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Status;
import com.example.demo.service.AtualizarRastreioService;


@RestController
@CrossOrigin("*")
@RequestMapping("/rastreio")
public class AtualizarRastreioControle {
	
	@Autowired
	private AtualizarRastreioService rastreioService;
	
	@GetMapping("/pesquisar/{id_envio}") 
	public List<Status> pesquisar(@PathVariable Long id_envio) {
		return rastreioService.pesquisarIdEnvio(id_envio);
	}
	
	@PostMapping(path="/atualizar", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Status atualizarRastreio(@RequestBody Status s) {
		return rastreioService.atualizarRastreio(s);
	}

}
