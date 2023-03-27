import axios from 'axios'
import {API_URL} from '@/helpers/generalHelper'

// Endpoints
const fakeEndpointApi = axios.create({
    baseURL: API_URL + '/fake/classification'
})

const matchesEndpointApi = axios.create({
    baseURL: API_URL + '/fake/matches'
})

// Methods
export const getFakePlayers = async() =>{
 
    const players = fakeEndpointApi.get()

    return players
}

export const getMatches = async() =>{
    const matches = matchesEndpointApi.get()
    return matches
}