import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (error) {
            console.warn('Erro ao buscar na API');
            console.error(error);
        }
    }
}

// Podemos chamar dessa forma sem instanciar, pois temos um método static na classe
Api.getUserInfo('RicardoBaldrez');
Api.getUserInfo('RicardoBaldrez123');