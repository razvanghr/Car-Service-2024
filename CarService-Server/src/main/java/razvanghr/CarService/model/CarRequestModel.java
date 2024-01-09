package razvanghr.CarService.model;

public class CarRequestModel {

    private String manufacture;
    private String model;
    private Long odometer;
    private boolean isRepaired;


    public CarRequestModel(String manufacture, String model, Long odometer, boolean isRepaired) {
        this.manufacture = manufacture;
        this.model = model;
        this.odometer = odometer;
        this.isRepaired = isRepaired;
    }

    public String getManufacture() {
        return manufacture;
    }

    public void setManufacture(String manufacture) {
        this.manufacture = manufacture;
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

    public boolean isRepaired() {
        return isRepaired;
    }

    public void setRepaired(boolean repaired) {
        isRepaired = repaired;
    }
}
