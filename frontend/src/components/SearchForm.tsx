import React, { useState } from 'react';

const SearchForm = () => {
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState('5000'); // meters
  const [cuisine, setCuisine] = useState('');

  const handleUseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `${position.coords.latitude},${position.coords.longitude}`;
        setLocation(coords);
      },
      (error) => {
        alert('Could not get current location.');
        console.error(error);
      }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, radius, cuisine });
    // TODO: Call Google Places API here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <label>
        📍 Location
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter address or lat,lng"
          className="w-full p-2 border rounded"
        />
        <button type="button" onClick={handleUseCurrentLocation} className="text-sm mt-1 underline text-blue-600">
          Use current location
        </button>
      </label>

      <label>
        📏 Radius (miles)
        <select value={radius} onChange={(e) => setRadius(e.target.value)} className="w-full p-2 border rounded">
          <option value="1609">1 mile</option>
          <option value="3218">2 miles</option>
          <option value="5000">3 miles</option>
          <option value="8046">5 miles</option>
        </select>
      </label>

      <label>
        🍽️ Cuisine
        <input
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="e.g. sushi, pho, tacos"
          className="w-full p-2 border rounded"
        />
      </label>

      <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:opacity-80">
        Find Restaurants
      </button>
    </form>
  );
};

export default SearchForm;
