"use client";
import { useState } from "react";
import LocationInput from "@/components/LocationInput";

export default function HomePage() {
  const [radius, setRadius] = useState("5000"); // meters
  const [cuisine, setCuisine] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [location, setLocation] = useState("");

  const handleUseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
        setLocation(coords);
      },
      (err) => {
        alert("Failed to get location");
        console.error(err);
      }
    );
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:5001/api/places?location=${location}&radius=${radius}&cuisine=${cuisine}`
      );
      const data = await res.json();
      setResults(data.results);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        🍴 BiteTok – Find food near you
      </h1>
      <form
        onSubmit={handleSearch}
        className="max-w-md mx-auto space-y-4 bg-white p-4 rounded shadow"
      >
        <div>
          <label className="block text-sm font-medium">📍 Location</label>
          <LocationInput
            onLocationSelect={({ lat, lng }) => {
              const locString = `${lat},${lng}`;
              setLocation(locString);
            }}
          />
          <button
            type="button"
            onClick={handleUseCurrentLocation}
            className="text-sm text-blue-600 underline mt-1"
          >
            Use current location
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium">📏 Radius</label>
          <select
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="1609">1 mile</option>
            <option value="3218">2 miles</option>
            <option value="5000">3 miles</option>
            <option value="8046">5 miles</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">🍽️ Cuisine</label>
          <input
            className="w-full p-2 border rounded"
            placeholder="e.g. sushi, pho, tacos"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
        >
          Find Restaurants
        </button>
      </form>

      <section className="mt-10 max-w-3xl mx-auto">
        {results.length > 0 && (
          <ul className="space-y-4">
            {results.map((place, index) => (
              <li key={index} className="p-4 bg-white rounded shadow">
                <h2 className="text-lg font-semibold">{place.name}</h2>
                <p>{place.vicinity}</p>
                {place.rating && (
                  <p>
                    ⭐ {place.rating} ({place.user_ratings_total} reviews)
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
