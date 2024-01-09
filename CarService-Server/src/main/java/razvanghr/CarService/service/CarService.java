package razvanghr.CarService.service;


import org.springframework.stereotype.Service;
import razvanghr.CarService.exception.CarNotExist;
import razvanghr.CarService.exception.ClientNotExist;
import razvanghr.CarService.model.Car;
import razvanghr.CarService.model.CarRequestModel;
import razvanghr.CarService.model.Client;
import razvanghr.CarService.repository.CarRepository;
import razvanghr.CarService.repository.ClientRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    public final CarRepository carRepository;
    public final ClientRepository clientRepository;

    public CarService(CarRepository carRepository, ClientRepository clientRepository) {
        this.carRepository = carRepository;
        this.clientRepository = clientRepository;
    }


//    Add Car

    public void addCar(Long client_id, CarRequestModel carRequestModel) throws ClientNotExist {

        Optional<Client> optionalClient = clientRepository.findById(client_id);
        optionalClient.orElseThrow(()->new ClientNotExist());
        Car car = new Car(carRequestModel, optionalClient.get(), Car.Caroserie.CORSA);
        carRepository.save(car);


    }


//    Read Car


//    Delete Car

    public String deleteCar(Long car_id) throws CarNotExist {
        Optional<Car> optionalCar = carRepository.findById(car_id);

        if(optionalCar.isEmpty()){
            throw  new CarNotExist();
        }
        carRepository.deleteById(optionalCar.get().getId());
        return "Car deleted";
    }

//    Update Car

    public void updateCar(Long car_id , CarRequestModel carRequestModel) throws CarNotExist{
        Optional<Car> optionalCar = carRepository.findById(car_id);
        optionalCar.orElseThrow(()-> new CarNotExist());
        Car updatedCar = optionalCar.get();
        updatedCar.updateCar(carRequestModel);
        carRepository.save(updatedCar);
    }
}



