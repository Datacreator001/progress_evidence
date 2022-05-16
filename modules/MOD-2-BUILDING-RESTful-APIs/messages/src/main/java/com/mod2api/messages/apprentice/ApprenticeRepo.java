package com.mod2api.messages.apprentice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApprenticeRepo extends JpaRepository<Apprentice, Long> {
}
