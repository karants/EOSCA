import React, { useEffect, useState } from 'react';
import APIs from '../configs/API_URL';
import '../css/RiskAssessmentTable.css'
import { Button } from 'react-bootstrap';

const RiskAssessmentTable = ({ selectedSatellite, CZML, setCZML, setIsLoading, setIsRefreshing }) => {
  const [riskData, setRiskData] = useState([]);
  const [disableRefresh, setDisableRefresh] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);

  useEffect(() => {
    async function getRiskAssessmentData() {
      setIsLoading(true);
      setDisableRefresh(true);

      try {
        let form_data = new FormData();
        form_data.append('satid', selectedSatellite);

        let response = await fetch(APIs.riskassessment, { method: 'post', body: form_data });
        let data = await response.json();

        let risk_assessment_tabledata = data.risk_assessment_tabledata;
        let updated_czml = data.updated_czml;

        setCZML([...CZML, ...updated_czml]);
        setRiskData(risk_assessment_tabledata);


      } catch (e) {
        console.log(e);
      }

      setIsLoading(false);
      setDisableRefresh(false);
    }


    getRiskAssessmentData();
  }, []);

  const handleRefreshDebris = async () => {
    setRefreshLoading(true);
    setIsRefreshing(true);

    try {

      let SatelliteID = selectedSatellite;
      let DebrisIDs = [];
      riskData.forEach((item) => {
        DebrisIDs.push(item['Object']);
      });

      let response = await fetch(APIs.reassess_debris, { method: 'post', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({ SatelliteID, DebrisIDs }) });
      let data = await response.json();

      setRiskData(data.risk_assessment_tabledata);
      setCZML(data.updated_czml);

    } catch (e) {
      console.log(e);
    }


    setRefreshLoading(false);
    setIsRefreshing(false);
  }

  return (
    <div className="container risk-assessment-table">
      <Button
        className='refresh-debris-btn'
        onClick={handleRefreshDebris}
        disabled={disableRefresh}
        variant='outline-info'
      >
        {refreshLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null}
        Refresh Debris
      </Button>

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Closest Approach Distance (km)</th>
            <th>Object</th>
            <th>Probability of Collision</th>
            <th>Risk Severity</th>
            <th>Time of Closest Approach</th>
          </tr>
        </thead>
        <tbody>
          {riskData.map((risk, index) => (
            <tr key={index}>
              <td>{Math.round(risk['Closest Approach Distance (km)'] * 100000) / 100000}</td>
              <td>{risk['Object']}</td>
              <td>{Math.round(risk['Probability of Collision'] * 100000) / 100000}</td>
              <td>{risk['Risk Severity']}</td>
              <td>{risk['Time of Closest Approach']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskAssessmentTable;
