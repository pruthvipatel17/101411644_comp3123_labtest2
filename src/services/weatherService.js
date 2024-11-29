import axios from 'axios';

const API_KEY = 'c03e017f1963a6055eddfde729acb050'; // Replace with your actual API key
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
    try {
        // Properly use backticks for string interpolation
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
