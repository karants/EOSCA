import React, { useState, useEffect } from 'react';

const SatelliteSearch = () => {
  const [satellites, setSatellites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSatellites, setFilteredSatellites] = useState([]);

  useEffect(() => {
    const fetchSatellites = async () => {
      try {
        const response = await fetch('API_URL');// Need to replace this with Satellite API
        const data = await response.json();
        setSatellites(data);
        setFilteredSatellites(data);
      } catch (error) {
        console.error('Error fetching satellite data:', error);
      }
    };

    fetchSatellites();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = satellites.filter((satellite) =>
      satellite.name.toLowerCase().includes(searchTerm)
    );

    setFilteredSatellites(filtered);
  };

  return (
    <div>
      <h1>Satellite Search</h1>
      <input
        type="text"
        placeholder="Search for a satellite..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {filteredSatellites.map((satellite) => (
          <li key={satellite.id}>{satellite.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SatelliteSearch;
