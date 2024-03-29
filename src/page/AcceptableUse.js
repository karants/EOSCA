import React from 'react';
import { Typography, Card, CardContent, CardHeader } from '@mui/material';
import { Container, Accordion } from 'react-bootstrap';

const AcceptableUsagePolicy = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>Acceptable Usage Policy</Typography>

      <Card sx={{ marginBottom: '1rem', backgroundColor: "#99A3B1" }}>
      <CardHeader title="Purpose" />
        <CardContent>
          <Typography variant="body1">
            EOSCA is designed to promote space situational awareness and mitigate collision risks in near-Earth orbit. The acceptable usage policy was created to ensure the safe, responsible, and ethical use of the EOSCA web application by all users.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: '1rem', backgroundColor: "#99A3B1" }}>
      <CardHeader title="User Responsibilities" />
        <CardContent>
          <Typography variant="body1">
            Users must use EOSCA for lawful purposes only and must not engage in any activities that violate the principles of transparency, integrity, and ethical usage outlined in the EOSCA ethics and sustainability considerations.
          </Typography>
          <Typography variant="body1">
            Users are prohibited from using EOSCA for malicious purposes, such as targeting specific satellites.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: '1rem', backgroundColor: "#99A3B1" }}>
        <CardHeader title="Transparency and Ethical Usage" />
        <CardContent>
          <Typography variant="body1">
            EOSCA is committed to transparency in design and usage. Users can expect clear documentation of data sources, algorithms used, and methodologies for risk assessment to ensure trust and verify the information provided by the application.
          </Typography>
          <Typography variant="body1">
            Users are encouraged to use EOSCA in an ethical manner, respecting the principles of transparency, and integrity in space operations.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: '1rem', backgroundColor: "#99A3B1" }}>
      <CardHeader title ="Security"/>
        <CardContent>
          <Typography variant="body1">
            Security controls are implemented to ensure the confidentiality, integrity, and availability of the data and the runtime environment of EOSCA.
          </Typography>
          <Typography variant="body1">
            Users are prohibited from attempting to bypass any security controls or engage in any activities that compromise the security of the EOSCA system.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: '1rem', backgroundColor: "#99A3B1" }}>
      <CardHeader title = "Accessibility Design" />
        <CardContent>
          <Typography variant="body1">
            EOSCA prioritizes a user-friendly interface with an easy to navigate system and simplistic presentation of data. This provides flexibility with regards to access for users with different abilities.
          </Typography>
          <Typography variant="body1">
            Users are encouraged to provide feedback on the user interface and experience to facilitate continual improvement and ensure human-centric design principles are upheld.
          </Typography>
        </CardContent>
      </Card>

      <Accordion className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Reporting Violations</Accordion.Header>
          <Accordion.Body>
            If you become aware of any violations of this policy or suspicious activities related to EOSCA, please report them to our team immediately. We take all reports seriously and will investigate and take appropriate action as necessary.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Changes to the policy</Accordion.Header>
          <Accordion.Body>
            EOSCA reserves the right to update or modify this policy at any time without prior notice. Users are encouraged to review this policy regularly to stay informed about any changes or updates.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default AcceptableUsagePolicy;
