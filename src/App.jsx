import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import AuthCallback from './pages/AuthCallback';
import MobileDebugger from './components/MobileDebugger';

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
    <Router basename="/Xloout">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/x/callback" element={<AuthCallback />} />
      </Routes>
      <MobileDebugger />
    </Router>
  );
}

export default App;
