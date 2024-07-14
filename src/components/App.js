import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Connect from './Connect';
import OurAthletes from './OurAthletes';
import Sponsors from './Sponsors';
import OurAlumni from './OurAlumni';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/ourathletes" element={<OurAthletes />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/ouralumni" element={<OurAlumni />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;