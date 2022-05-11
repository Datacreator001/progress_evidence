package com.pluralsight.mod2api.repos;
import com.pluralsight.mod2api.models.ApprenticeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApprenticeRepo extends JpaRepository<ApprenticeEntity, Long> {
}
