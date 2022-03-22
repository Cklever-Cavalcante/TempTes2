import axios from 'axios';

const DESTINOS_API_BASE_URL = "http://localhost:8080/api/v1/destinos";

class DestinosService {

    getDestinos() {
        return axios.get(DESTINOS_API_BASE_URL);
    }

    createDestinos(destinos) {
        return axios.post(DESTINOS_API_BASE_URL, destinos);
    }

    getDestinosById(destinosId_destino) {
        return axios.get(DESTINOS_API_BASE_URL + '/' + destinosId_destino);
    }

    updateDestinos(destinos, destinosId_destino) {
        return axios.put(DESTINOS_API_BASE_URL + '/' + destinosId_destino, destinos);
    }

    deleteDestinos(destinosId_destino) {
        return axios.delete(DESTINOS_API_BASE_URL + '/' + destinosId_destino);
    }
}

export default new DestinosService()