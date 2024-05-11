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

import com.example.demo.modelo.Agencia;
import com.example.demo.service.AgenciaService;

@RestController
@CrossOrigin("*")
@RequestMapping("/agencia")
public class AgenciaControle {
	
	@Autowired
	private AgenciaService agenciaService;
	
	
	@PostMapping(path="/inserir", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Agencia inserirAgencia(@RequestBody Agencia a) {
		return agenciaService.inserirAgencia(a);
	}
	
	@PutMapping("/atualizar")
	public Agencia updateAgencia(@RequestBody Agencia a) {
		return agenciaService.updateAgencia(a);
	}
	
	@DeleteMapping("/excluir/{idAgencia}")
    public void excluirAgencia(@PathVariable Long idAgencia) {
		agenciaService.excluir(idAgencia);
    }
	
	@GetMapping("/carregarTabela")
	public List<Agencia> getAllAgencia(){
		return agenciaService.getAllAgencia();
	}
	
	
	@GetMapping("/pesquisar/{idAgencia}") 
	public Optional<Agencia> pesquisar(@PathVariable Long idAgencia) {
		return agenciaService.pesquisarId(idAgencia);
	}
	
	
	@GetMapping("/pesquisaSimplesNome/{nome}")
	public List<Agencia> getAgenciaByNome(@PathVariable String nome) {
		return agenciaService.getAllAgenciaByNome(nome);
	}
	
	
	
	
	
	
	@GetMapping("/pesquisaSimples/{letra}")
    public List<Agencia> buscarPorLetra(@PathVariable String letra) {
        return agenciaService.buscarPorLetra(letra);
    }
	
	@GetMapping("/pesquisarPorId/{idAgencia}")
    public List<Agencia> pesquisarPorId(@PathVariable Long idAgencia) {
        return agenciaService.pesquisarPorId(idAgencia);
    }
	
	@PostMapping(path="/", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Agencia> pesquisarAgencia(@RequestBody Agencia a) {
		return agenciaService.getAllAgenciaByNomeAndCidade(a);
	}
}
