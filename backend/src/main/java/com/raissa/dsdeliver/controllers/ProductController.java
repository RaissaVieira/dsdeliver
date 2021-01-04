package com.raissa.dsdeliver.controllers;

import com.raissa.dsdeliver.dto.ProductDTO;
import com.raissa.dsdeliver.services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
    @Autowired
    private ProductServices services;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll() {
        List<ProductDTO> list = services.findAll();
        return ResponseEntity.ok().body(list);
    }
}
