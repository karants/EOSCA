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
    const [riskData, setRiskData] = useState([{
        time: '2020-02-02',
        object: 'dd-sss',
        probability: '80%',
        severity: 'www'
    }]);
    const [selectedSatellite, setSelectedSatellite] = useState(null);

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
        setShowSearchBox(false);
    }

    return (
        <div className='container' style={{ width: '100%', padding: 0, margin: 0 }}>
            <div className="row">
                <div className='col-md-8 col-12'>
                    <CesiumMap CZML={CZML} />
                </div>
                <div className='col-md-4 col-12'>
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
                            <RiskAssessmentTable riskData={riskData} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
