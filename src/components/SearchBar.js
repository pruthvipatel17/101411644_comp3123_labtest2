import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white rounded-full shadow-md px-4 py-2 max-w-md w-full"
        >
            <input
                type="text"
                placeholder="city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-grow outline-none text-gray-700 px-4"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;