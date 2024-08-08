import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav, Footer, AboutMe, Contact, Portfolio, Resume } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;