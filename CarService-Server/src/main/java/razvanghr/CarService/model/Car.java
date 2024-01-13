package razvanghr.CarService.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Car {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public enum Caroserie{
        COUPE,
        SEDAN,
        PICKUP,
        HATCHBACK,
        MINIVAN,
        LIFTBACK,
        UNKNOWN

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

    public Car(CarRequestModel carRequestModel , Client client,  String caroserie){
        this.Manufacture = carRequestModel.getManufacture();
        this.model = carRequestModel.getModel();
        this.caroserie = foundCaroserie(caroserie);
        this.odometer = carRequestModel.getOdometer();
        this.isRepaired = carRequestModel.isRepaired();
        this.client = client;
    }

    public Car(Client client) {
        this.client = client;
    }

    public Car() {
    }




    private Car.Caroserie foundCaroserie(String caroserie){
        switch(caroserie) {
            case "Coupe":
                return Caroserie.COUPE;
            case "Sedan":
                return Caroserie.SEDAN;

            case "Pickup":
                return Caroserie.PICKUP;

            case "Hatchback":
                return Caroserie.HATCHBACK;

            case "Minivan":
                return Caroserie.MINIVAN;

            case "Liftback":
                return Caroserie.LIFTBACK;
            default:
                return Caroserie.UNKNOWN;
        }
    }



    public void updateCar(CarRequestModel carRequest){
        this.model = carRequest.getModel();
        this.Manufacture = carRequest.getManufacture();
        this.odometer = carRequest.getOdometer();
        this.isRepaired = carRequest.isRepaired();
        this.caroserie = foundCaroserie(carRequest.getCaroserie());
    }


}