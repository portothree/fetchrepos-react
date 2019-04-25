import axios from 'axios'

export const htpp = axios.create({
    baseURL: 'https://api.github.com/'
})