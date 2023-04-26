import axios from 'axios'
import {API_URL} from '@/helpers/apiHelper'

export const putProfilePic = async (profilePic,access_token) => {
    const data = {
        profile_pic : profilePic 
      };
    const config = {
        headers: {
            Authorization: `Bearer ${access_token}`, 
          },
    }
    const response  = await axios.put(API_URL + '/myself/profile',data,config);
}

export const getAvailableSkins = async (num_skins) => {
  const data = {
    num_skins: num_skins 
  };

  const availableSkins = await axios.get(`${API_URL}/available-skins`, { params: data });

  return availableSkins.data;
}