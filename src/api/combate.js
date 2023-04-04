import axios from 'axios'
import { getJornada } from '@/helpers/generalHelper'
import { API_URL, API_URL_LOCAL } from '@/helpers/generalHelper'

// Endpoints
const myMatchesEndpointApi = axios.create({
    baseURL: API_URL_LOCAL
})


// Methods
export const getMyMatches = async (access_token) => {
    const myMatches = await axios.get(API_URL_LOCAL + '/myself/matches', {

        params: {
            jornada: getJornada()
            //jornada: 2
        },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
        }
    });
    return myMatches;
}

export const postMarkResultMyMatches = async (access_token, player_name_1, player_name_2, player_winner) => {
    const markResultMyMatches = await axios.post(API_URL_LOCAL + '/myself/mark-result', {
        jornada: getJornada(),
        //jornada: 2,
        player_1_username: player_name_1,
        player_2_username: player_name_2,
        player_winner_username: player_winner
    }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
        }
    });
    return markResultMyMatches;
}
