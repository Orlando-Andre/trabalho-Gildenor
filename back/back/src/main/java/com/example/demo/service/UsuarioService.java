package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.dao.UsuarioDao;
import com.example.demo.modelo.Usuario;


@Component
public class UsuarioService {
	
	@Autowired
	private UsuarioDao usuarioDao;
	
	public Usuario inserirUsuario(Usuario u) {
		return usuarioDao.save(u);
	}

	public List<Usuario> getAllUsuarioByNomeAndSenha(Usuario u) {
		return usuarioDao.findUsuarioByNomeAndSenha(u.getNome(), u.getSenha());
	}

	public List<Usuario> getAllUsuario() {
		return (List<Usuario>) usuarioDao.findAll();
	}
	
	public void excluir(Long idUsuario) {
		usuarioDao.deleteById(idUsuario);
	}

	public Optional<Usuario> pesquisarId(Long idUsuario) {
		return usuarioDao.findById(idUsuario);
	}

	public List<Usuario> buscarPorLetra(String letra) {
        return usuarioDao.findByNomeStartingWithIgnoreCase(letra);
    }
	
	public List<Usuario> buscarPorTipo(String tipo) {
        return usuarioDao.findByTipoStartingWithIgnoreCase(tipo);
    }
	
	public Usuario updateUsuario(Usuario u) {
		return usuarioDao.save(u);
	}

	public List<Usuario> pesquisarPorId(Long idUsuario) {
		return usuarioDao.findAllByIdUsuario(idUsuario);
	}
}
