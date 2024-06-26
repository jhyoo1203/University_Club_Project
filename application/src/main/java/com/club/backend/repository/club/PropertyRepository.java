// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
package com.club.backend.repository.club;

import com.club.backend.entity.club.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {
}
