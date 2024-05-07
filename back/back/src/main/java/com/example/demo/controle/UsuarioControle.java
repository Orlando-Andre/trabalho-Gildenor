package com.example.demo.controle;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Usuario;
import com.example.demo.service.UsuarioService;


@RestController
@CrossOrigin("*")
@RequestMapping("/usuario")
public class UsuarioControle {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping(path="/", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Usuario> pesquisarUsuario(@RequestBody Usuario u) {
		return usuarioService.getAllUsuarioByNomeAndSenha(u);
	}
	
	@GetMapping("/carregarTabela")
	public List<Usuario> getAllUsuario(){
		return usuarioService.getAllUsuario();
	}
	
	@PostMapping(path="/inserir", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Usuario inserirUsuario(@RequestBody Usuario u) {
		return usuarioService.inserirUsuario(u);
	}
	
	@DeleteMapping("excluir/{idUsuario}")
    public void excluirUsuario(@PathVariable Long idUsuario) {
        usuarioService.excluir(idUsuario);
    }
	
	@GetMapping("/pesquisar/{idUsuario}") 
	public Optional<Usuario> pesquisar(@PathVariable Long idUsuario) {
		return usuarioService.pesquisarId(idUsuario);
	}
	
	@PutMapping("/atualizar")
	public Usuario updateUsuario(@RequestBody Usuario u) {
		return usuarioService.updateUsuario(u);
	}
	
	@GetMapping("/pesquisaSimples/{letra}")
    public List<Usuario> buscarPorLetra(@PathVariable String letra) {
        return usuarioService.buscarPorLetra(letra);
    }
	
	@GetMapping("/pesquisarPorId/{idUsuario}")
    public List<Usuario> pesquisarPorId(@PathVariable Long idUsuario) {
        return usuarioService.pesquisarPorId(idUsuario);
    }

}
