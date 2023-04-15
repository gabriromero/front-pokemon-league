import axios from 'axios'
import {API_URL, API_PKM} from '@/helpers/apiHelper'

// Methods
export const getPlayers = async() =>{
 
    const players = await axios.get(API_URL + '/classification')

    return players
}

export const getLoginResponse = async(credentials) =>{

    if(credentials.includes('#')){
        const [username, password] = credentials.split('#');
        const loginResponse = axios.post(API_URL + '/login',{
            username: username,
            password: password
        })
        return loginResponse
    }

    return false
}

export const getMatches = async() =>{
    const matches = axios.get(API_URL + '/matches')

    return matches
}

export const getApiPokemonList = async(maxPokedex) =>{
    const pokemon = axios.get(API_PKM + `?limit=${maxPokedex}`)

    return pokemon
}

export const getApiPokemonData = async(pokemonSelected) =>{
    const pokemon = axios.get(API_PKM + `/${pokemonSelected}`);

    return pokemon
}