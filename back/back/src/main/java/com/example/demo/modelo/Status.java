package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Status {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idStatus;
	
	@Column
	private String descricao;
	
	public Long getIdStatus() {
		return idStatus;
	}

	public void setIdStatus(Long idStatus) {
		this.idStatus = idStatus;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Gerar_envio getGerarEnvio() {
		return gerarEnvio;
	}

	public void setGerarEnvio(Gerar_envio gerarEnvio) {
		this.gerarEnvio = gerarEnvio;
	}

	@ManyToOne
	@JoinColumn(name="id_envio")
    private Gerar_envio gerarEnvio;
	
	

	
}
