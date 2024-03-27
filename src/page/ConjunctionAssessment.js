import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ConjunctionAssessment = () => {
  return (
    <Container>
      <h2 className="mt-5 mb-4">Conjunction Assessment in Space Operations</h2>
      
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>NASA's Best Practices Handbook</Card.Title>
          <Card.Text>
            NASA's Spacecraft Conjunction Assessment and Collision Avoidance Best Practices Handbook outlines a structured approach to on-orbit collision avoidance, consisting of three phases:
            <ul style = {{textAlign: 'left'}}>
              <li><strong>Conjunction Assessment Screening:</strong> Identifying close approaches between a primary satellite and other space objects.</li>
              <li><strong>Conjunction Risk Assessment:</strong> Examining close approaches to determine collision risk and the need for mitigation.</li>
              <li><strong>Conjunction Mitigation:</strong> Developing and executing mitigation actions to reduce collision risk.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card>
        <Card.Body>
          <Card.Title>EOSCA's Solution Methodology</Card.Title>
          <Card.Text style = {{textAlign: 'left'}}>
            EOSCA (Earth Orbit Spacecraft Collision Avoidance) focuses on performing the first two phases of conjunction assessment: screening and risk assessment. Leveraging a web application, EOSCA utilizes standardized astrodynamics algorithms, notably the SGP4 model, to interpret Two-Line Element set (TLE) data obtained from space-track.org. This data, backed by the 18th Space Defense Squadron of the US government, provides near real-time positional and velocity information for both satellites and debris objects. The 18th Space Control Squadron (SPCS) is responsible for providing space situational awareness and tracking objects in orbit to prevent potential collisions. 
          </Card.Text>
          <Card.Text style = {{textAlign: 'left'}}>
          The application predicts the future positions and trajectories of these objects, refining state vectors with observational data to account for uncertainties. It computes the Euclidean distance between objects to determine collision probability. A risk assessment algorithm categorizes potential encounters into various risk levels, ranging from low to critical, based on collision probability.
          </Card.Text>
          <Card.Text style = {{textAlign: 'left'}}>
          The Euclidean distance is calculated over a 24-hour period and incorporates the predicted positions of objects during this time frame. The risk assessment algorithm categorizes potential encounters into various risk levels, ranging from low to critical, based on collision probability.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <h3 className="mt-4 mb-3">Key Components of EOSCA's Approach:</h3>
      <ul style = {{textAlign: 'left'}}>
        <li><strong>SGP4 Model:</strong> Utilized to interpret TLE data and predict object trajectories.</li>
        <li><strong>State Vector Refinement:</strong> Incorporates observational data to improve accuracy and account for uncertainties.</li>
        <li><strong>Collision Probability Computation:</strong> Calculates the likelihood of collision based on object trajectories.</li>
        <li><strong>Risk Assessment Algorithm:</strong> Categorizes potential encounters into different risk levels.</li>
        <li><strong>Web Application Interface:</strong> Provides users with access to real-time data and risk assessments.</li>
      </ul>
      
      <p className="mt-4" style = {{textAlign: 'left'}}>
        Conjunction assessment is essential for safeguarding assets in space and maintaining the integrity of space operations. By implementing robust methodologies and leveraging advanced technologies, solutions like EOSCA play a crucial role in enhancing space situational awareness and mitigating collision risks, contributing to the sustainability of space activities.
      </p>
    </Container>
  );
}

export default ConjunctionAssessment;
