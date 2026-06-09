/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}

function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      <About />
      <Team />
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Services />
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Projects />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Contact />
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <PrivacyPolicy />
    </div>
  );
}

function TermsOfServicePage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <TermsOfService />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-cyan-500/30">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
