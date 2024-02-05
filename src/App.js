import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import APIs from './configs/API_URL';
import CesiumMap from './components/CesiumMap';
import SatelliteSearch from './components/SatelliteSearch';
import { useState, useEffect } from 'react';

const App = () => {

  const [satellites, setSatellites] = useState([]);
  const [filteredSatellites, setFilteredSatellites] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);

  useEffect(() => {
    const fetchSatellites = async () => {
      try {
        /*
        const response = await fetch('API_URL');// Need to replace this with Satellite API
        const data = await response.json();
        setSatellites(data);
        setFilteredSatellites(data);
        */
      } catch (error) {
        console.error('Error fetching satellite data:', error);
      }
    };

    fetchSatellites();
  }, []);

  const getSearchResult = (searchInput) => {
    const filtered = satellites.filter((satellite) =>
      satellite.name.toLowerCase().includes(searchInput)
    );
    setFilteredSatellites(filtered);



    setShowSearchBox(false);
  }

  return (
    <div className="App">
      <CesiumMap />
      {showSearchBox ? <SatelliteSearch getSearchResult={getSearchResult} /> : null}

      <ul>
        {filteredSatellites.map((satellite) => (
          <li key={satellite.id}>{satellite.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
