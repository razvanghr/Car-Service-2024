package razvanghr.CarService.model;


import lombok.Data;

@Data
public class CarRequestModel {

    private String manufacture;
    private String model;
    private Long odometer;
    private boolean isRepaired;
    private String  caroserie;


    public CarRequestModel() {
    }

    public CarRequestModel(String manufacture, String model, Long odometer, boolean isRepaired) {
        this.manufacture = manufacture;
        this.model = model;
        this.odometer = odometer;
        this.isRepaired = isRepaired;
    }

    public CarRequestModel(String manufacture, String model, Long odometer, boolean isRepaired, String caroserie) {
        this.manufacture = manufacture;
        this.model = model;
        this.odometer = odometer;
        this.isRepaired = isRepaired;
        this.caroserie = caroserie;
    }


}
