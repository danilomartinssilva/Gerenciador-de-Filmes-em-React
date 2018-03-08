import axios from 'axios';


const api = axios.create({
    baseURL : 'http://localhost:3004/'
});

export const saveSeries = (newSeries) => api.post('series',newSeries);
export const loadSeriesByGenrew = (genre) => api.get('series?genre='+genre)

const apis = {
    loadGenres: () => api.get('genres'),
    saveSeries:saveSeries,
    loadSeriesByGenrew:loadSeriesByGenrew
}

export default apis