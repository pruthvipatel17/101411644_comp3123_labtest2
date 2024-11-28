import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) onSearch(city);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center bg-gray-700 rounded-full shadow-lg px-4 py-3 w-full max-w-md"
        >
            <input
                type="text"
                placeholder="Search city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-grow bg-transparent text-white placeholder-gray-400 px-4 outline-none"
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition duration-300"
            >
                <FiSearch size={24} />
            </button>
        </form>
    );
};

export default SearchBar;
