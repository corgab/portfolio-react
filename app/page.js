'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LoadingScreen from './components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen setLoading={setLoading} />

      {loading ? null : (
        <>
          <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Footer />
          </>
        </>
      )}
    </>
  );
}
