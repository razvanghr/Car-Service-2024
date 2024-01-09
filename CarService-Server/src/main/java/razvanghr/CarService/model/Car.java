package razvanghr.CarService.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Car {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public enum Caroserie{
        BERLINA,
        CORSA,
        PAPUC
    }

    @Column(name = "Manufacture")
    private String Manufacture;
    private String model;
    private Long odometer;
    private boolean isRepaired;
    @Enumerated(EnumType.STRING)
    private Caroserie caroserie;


    @JsonIgnore
    @ManyToOne()
    private Client client;

    public Car(String manufacture, String model, Long odometer, Boolean isRepaired, Caroserie caroserie, Client client) {
        Manufacture = manufacture;
        this.model = model;
        this.odometer = odometer;
        this.isRepaired = isRepaired;
        this.caroserie = caroserie;
        this.client = client;
    }

    public Car(CarRequestModel carRequestModel , Client client,  Caroserie caroserie){
        this.Manufacture = carRequestModel.getManufacture();
        this.model = carRequestModel.getModel();
        this.caroserie = caroserie;
        this.odometer = carRequestModel.getOdometer();
        this.isRepaired = carRequestModel.isRepaired();
        this.client = client;
    }

    public Car(Client client) {
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public Car() {
    }

    public Caroserie getCaroserie() {
        return caroserie;
    }

    public void setCaroserie(Caroserie caroserie) {
        this.caroserie = caroserie;
    }

    public String getManufacture() {
        return Manufacture;
    }

    public void setManufacture(String manufacture) {
        Manufacture = manufacture;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Long getOdometer() {
        return odometer;
    }

    public void setOdometer(Long odometer) {
        this.odometer = odometer;
    }

    public Boolean getRepaired() {
        return isRepaired;
    }

    public void setRepaired(Boolean repaired) {
        isRepaired = repaired;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }


    public void updateCar(CarRequestModel carRequest){
        this.model = carRequest.getModel();
        this.Manufacture = carRequest.getManufacture();
        this.odometer = carRequest.getOdometer();
        this.isRepaired = carRequest.isRepaired();
    }


}