package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class GerarEnvio {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idEnvio;
	
	@Column
	private String uf_remetente;
	
	@Column
	private String uf_destinatario;
	
	

	public Long getIdEnvio() {
		return idEnvio;
	}

	public void setIdEnvio(Long idEnvio) {
		this.idEnvio = idEnvio;
	}

	public String getUf_remetente() {
		return uf_remetente;
	}

	public void setUf_remetente(String uf_remetente) {
		this.uf_remetente = uf_remetente;
	}

	public String getUf_destinatario() {
		return uf_destinatario;
	}

	public void setUf_destinatario(String uf_destinatario) {
		this.uf_destinatario = uf_destinatario;
	}
	
}
