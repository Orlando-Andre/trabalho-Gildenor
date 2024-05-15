package com.example.demo.controle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Status;
import com.example.demo.service.StatusService;

@RestController
@CrossOrigin("*")
@RequestMapping("/status")
public class StatusControle {
	
	@Autowired
	private StatusService statusService;
	
	
	@GetMapping("/consultar/{idEnvio}")
	public List<Status> getStatusByIdEnvio(@PathVariable Long idEnvio) {
		return statusService.getStatusByIdEnvio(idEnvio);
	}
	

}
