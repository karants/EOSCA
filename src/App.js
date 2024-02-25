import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom'

import Navbar from './components/Navbar';
import Main from './page/Main';
import AboutSection from './page/AboutSection';
import AcceptableUsagePolicy from './page/AcceptableUse';
import ConjunctionAssessment from './page/ConjunctionAssessment';


const App = () => {

  return (
    <div className="App">
      <Navbar />
      <br />
      <Router>
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/About' exact element={<AboutSection />} />
          <Route path='/Policy' exact element={<AcceptableUsagePolicy />} />
          <Route path='/Assessment' exact element={<ConjunctionAssessment />} />
          <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
