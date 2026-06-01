import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import BackgroundEffect from './components/BackgroundEffect';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  const [bootState, setBootState] = useState('off'); // off -> booting -> active
  const [bootText, setBootText] = useState([]);

  useEffect(() => {
    // Stage 1: Trigger CRT power on
    setBootState('booting');

    const lines = [
      'STATUS: CONNECTED TO ARCHIVE_NODE_05',
      'GRAVITATIONAL CONSTANT: G_VAL = 0.00 m/s²',
      'DETECTION: ANOMALOUS FIELD ACTIVE',
      'WARMING UP NIXIE FILAMENTS...',
      'LOADING CODEX AKRITI v1.0.4...',
      'READY.'
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setBootText((prev) => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        // Delay slightly before loading the portfolio
        setTimeout(() => {
          setBootState('active');
        }, 600);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-sepia-950 text-sepia-100 selection:bg-holo-amber selection:text-sepia-950 font-sans overflow-x-hidden">
      
      {/* Background canvas, grain, and scanlines */}
      <BackgroundEffect />

      <AnimatePresence>
        {bootState === 'booting' && (
          <motion.div
            key="crt-boot"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 w-full h-full bg-sepia-950 z-50 flex items-center justify-center crt-scanlines crt-flicker"
          >
            {/* Simulated green phosphor CRT display screen */}
            <div className="w-[85vw] max-w-lg h-72 bg-[#120e0d] border border-sepia-800 rounded p-6 shadow-inner relative flex flex-col justify-between font-mono text-[11px] text-holo-green glow-text-green crt-power-on">
              <div className="space-y-1.5 text-left">
                <div className="flex justify-between items-center border-b border-sepia-850 pb-1 mb-3 text-[9px] opacity-70">
                  <span>TERMINAL CONSOLE v1.0</span>
                  <span>SYS_LOC: EARTH_ORBIT</span>
                </div>
                {bootText.map((text, index) => (
                  <div key={index} className="flex gap-1.5">
                    <span>&gt;</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              
              {/* Spinning compass dial indicator */}
              <div className="absolute bottom-5 right-6 flex items-center gap-2.5 opacity-65">
                <span className="animate-spin duration-3000 font-typewriter text-[9px]">/</span>
                <span className="text-[8px]">G-VAR: LOCALIZED</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Sections */}
      {bootState === 'active' && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center"
        >
          {/* Asymmetrical floating structural details (glowing lines) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-sepia-800/40 via-sepia-800/10 to-sepia-800/40 pointer-events-none" />

          {/* Individual sections */}
          <Hero />
          
          <div className="w-2/3 my-12 border-b border-dashed border-sepia-400/20" />
          <About />
          
          <div className="w-2/3 my-12 border-b border-dashed border-sepia-400/20" />
          <Skills />
          
          <div className="w-2/3 my-12 border-b border-dashed border-sepia-400/20" />
          <Projects />
          
          <div className="w-2/3 my-12 border-b border-dashed border-sepia-400/20" />
          <Education />
          
          <div className="w-2/3 my-12 border-b border-dashed border-sepia-400/20" />
          <Achievements />
          
          <div className="w-2/3 my-12 border-b border-dashed border-sepia-400/20" />
          <Contact />
        </motion.main>
      )}
    </div>
  );
}
