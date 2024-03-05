import APIs from '../configs/API_URL';
import CesiumMap from '../components/CesiumMap';
import SatelliteSearch from '../components/SatelliteSearch';
import RiskAssessmentTable from '../components/RiskAssessmentTable';
import '../css/Main.css'
import { useState, useEffect } from 'react';

const Main = () => {

    const [satellites, setSatellites] = useState([]);
    const [showSearchBox, setShowSearchBox] = useState(true);
    const [showRiskAssessment, setShowRiskAssessment] = useState(false);
    const [CZML, setCZML] = useState([]);
    const [CurrentSatelliteId, setCurrentSatelliteId] = useState('');

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

    const getSearchResult = (czml_result, satellite_id) => {
        setCZML(czml_result);
        setCurrentSatelliteId(satellite_id);
        // setShowSearchBox(false);
    }

    const renderSearchBox = () => {
        setShowSearchBox(true);
        setShowRiskAssessment(false);
    }

    const renderRiskAssessment = () => {
        setShowSearchBox(false);
        setShowRiskAssessment(true);
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8 col-12">
                    <CesiumMap CZML={CZML} />
                </div>
                <div className="col-md-4 col-12">
                    <div className='toggle-container'>
                        <button type='button' className={'btn ' + (showSearchBox ? 'btn-secondary' : 'btn-outline-secondary')} onClick={renderSearchBox}>Search Satellite</button>
                        <button type='button' className={'btn ' + (showRiskAssessment ? 'btn-secondary' : 'btn-outline-secondary')} onClick={renderRiskAssessment}>Risk Assessment</button>
                    </div>
                    {showSearchBox ? <SatelliteSearch satellites={satellites} getSearchResult={getSearchResult} /> : null}
                    {showRiskAssessment ? <RiskAssessmentTable riskData={riskData} /> : null}
                </div>
            </div>
        </div>
    );
}

export default Main;