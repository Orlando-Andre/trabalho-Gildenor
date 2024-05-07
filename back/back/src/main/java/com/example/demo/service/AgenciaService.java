package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.dao.AgenciaDao;
import com.example.demo.modelo.Agencia;


@Component
public class AgenciaService {
	
	@Autowired
	private AgenciaDao agenciaDao;
	
	public Agencia inserirAgencia(Agencia a) {
		return agenciaDao.save(a);
	}

	public List<Agencia> getAllAgenciaByNomeAndCidade(Agencia a) {
		return agenciaDao.findAgenciaByNomeAndCidade(a.getNome(), a.getCidade());
	}

	public List<Agencia> getAllAgencia() {
		return (List<Agencia>) agenciaDao.findAll();
	}
	
	public void excluir(Long idAgencia) {
		agenciaDao.deleteById(idAgencia);
	}

	public Optional<Agencia> pesquisarId(Long idAgencia) {
		return agenciaDao.findById(idAgencia);
	}

	public List<Agencia> buscarPorLetra(String letra) {
        return agenciaDao.findByNomeStartingWithIgnoreCase(letra);
    }
	
	public Agencia updateAgencia(Agencia a) {
		return agenciaDao.save(a);
	}

	public List<Agencia> pesquisarPorId(Long idAgencia) {
		return agenciaDao.findAllByIdAgencia(idAgencia);
	}
}
