package com.raissa.dsdeliver.repositories;

import com.raissa.dsdeliver.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
