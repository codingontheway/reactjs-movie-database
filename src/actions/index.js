import axios from 'axios'

export const FETCH_DATA = 'fetch_data'

const API_KEY = '74f39b1ccd7e25d3b46666eaf38cf8e6'
const ROOT_URL = 'https://api.themoviedb.org/3/search/movie?api_key='

export function movieList(query) {
    const request = axios.get(`${ROOT_URL}${API_KEY}&language=en-US&query=${query}&include_adult=false`)
    return {
        type: FETCH_DATA,
        payload: request
    }

}
