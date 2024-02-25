import React from 'react';
import Architecture from '../images/Architecture.png'
import { Container } from 'react-bootstrap';

/* 
<Jumbotron fluid className="bg-dark text-light">
</Jumbotron>
*/

const Header = () => {
  return (

    <Container>
      <h1 className="display-4">About EOSCA</h1>
      <p className="lead">Earth Orbit Spacecraft Collision Avoidance (EOSCA) is a cutting-edge web application which was designed to enhance space situational awareness and mitigate collision risks in near-Earth orbit.</p>

      <h2>Our Mission</h2>
      <p className="lead">The main goal of EOSCA is to maintain a clean and safe space environment, by providing real-time tracking, assessment and mitigation of collision risks between satellites and space debris. Utilizing advanced algorithms and predictive modeling, EOSCA is designed to ensure the safety and longevity of critical space infrastructure, in hopes to increase the concern for space situational awareness.</p>

      <h2>Features</h2>
      <ul>
        <li>Real-Time Tracking: Stay informed about the precise locations and trajectories of satellites and space debris in near-Earth orbit.</li>
        <li>Conjunction Assessment: Identify close approaches between satellites and debris, and evaluate the potential collision risks.</li>
        <li>Risk Evaluation: Assess the level of danger posed by each close approach and recommend appropriate mitigation actions.</li>
        <li>User-Friendly Interface: Intuitive interface designed to provide users with the tools and information needed to make informed decisions.</li>
        <li>Data Security: Secure storage mechanisms ensure the confidentiality and integrity of orbital data and assessment results.</li>
      </ul>

      <h2>How it works</h2>
      <p className="lead">EOSCA continuously monitors satellites and space debris, analyzing their positions and identifying potential collision scenarios. Based on the selected satellite, the system will perform a risk assessment to evaluate the severity of a threat. Users are able to view real-time data, assess collision risks, and plan mitigation strategies when required.</p>

      <img src={Architecture} alt="Illustration of How it Works" className="img-fluid" />

      <h2>Getting involved</h2>
      <p className="lead">Join us on our mission to protect the space environment and ensure the sustainability of future space missions. Whether you're a satellite operator, space agency, or simply want to get involved out of interest, your support is crucial in advancing space situational awareness and collision avoidance efforts.</p>
    </Container>

  );
}

export default Header;
