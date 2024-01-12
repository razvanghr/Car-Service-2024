package razvanghr.CarService.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    private String firstName;
    private String lastName;



    @OneToMany(mappedBy = "client" , cascade = CascadeType.ALL)
    private List<Car> cars;


    public Client(String firstName, String lastName, List<Car> cars) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cars = cars;
    }

    public Client(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Client() {
    }

    public Long getId() {
        return id;
    }



    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }

    public void addCarToArr(Car car){
        this.cars.add(car);
    }
}
