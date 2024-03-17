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

    const updateCZML = (new_czml) => {
        setCZML([...CZML, ...new_czml]);
    }

    const getSearchResult = (czml_result) => {
        setCZML(czml_result);
        setShowSearchBox(false);
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className='col-md-8 col-12'>
                    <CesiumMap CZML={CZML} />
                </div>
                <div className='col-md-4 col-12'>
                    <fieldset disabled={isLoading}>
                        <div>
                            <div className='d-flex justify-content-between mb-3'>
                                <Button
                                    onClick={() => {
                                        setShowSearchBox(true);
                                        setSelectedSatellite(null);
                                    }}
                                    variant={showSearchBox ? 'primary' : 'outline-primary'}
                                >
                                    Search Satellite
                                </Button>
                                <Button
                                    onClick={() => setShowSearchBox(false)}
                                    variant={!showSearchBox ? 'primary' : 'outline-primary'}
                                    disabled={!selectedSatellite}
                                >
                                    {isLoading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null}
                                    Risk Assessment Table
                                </Button>
                            </div>
                            {showSearchBox ? (
                                <SatelliteSearch
                                    satellites={satellites}
                                    getSearchResult={getSearchResult}
                                    setSelectedSatellite={setSelectedSatellite}
                                />
                            ) : (
                                <RiskAssessmentTable selectedSatellite={selectedSatellite} updateCZML={updateCZML} setIsLoading={setIsLoading} />
                            )}
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}

export default Main;
