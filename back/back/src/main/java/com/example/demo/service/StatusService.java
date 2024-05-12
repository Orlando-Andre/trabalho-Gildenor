package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.dao.StatusDao;
import com.example.demo.modelo.Status;


@Component
public class StatusService {
	
	@Autowired
	private StatusDao statusDao;

	
	public List<Status> getStatusByIdEnvio(Long idEnvio) {
		
		return statusDao.findByGerarEnvioIdEnvio(idEnvio);
	}

}
