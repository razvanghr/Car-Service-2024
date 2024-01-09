package razvanghr.CarService.exception;

public class CarNotExist extends Exception{
    public CarNotExist(){
        super("Car with this id not exist");
    }
}
