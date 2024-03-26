import React, { useRef, useState } from 'react';
import APIs from '../configs/API_URL';
import '../css/SatelliteSearch.css';

const SatelliteSearch = (props) => {

  const [filteredSatellites, setFilteredSatellites] = useState([]);
  const searchRef = useRef();

  const handleSearchBoxKeyDown = (e) => {
    let searchInput = searchRef.current.value;
    let satellites = props.satellites;

    let filtered = [];

    if (!searchInput) {
      return setFilteredSatellites([]);
    }

    satellites.forEach(satellite => {
      if (satellite.ObjectName.toLowerCase().includes(searchInput.toLowerCase()) && satellite.ObjectName[0].toLowerCase() === searchInput[0].toLowerCase()) {
        filtered.push(satellite.ObjectName);
      }
    });

    if (filtered.length === 1 && filtered[0].toLowerCase() === searchInput.toLowerCase()) {
      return setFilteredSatellites([]);
    }

    return setFilteredSatellites(filtered);
  }

  const handleRandomSatellite = (e) => {
    let satellites = props.satellites

    if (satellites.length === 0) {
      return searchRef.current.value = '';
    }
    return searchRef.current.value = satellites[Math.floor(Math.random() * satellites.length)].ObjectName;
  }

  const handleSearch = async (e) => {
    let searchInput = searchRef.current.value;
    let satellites = props.satellites

    if (searchInput === '') {
      return alert("Search text can't be blank!");
    }

    searchInput = searchInput.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');
    let object_id = '';

    for (let i = 0; i < satellites.length; i++) {
      if (satellites[i].ObjectName.toLowerCase() === searchInput.toLowerCase()) {
        object_id = satellites[i].ObjectID;
        searchInput = satellites[i].ObjectName;
        break;
      }
    }

    if (object_id === '') {
      return alert("Can't find this satellite, please give another one!");
    }

    try {
      let form_data = new FormData();
      form_data.append('satid', object_id);

      let response = await fetch(APIs.satellite_ephemeris, { method: 'post', body: form_data });
      if (response.status !== 200) {
        return alert('Fail to fetch satellite information, please try again!');
      }

      props.getSearchResult(await response.json());
      props.setSelectedSatellite(object_id);
      props.setSatelliteTitle(searchInput);

    } catch (e) {
      return alert('Fail to fetch satellite information, please try again!');
    }
  };

  return (
    <div className='SatelliteSearchBox'>
      <div className="input-group mb-3">
        <input type="text" placeholder="Search for a satellite..." className='form-control' ref={searchRef} onKeyUp={handleSearchBoxKeyDown} list='potential-satellites' />
        <datalist id='potential-satellites'>
          {
            filteredSatellites.map((satellite, key) => (
              <option key={key} value={satellite} />
            ))
          }
        </datalist>
      </div>
      <div>
        <button type='button' className='btn btn-outline-secondary btn-left' onClick={handleSearch}>Search</button>
        <button type='button' className='btn btn-outline-secondary btn-right' onClick={handleRandomSatellite}>Random Satellite</button>
      </div>
    </div>
  );
};

export default SatelliteSearch;
