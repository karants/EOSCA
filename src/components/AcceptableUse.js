import React from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';

const AcceptableUsagePolicy = () => {
  return (
    <Container>
      <h1 className="mt-5 mb-4">Acceptable Usage Policy</h1>
      
      <h2>Purpose</h2>
      <p>EOSCA is designed to promote space situational awareness and mitigate collision risks in near-Earth orbit. The acceptable usage policy was created to ensure the safe, responsible, and ethical use of the EOSCA web application by all users.</p>
      
      <h2>User Responsibilities</h2>
      <p>Users must use EOSCA for lawful purposes only and must not engage in any activities that violate the principles of transparency, integrity, and ethical usage outlined in the EOSCA ethics and sustainability considerations.</p>
      <p>Users are prohibited from using EOSCA for malicious purposes, such as targeting specific satellites.</p>
      
      <h2>Transparency and Ethical Usage</h2>
      <p>EOSCA is committed to transparency in design and usage. Users can expect clear documentation of data sources, algorithms used, and methodologies for risk assessment to ensure trust and verify the information provided by the application.</p>
      <p>Users are encouraged to use EOSCA in an ethical manner, respecting the principles of transparency, and integrity in space operations.</p>
      
      <h2>Security</h2>
      <p>Security controls are implemented to ensure the confidentiality, integrity, and availability of the data and the runtime environment of EOSCA.</p>
      <p>Users are prohibited from attempting to bypass any security controls or engage in any activities that compromise the security of the EOSCA system.</p>
      
      <h2>Accessibility Design</h2>
      <p>EOSCA prioritizes a user-friendly interface with an easy to navigate system and simplistic presentation of data. This provides flexibility with regards to access for users with different abilities.</p>
      <p>Users are encouraged to provide feedback on the user interface and experience to facilitate continual improvement and ensure human-centric design principles are upheld.</p>
      
      <Accordion className="mb-5">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Reporting Violations
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              If you become aware of any violations of this policy or suspicious activities related to EOSCA, please report them to our team immediately. We take all reports seriously and will investigate and take appropriate action as necessary.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Changes to the policy
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              EOSCA reserves the right to update or modify this policy at any time without prior notice. Users are encouraged to review this policy regularly to stay informed about any changes or updates.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}

export default AcceptableUsagePolicy;
