import React, { useRef } from 'react';
import '../css/SatelliteSearch.css'

const SatelliteSearch = (props) => {

  const searchRef = useRef();

  const handleSearch = (e) => {
    props.getSearchResult(searchRef.current.value.toLowerCase());
  };

  return (
    <div className='SatelliteSearchBox'>
      <h1 lass="display-6">Satellite Search</h1>
      <div className="input-group mb-3">
        <input type="text" placeholder="Search for a satellite..." className='form-control' ref={searchRef} />
        <button type='button' className='btn btn-outline-secondary' onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SatelliteSearch;
