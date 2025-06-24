'use client';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';
import { useRef, useState } from 'react';

const libraries = ['places'];

type Props = {
  onLocationSelect: (coords: { lat: number; lng: number }) => void;
};

export default function LocationInput({ onLocationSelect }: Props) {
  const [input, setInput] = useState('');
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!, // put this in your .env.local
    libraries,
  });

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (!place?.geometry || !place.geometry.location) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    onLocationSelect({ lat, lng });
    setInput(place.formatted_address || place.name || '');
  };

  return isLoaded ? (
    <Autocomplete
      onLoad={(auto) => (autocompleteRef.current = auto)}
      onPlaceChanged={handlePlaceChanged}
    >
      <input
        className="w-full p-2 border rounded"
        placeholder="Search for a city, landmark, or address"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Autocomplete>
  ) : (
    <p>Loading location input…</p>
  );
}
