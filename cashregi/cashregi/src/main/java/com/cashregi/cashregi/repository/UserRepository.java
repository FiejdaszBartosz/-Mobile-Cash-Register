package com.cashregi.cashregi.repository;

import com.cashregi.cashregi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u from User u where u.email = ?1 and u.password = ?2")
    Optional<User> getUserByEmailAndPassword(String email, String password);

    @Query("SELECT u from User u where u.id = ?1")
    Optional<User> getUserByEmail(UUID id);
}
