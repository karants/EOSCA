import React, { useEffect, useState } from 'react';
import APIs from '../configs/API_URL';
import '../css/RiskAssessmentTable.css'
import { Button } from 'react-bootstrap';

const RiskAssessmentTable = ({ selectedSatellite, updateCZML, setIsLoading }) => {
  const [riskData, setRiskData] = useState([]);
  const [disableRefresh, setDisableRefresh] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);

  useEffect(() => {
    async function getRiskAssessmentData() {
      try {
        let form_data = new FormData();
        form_data.append('satid', selectedSatellite);

        setIsLoading(true);
        setDisableRefresh(true);
        let response = await fetch(APIs.riskassessment, { method: 'post', body: form_data });
        let data = await response.json();
        setIsLoading(false);
        setDisableRefresh(false);

        let risk_assessment_tabledata = data.risk_assessment_tabledata;
        let updated_czml = data.updated_czml;
        updateCZML(updated_czml);
        setRiskData(risk_assessment_tabledata);


      } catch (e) {
        console.log(e);
      }
    }


    getRiskAssessmentData();
  }, []);

  const handleRefreshDebris = () => {
    setRefreshLoading(true);
    console.log('hello world');
    setRefreshLoading(false);
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
