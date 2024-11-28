import axios from 'axios';

const API_KEY = 'd4db740829da769235d7da2e74fc1d7e';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
