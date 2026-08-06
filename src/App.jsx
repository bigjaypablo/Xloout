import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import ForCreators from './components/ForCreators';
import ForProjects from './components/ForProjects';
import Leaderboard from './components/Leaderboard';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Connect from './pages/Connect';
import Dashboard from './pages/Dashboard';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <ForCreators />
      <ForProjects />
      <Leaderboard />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
