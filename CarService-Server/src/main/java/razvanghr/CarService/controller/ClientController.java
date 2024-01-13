package razvanghr.CarService.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import razvanghr.CarService.model.ClientRequestModel;
import razvanghr.CarService.model.ClientResponseModel;
import razvanghr.CarService.model.ClientsResponseModel;
import razvanghr.CarService.service.CarService;
import razvanghr.CarService.service.ClientService;

@RestController()
@CrossOrigin
@RequestMapping(path = "api/v1/client")
public class ClientController {


    private final ClientService clientService;
    private final CarService carService;


    public ClientController(ClientService clientService, CarService carService) {
        this.clientService = clientService;
        this.carService = carService;
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getClient(@PathVariable Long id){
        try{
            return ResponseEntity.ok().body(new ClientResponseModel(clientService.readClient(id) , clientService.readClient(id).getCars().size()));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

//
    @PostMapping("/add")
    public  ResponseEntity<String> addClient(@RequestBody ClientRequestModel clientRequestModel){
        try{
            return  ResponseEntity.ok().body(clientService.addClient(clientRequestModel));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }

//    Delete Client
    @DeleteMapping("/delete/{id}")
    public  ResponseEntity<String> deleteClient(@PathVariable Long id){
        try{
            clientService.deleteClient(id);
            return ResponseEntity.ok().body("Client removed");
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

//    Update Client
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateClient(@PathVariable Long id , @RequestBody ClientRequestModel clientRequestModel){
        try{
            return ResponseEntity.ok().body(clientService.updateClient(id , clientRequestModel));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

//    Get All Clients

    @GetMapping("/all")
    public ResponseEntity<?> getAllClients(){
        try{
            ClientsResponseModel clientsResponseModel = new ClientsResponseModel(clientService.getAllClients() , clientService.getAllClients().size() , carService.getAllCars().size());
            return ResponseEntity.ok().body(clientsResponseModel);
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

    @GetMapping("/findByName")
    public ResponseEntity<?> findClientByName(@RequestParam String firstName ,@RequestParam String lastName){
        try{
            return ResponseEntity.ok().body(clientService.searchClientbyName(firstName , lastName));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }
}
