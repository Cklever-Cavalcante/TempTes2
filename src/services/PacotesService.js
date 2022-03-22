import axios from 'axios';

const PACOTES_API_BASE_URL = "http://localhost:8080/api/v1/pacotes";

class PacotesService {

    getPacotes() {
        return axios.get(PACOTES_API_BASE_URL);
    }

    createPacotes(pacotes) {
        return axios.post(PACOTES_API_BASE_URL, pacotes);
    }

    getPacotesById(pacotesId_pacote) {
        return axios.get(PACOTES_API_BASE_URL + '/' + pacotesId_pacote);
    }

    updatePacotes(pacotes, pacotesId_pacote) {
        return axios.put(PACOTES_API_BASE_URL + '/' + pacotesId_pacote, pacotes);
    }

    deletePacotes(pacotesId_pacote) {
        return axios.delete(PACOTES_API_BASE_URL + '/' + pacotesId_pacote);
    }
}

export default new PacotesService()