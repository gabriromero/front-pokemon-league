import axios from 'axios'
import {API_URL} from '@/helpers/generalHelper'

// Endpoints
const fakeEndpointApi = axios.create({
    baseURL: API_URL + '/fake/players'
})

// Methods
export const getFakePlayers = async() =>{
 
    const players = fakeEndpointApi.get()

    return players
}