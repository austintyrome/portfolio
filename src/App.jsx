import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, AboutMe, Contact, Portfolio, Resume } from './components';
import './App.css';
// import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
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
