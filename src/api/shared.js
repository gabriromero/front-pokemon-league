import axios from 'axios'
import {API_URL} from '@/helpers/generalHelper'

// Endpoints
const myselfProfileEndpointApi = axios.create({
    baseURL: API_URL
})

// Methods
export const getMyselfProfile = async (access_token) => {

    const profile = await myselfProfileEndpointApi.get('/myself/profile',{
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    return profile
}

export const getActualJornada = async () => {

    const jornada_actual = await myselfProfileEndpointApi.get('/jornada-actual');

    return jornada_actual
}