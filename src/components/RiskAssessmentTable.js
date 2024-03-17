import React, { useEffect, useState } from 'react';
import APIs from '../configs/API_URL';
import '../css/RiskAssessmentTable.css'

const RiskAssessmentTable = ({ selectedSatellite, updateCZML, setIsLoading }) => {
  const [riskData, setRiskData] = useState([]);


  useEffect(() => {
    async function getRiskAssessmentData() {
      try {
        let form_data = new FormData();
        form_data.append('satid', selectedSatellite);

        setIsLoading(true);
        let response = await fetch(APIs.riskassessment, { method: 'post', body: form_data });
        let data = await response.json();
        setIsLoading(false);

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


  return (
    <div className="container risk-assessment-table">
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
