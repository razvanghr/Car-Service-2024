package razvanghr.CarService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import razvanghr.CarService.model.Client;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client , Long> {
    Optional<Client> findByFirstNameAndLastName(String firstName, String lastName);
}
