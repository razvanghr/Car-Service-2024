package razvanghr.CarService.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import razvanghr.CarService.model.CarRequestModel;
import razvanghr.CarService.service.CarService;
import razvanghr.CarService.service.ClientService;

@RestController
@RequestMapping(path = "api/v1/car")
public class CarController {

    private final CarService carService;
    private final ClientService clientService;

    public CarController(CarService carService, ClientService clientService) {
        this.carService = carService;
        this.clientService = clientService;
    }


//    Add Car
    @PostMapping("/add/{id}")
    public ResponseEntity<?> addCar(@PathVariable Long id , @RequestBody CarRequestModel carRequestModel){
        try{
            carService.addCar(id , carRequestModel);
            return ResponseEntity.ok().body("Car added");
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

//    Delete Car

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Long id ){
        try{
            return ResponseEntity.ok().body(carService.deleteCar(id));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }

//    Update Car

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCar(@PathVariable Long id , @RequestBody CarRequestModel carRequestModel){
        try{
            carService.updateCar(id , carRequestModel);
            return ResponseEntity.ok().body("Car updated");

        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }




}
