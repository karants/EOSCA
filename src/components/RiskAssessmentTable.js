import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RiskAssessmentTable = ({ riskData }) => {
  return (
    <div className="container">
      <h2>Risk Assessment Table</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Time of Closest Approach</th>
            <th>Object</th>
            <th>Probability of Collision</th>
            <th>Risk Severity</th>
          </tr>
        </thead>
        <tbody>
          {riskData.map((risk, index) => (
            <tr key={index}>
              <td>{risk.time}</td>
              <td>{risk.object}</td>
              <td>{risk.probability}</td>
              <td>{risk.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskAssessmentTable;
