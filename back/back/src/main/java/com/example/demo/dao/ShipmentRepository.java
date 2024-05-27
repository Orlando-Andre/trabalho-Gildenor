package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Shipment;

public interface ShipmentRepository extends JpaRepository<Shipment, Long> {
}