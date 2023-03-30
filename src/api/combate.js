import axios from 'axios'
import { API_URL, API_URL_LOCAL } from '@/helpers/generalHelper'

// Endpoints
const myMatchesEndpointApi = axios.create({
    baseURL: API_URL_LOCAL
})

// Methods
export const getMyMatches = async (access_token) => {    
    const myMatches = await axios.get(API_URL_LOCAL+'/myself/matches', {
        data:{
            jornada: 2
        },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
        }
    });
    return myMatches; 
}
