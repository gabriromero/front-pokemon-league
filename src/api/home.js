import axios from 'axios'
import {API_URL} from '@/helpers/generalHelper'

// Endpoints
const fakeEndpointApi = axios.create({
    baseURL: API_URL + '/classification'
})

const loginEndpointApi = axios.create({
    baseURL: API_URL
})
    
const matchesEndpointApi = axios.create({
    baseURL: API_URL + '/matches'
})

// Methods
export const getFakePlayers = async() =>{
 
    const players = fakeEndpointApi.get()

    return players
}

export const getLoginResponse = async(credentials) =>{

    if(credentials.includes('#')){
        const [username, password] = credentials.split('#');
        const loginResponse = loginEndpointApi.post('/login',{
            username: username,
            password: password
        })
        return loginResponse
    }

    return false
}

export const getMatches = async() =>{
    const matches = matchesEndpointApi.get()
    return matches
}