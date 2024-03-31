import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, createTheme, ThemeProvider, Tooltip } from '@mui/material';
import APIs from '../configs/API_URL';
import '../css/RiskAssessmentTable.css';

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

  // Define a dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="container risk-assessment-table">
      <Tooltip title={<span> The enhanced precision button further performs a conjunction assessment for the top 50 debris objects of the selected satellite. This function performs the same calculation, and re-populates the graphic and risk assessment table with the new results. The position of each debris object is calculated in one-second intervals during a 24-hour time period.</span>
  }
  placement="top"
>
        <Button
          className='refresh-debris-btn'
          onClick={handleRefreshDebris}
          disabled={disableRefresh}
          variant='outline-info'
          style={{ marginTop: '2px', backgroundColor: '#007bff', borderColor: '#007bff', color: 'white', fontWeight: 'bold' }}
        >
          {refreshLoading ? <CircularProgress size={20} /> : null}
          Enhance Precision
        </Button>
      </Tooltip>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Closest Approach Distance (km)</TableCell>
                <TableCell>Object ID</TableCell>
                <TableCell>Probability of Collision</TableCell>
                <TableCell>Risk Severity</TableCell>
                <TableCell>Time of Closest Approach (UTC)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {riskData.map((risk, index) => (
                <TableRow key={index}>
                  <TableCell>{Math.round(risk['Closest Approach Distance (km)'] * 100000) / 100000}</TableCell>
                  <TableCell>{risk['Object']}</TableCell>
                  <TableCell>{Math.round(risk['Probability of Collision'] * 100000) / 100000}</TableCell>
                  <TableCell>{risk['Risk Severity']}</TableCell>
                  <TableCell>{risk['Time of Closest Approach']}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
};

export default RiskAssessmentTable;
