package com.example.demo.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.ShipmentRepository;
import com.example.demo.modelo.Shipment;

@RestController
@RequestMapping("/shipment")
@CrossOrigin("*")
public class ShipmentController {

    @Autowired
    private ShipmentRepository shipmentRepository;

    @PostMapping("/createShipment")
    public ResponseEntity<Shipment> createShipment(@RequestBody Shipment shipment) {
        Shipment savedShipment = shipmentRepository.save(shipment);
        return ResponseEntity.ok(savedShipment);
    }
}