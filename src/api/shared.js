import axios from 'axios'
import {API_URL} from '@/helpers/apiHelper'

// Endpoints
const myselfProfileEndpointApi = axios.create({
    baseURL: API_URL
})

// Methods
export const getMyselfProfile = async (access_token) => {

    const profile = await axios.get(API_URL + '/myself/profile',{
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    return profile
}

export const getActualJornada = async () => {

    const jornada_actual = await axios.get(API_URL + '/jornada-actual');

    return jornada_actual
}