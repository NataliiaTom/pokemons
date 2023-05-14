import axios from "axios";

const base_url = "https://pokeapi.co/api/v2"

const executeGetRequest = (url) => {
    // console.log(url);
    return axios.get(url)
        .then(response => {
            // console.log(response.data)
            return response.data;
        })
        .catch(console.error);
}

const getListOfPokemons = (limit = 12, offset = 0) => {
    return executeGetRequest(`${base_url}/pokemon/?limit=${limit}&offset=${offset}`);
}

const getPokenomData = (id) => {
    return executeGetRequest(`${base_url}/pokemon/${id}/`);
}

export { getListOfPokemons, getPokenomData };