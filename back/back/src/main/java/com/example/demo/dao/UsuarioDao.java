package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.modelo.Usuario;

public interface UsuarioDao extends CrudRepository<Usuario,Long>{
	
	List<Usuario> findUsuarioByNomeAndSenha(String nome, String senha);

	List<Usuario> findByNomeStartingWithIgnoreCase(String letra);
	
	Optional<Usuario> findByIdUsuario(Long idUsuario);

	List<Usuario> findByTipoStartingWithIgnoreCase(String tipo);

	List<Usuario> findAllByIdUsuario(Long idUsuario);
}
