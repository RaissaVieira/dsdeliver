package com.raissa.dsdeliver.services;

import com.raissa.dsdeliver.dto.OrderDTO;
import com.raissa.dsdeliver.dto.ProductDTO;
import com.raissa.dsdeliver.entities.Order;
import com.raissa.dsdeliver.entities.OrderStatus;
import com.raissa.dsdeliver.entities.Product;
import com.raissa.dsdeliver.repositories.OrderRepository;
import com.raissa.dsdeliver.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServices {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = repository.findOrderWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insert(OrderDTO dto) {
        Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);

       for (ProductDTO p : dto.getProducts()){
           Product product = productRepository.getOne(p.getId());
           order.getProducts().add(product);
       }

       order = repository.save(order);

       return new OrderDTO(order);
    }
}
