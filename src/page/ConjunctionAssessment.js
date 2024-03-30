import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardHeader } from '@mui/material';

const ConjunctionAssessment = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2">Conjunction Assessment in Space Operations</Typography>
      <p></p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ backgroundColor: "#99A3B1", height: '100%', textAlign: "left" }} className="mb-4">
            <CardHeader title="NASA's Best Practices Handbook" />
            <CardContent>
              <Typography variant="body1">
                NASA's Spacecraft Conjunction Assessment and Collision Avoidance Best Practices Handbook outlines a structured approach to on-orbit collision avoidance, consisting of three phases:
              </Typography>
              <p></p>
              <ul style={{ textAlign: 'left' }}>
                <li><strong>Conjunction Assessment Screening:</strong> Identifying close approaches between a primary satellite and other space objects.</li>
                <li><strong>Conjunction Risk Assessment:</strong> Examining close approaches to determine collision risk and the need for mitigation.</li>
                <li><strong>Conjunction Mitigation:</strong> Developing and executing mitigation actions to reduce collision risk.</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ backgroundColor: "#99A3B1", height: '100%', textAlign: "left" }}>
            <CardHeader title="EOSCA's Solution Methodology" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1">
                    EOSCA (Earth Orbit Spacecraft Collision Avoidance) focuses on performing the first two phases of conjunction assessment: screening and risk assessment. Leveraging a web application, EOSCA utilizes standardized astrodynamics algorithms, notably the SGP4 model, to interpret Two-Line Element set (TLE) data obtained from space-track.org. This data, backed by the 18th Space Defense Squadron of the US government, provides near real-time positional and velocity information for both satellites and debris objects. The 18th Space Control Squadron (SPCS) is responsible for providing space situational awareness and tracking objects in orbit to prevent potential collisions.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1" style={{ textAlign: 'left' }}>
                    The application predicts the future positions and trajectories of these objects, refining state vectors with observational data to account for uncertainties. It computes the Euclidean distance between objects to determine collision probability. A risk assessment algorithm categorizes potential encounters into various risk levels, ranging from low to critical, based on collision probability.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography>
                    The Euclidean distance is calculated over a 24-hour period and incorporates the predicted positions of objects during this time frame. The risk assessment algorithm categorizes potential encounters into various risk levels, ranging from low to critical, based on collision probability.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "#99A3B1", height: '100%' }}>
            <CardContent>
              <Typography variant="h3" className="mt-4 mb-3">Key Components of EOSCA's Approach:</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1" style={{ textAlign: 'left' }}>
                    <strong>SGP4 Model:</strong> Utilized to interpret TLE data and predict object trajectories.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1" style={{ textAlign: 'left' }}>
                    <strong>State Vector Refinement:</strong> Incorporates observational data to improve accuracy and account for uncertainties.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1" style={{ textAlign: 'left' }}>
                    <strong>Collision Probability Computation:</strong> Calculates the likelihood of collision based on object trajectories.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1" style={{ textAlign: 'left' }}>
                    <strong>Risk Assessment Algorithm:</strong> Categorizes potential encounters into different risk levels.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body1" style={{ textAlign: 'left' }}>
                    <strong>Web Application Interface:</strong> Provides users with access to real-time data and risk assessments.
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" className="mt-4" style={{ textAlign: 'left' }}>
                Conjunction assessment is essential for safeguarding assets in space and maintaining the integrity of space operations. By implementing robust methodologies and leveraging advanced technologies, solutions like EOSCA play a crucial role in enhancing space situational awareness and mitigating collision risks, contributing to the sustainability of space activities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ConjunctionAssessment;
