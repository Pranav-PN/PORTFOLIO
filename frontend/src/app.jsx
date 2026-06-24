import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Skills from './components/skills.jsx';
import Experience from './components/experience.jsx';
import Testimonials from './components/testimonials.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import SmoothScroll from './components/smoothscroll.jsx';
import ScrollProgress from './components/srollprogress.jsx';
import './app.css';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#1C1A17] selection:bg-[#D4AF37] selection:text-white">
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
