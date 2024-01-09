package razvanghr.CarService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import razvanghr.CarService.model.Client;

public interface ClientRepository extends JpaRepository<Client , Long> {
}
