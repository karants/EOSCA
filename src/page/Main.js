import APIs from '../configs/API_URL';
import CesiumMap from '../components/CesiumMap';
import SatelliteSearch from '../components/SatelliteSearch';
import RiskAssessmentTable from '../components/RiskAssessmentTable';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Main = () => {
    const [satellites, setSatellites] = useState([]);
    const [showSearchBox, setShowSearchBox] = useState(true);
    const [CZML, setCZML] = useState([]);
    const [selectedSatellite, setSelectedSatellite] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [satelliteTitle, setSatelliteTitle] = useState(null);

    useEffect(() => {
        const fetchSatellites = async () => {
            try {
                const response = await fetch(APIs.satellite_list, { method: "GET" });
                const data = await response.json();
                setSatellites(data);
            } catch (error) {
                alert('Error fetching satellite data:', error);
            }
        };

        fetchSatellites();
    }, []);

    const getSearchResult = (czml_result) => {
        setCZML(czml_result);
    }

    return (
        <div className='container-fluid' style = {{ backgroundColor : "white"}}>
            <div className="row">
                <div className='col-md-8 col-12' style={{ padding: 0 }}>
                    <CesiumMap CZML={CZML} />
                </div>
                <div className='col-md-4 col-12'>
                    <fieldset disabled={isLoading || isRefreshing}>
                        <div>
                            <div className='d-flex mb-3'>
                                <Button
                                    onClick={() => {
                                        setShowSearchBox(true);
                                        setSelectedSatellite(null);
                                    }}
                                    variant={showSearchBox ? 'primary' : 'outline-primary'}
                                    className="mt-2"
                                >
                                    Search Satellite
                                </Button>
                                <Button
                                    onClick={() => setShowSearchBox(false)}
                                    variant={!showSearchBox ? 'primary' : 'outline-primary'}
                                    disabled={!selectedSatellite}
                                    className="mt-2"
                                >
                                    {isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null}
                                    Risk Assessment Table
                                </Button>
                            </div>
                            {showSearchBox ? (
                                <SatelliteSearch
                                    satellites={satellites}
                                    getSearchResult={getSearchResult}
                                    setSelectedSatellite={setSelectedSatellite}
                                    setSatelliteTitle={setSatelliteTitle}
                                />
                            ) : (
                                <RiskAssessmentTable selectedSatellite={selectedSatellite} CZML={CZML} setCZML={setCZML} setIsLoading={setIsLoading} setIsRefreshing={setIsRefreshing} />
                            )}
                        </div>
                    </fieldset>
                </div>
            </div>
            {satelliteTitle ? <div style={{ position: 'absolute', top: '57px', left: '0px', backgroundColor: '#4a6ba1', color: 'white', width: '120px', padding: '10px' }}>{satelliteTitle}</div> : null}
        </div>
    );
}

export default Main;
