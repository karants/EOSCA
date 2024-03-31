import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardHeader, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import Architecture from '../images/Architecture.png';
import Project_Image from '../images/Project_Image.png';

const AboutSection = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>About EOSCA</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '100%', backgroundColor: "#99A3B1" }}>
            <CardHeader title="Our Mission" />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                Earth Orbit Spacecraft Collision Avoidance (EOSCA) is a cutting-edge web application which was designed to enhance space situational awareness and mitigate collision risks in near-Earth orbit.
              </Typography>
              <p></p>
              <Typography variant="body1">
                The main goal of EOSCA is to maintain a clean and safe space environment, by providing real-time tracking, assessment and mitigation of collision risks between satellites and space debris. Utilizing advanced algorithms and predictive modeling, EOSCA is designed to ensure the safety and longevity of critical space infrastructure, in hopes to increase the concern for space situational awareness.
              </Typography>
              <CardMedia
                component="img"
                image={Project_Image}
                alt="Project Image"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '100%', backgroundColor: "#99A3B1" }}>
            <CardHeader title="Features" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <List>
                    <ListItem>
                      <ListItemText primary="Real-Time Tracking" secondary="Stay informed about the precise locations and trajectories of satellites and space debris in near-Earth orbit." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Conjunction Assessment" secondary="Identify close approaches between satellites and debris, and evaluate the potential collision risks." />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List>
                    <ListItem>
                      <ListItemText primary="Risk Evaluation" secondary="Assess the level of danger posed by each close approach and recommend appropriate mitigation actions." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="User-Friendly Interface" secondary="Intuitive interface designed to provide users with the tools and information needed to make informed decisions." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Data Security" secondary="Secure storage mechanisms ensure the confidentiality and integrity of orbital data and assessment results." />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ height: '100%', backgroundColor: "#99A3B1"}}>
            <CardHeader title="How it works" />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                EOSCA continuously monitors satellites and space debris, analyzing their positions and identifying potential collision scenarios. Based on the selected satellite, the system will perform a risk assessment to evaluate the severity of a threat. Users are able to view real-time data, assess collision risks, and plan mitigation strategies when required.
              </Typography>
              <CardMedia
                component="img"
                image={Architecture}
                alt="Illustration of How it Works"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ height: '100%', backgroundColor: "#99A3B1" }}>
            <CardHeader title="Getting involved" />
            <CardContent>
              <Typography variant="body1">
                Join us on our mission to protect the space environment and ensure the sustainability of future space missions. Whether you're a satellite operator, space agency, or simply want to get involved out of interest, your support is crucial in advancing space situational awareness and collision avoidance efforts.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
