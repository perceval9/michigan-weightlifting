import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Connect from './Connect';
import OurAthletes from './OurAthletes';
import '../App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/OurAthletes" element={<OurAthletes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;