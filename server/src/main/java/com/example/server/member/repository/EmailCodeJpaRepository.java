package com.example.server.member.repository;

import com.example.server.member.entity.EmailCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Repository
public interface EmailCodeJpaRepository extends JpaRepository<EmailCode, Long> {
    @Query("select e from EmailCode e where e.email = :email")
    Optional<EmailCode> findByEmail(String email);
}
