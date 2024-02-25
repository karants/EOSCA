import APIs from '../configs/API_URL';
import CesiumMap from '../components/CesiumMap';
import SatelliteSearch from '../components/SatelliteSearch';
import RiskAssessmentTable from '../components/RiskAssessmentTable';
import { useState, useEffect } from 'react';

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

    useEffect(() => {
        const fetchSatellites = async () => {
            try {
                const response = await fetch(APIs.satellite_list, { method: "GET" });// Need to replace this with Satellite API
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
        <div className='container'>
            <div className="row">
                <div className="col-md-8 col-12">
                    <CesiumMap CZML={CZML} />
                </div>
                <div className="col-md-4 col-12">
                    <RiskAssessmentTable riskData={riskData} />
                </div>
            </div>
            {showSearchBox ? <SatelliteSearch satellites={satellites} getSearchResult={getSearchResult} /> : null}
        </div>
    );
}

export default Main;