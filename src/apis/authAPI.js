import axios from "axios"

export const basicAuthenticate = data => {
    return axios.post('https://stage-api.serw.io/v1/auth/local/login', data);
}