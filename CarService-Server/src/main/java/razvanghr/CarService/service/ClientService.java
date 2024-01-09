package razvanghr.CarService.service;


import org.springframework.stereotype.Service;
import razvanghr.CarService.exception.ClientNotExist;
import razvanghr.CarService.exception.ClientsNotFound;
import razvanghr.CarService.model.Client;
import razvanghr.CarService.model.ClientRequestModel;
import razvanghr.CarService.repository.CarRepository;
import razvanghr.CarService.repository.ClientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    private final ClientRepository clientRepository;
    private  final CarRepository carRepository;


    public ClientService(ClientRepository clientRepository, CarRepository carRepository) {
        this.clientRepository = clientRepository;
        this.carRepository = carRepository;
    }

//    Add Client
    public String addClient(ClientRequestModel clientRequestModel){
        Client client = new Client(clientRequestModel.getFirstName() , clientRequestModel.getLastName());
        clientRepository.save(client);
        return "Client added in database";
    }

//    Delete Client

    public void deleteClient(Long client_id) throws ClientNotExist {
        Optional<Client> optionalClient = clientRepository.findById(client_id);

        if(optionalClient.isEmpty()){
            throw new ClientNotExist();
        }

        clientRepository.deleteById(optionalClient.get().getId());
    }


//    Read Client

    public Client readClient(Long client_id) throws ClientNotExist{
        Optional<Client> optionalClient = clientRepository.findById(client_id);

        if(optionalClient.isEmpty()){
            throw new ClientNotExist();
        }

       return optionalClient.get();
    }


//    Update Client

    public Client updateClient(Long client_id , ClientRequestModel clientRequestModel) throws ClientNotExist{
        Optional<Client> optionalClient = clientRepository.findById(client_id);

        if(optionalClient.isEmpty()) {
            throw new ClientNotExist();
        }
        Client updateClient = optionalClient.get();
        updateClient.setFirstName(clientRequestModel.getFirstName());
        updateClient.setLastName(clientRequestModel.getLastName());
        clientRepository.save(updateClient);
        return updateClient;
    }

    public List<Client> getAllClients() throws ClientsNotFound {
        List<Client> listOptional = clientRepository.findAll();

        if (listOptional.isEmpty()) {
            throw  new ClientsNotFound();
        }

        return listOptional;
    }
}
