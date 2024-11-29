import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './services/weatherService';

const App = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (city) => {
        setLoading(true);
        try {
            const data = await fetchWeather(city);
            setWeather(data);
        } catch (error) {
            alert('City not found or an error occurred!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-600 flex flex-col items-center justify-center p-4">
            <h1 className="text-yellow-200 text-4xl font-bold mb-8">Weather Forecast</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p className="text-yellow-100 mt-4">Loading weather data...</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
};

export default App;
