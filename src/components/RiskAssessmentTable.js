import React, { useEffect, useState } from 'react';
import APIs from '../configs/API_URL';
import 'bootstrap/dist/css/bootstrap.min.css';

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

        let temp_risk_assessment = [];
        for (let i = 0; i < (risk_assessment_tabledata.length < 10 ? risk_assessment_tabledata.length : 10); i++) {
          temp_risk_assessment.push(risk_assessment_tabledata[i]);
        }

        setRiskData(temp_risk_assessment);


      } catch (e) {
        console.log(e);
      }
    }


    getRiskAssessmentData();
  }, []);


  return (
    <div className="container">
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
              <td>{risk['Closest Approach Distance (km)']}</td>
              <td>{risk['Object']}</td>
              <td>{risk['Probability of Collision']}</td>
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
