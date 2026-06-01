import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileSpreadsheet, Radio } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const links = [
    {
      name: 'EMAIL',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:akritipaudelmail@gmail.com', // generic/professional placeholder
      nixieText: 'E-ML',
      glowColor: 'amber'
    },
    {
      name: 'GITHUB',
      icon: <GithubIcon className="w-5 h-5" />,
      url: 'https://github.com/akritipaudel', // placeholder
      nixieText: 'G-HB',
      glowColor: 'cyan'
    },
    {
      name: 'LINKEDIN',
      icon: <LinkedinIcon className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/akriti-paudel-4b2620309/', // placeholder
      nixieText: 'L-IN',
      glowColor: 'cyan'
    },
    {
      name: 'RESUME',
      icon: <FileSpreadsheet className="w-5 h-5" />,
      url: '#', // placeholder
      nixieText: 'R-SM',
      glowColor: 'amber'
    }
  ];

  return (
    <section id="contact" className="relative min-h-[85vh] py-24 px-6 flex flex-col justify-center items-center overflow-hidden z-10">

      {/* Decorative radio waves */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-[600px] h-[600px] border border-holo-amber rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute w-[400px] h-[400px] border border-holo-amber rounded-full animate-ping" style={{ animationDuration: '6s' }} />
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* Header */}
        <h3 className="font-typewriter text-xs tracking-[0.2em] text-holo-cyan uppercase mb-3 glow-text-cyan">
          [ TRANSMITTER NODE // COMM-05 ]
        </h3>
        <h2 className="font-serif text-3xl md:text-5xl text-sepia-100 font-normal italic text-center mb-6">
          Establish Connection
        </h2>
        <p className="font-mono text-xs text-sepia-300 text-center max-w-md mb-16">
          * COMMUNICATE ACROSS TIME AND DISTORTED GRAVITATIONAL FIELDS *
        </p>

        {/* Vintage Transmitter Control Panel */}
        <div
          className="w-full max-w-2xl bg-sepia-900/60 border border-sepia-700/60 rounded-md p-8 relative shadow-2xl flex flex-col items-center"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}
        >
          {/* Signal Indicator LED */}
          <div className="absolute top-4 right-6 flex items-center gap-2 font-mono text-[9px] text-sepia-400">
            <span>TX ACTIVE</span>
            <span className="w-2 h-2 bg-holo-green rounded-full shadow-[0_0_8px_var(--color-holo-green)] animate-pulse" />
          </div>

          <div className="absolute top-4 left-6 flex items-center gap-1.5 font-mono text-[9px] text-sepia-400">
            <Radio className="w-3.5 h-3.5 text-holo-amber animate-pulse" />
            <span>FREQ: 1420.4 MHz</span>
          </div>

          {/* Description */}
          <p className="font-serif text-base text-sepia-200 text-center max-w-lg mb-10 leading-relaxed mt-4">
            Whether you want to coordinate on a software project, explore AI research possibilities, or simply discuss the mechanics of anti-gravity systems, feel free to transmit a signal.
          </p>

          {/* Nixie Tubes Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center w-full">
            {links.map((link, index) => {
              const isAmber = link.glowColor === 'amber';
              const glowTextClass = isAmber ? 'glow-text-amber text-holo-amber' : 'glow-text-cyan text-holo-cyan';
              const glowBorderClass = isAmber ? 'glow-border-amber border-holo-amber/40' : 'glow-border-cyan border-holo-cyan/40';
              const neonShadow = isAmber ? 'rgba(255, 159, 104, 0.4)' : 'rgba(134, 227, 206, 0.4)';

              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Nixie Bulb Container */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                      boxShadow: `0 0 15px ${neonShadow}, inset 0 0 10px ${neonShadow}`
                    }}
                    className={`w-20 h-24 rounded-t-full rounded-b-sm border-2 border-sepia-700 bg-sepia-950/90 flex flex-col items-center justify-between py-3 relative transition-all duration-300 ${glowBorderClass}`}
                  >
                    {/* Metal filament grid grid overlay inside bulb */}
                    <div
                      className="absolute inset-x-2 inset-y-4 pointer-events-none opacity-25 border border-dashed border-sepia-400 rounded-t-full"
                      style={{
                        backgroundImage: 'radial-gradient(circle, var(--color-sepia-400) 0.5px, transparent 0.5px)',
                        backgroundSize: '4px 4px'
                      }}
                    />

                    {/* Glowing Nixie Text Filament */}
                    <div className="text-[10px] font-typewriter text-sepia-500/30 group-hover:text-sepia-400/40 select-none tracking-widest mt-1">
                      {link.name}
                    </div>

                    <div className={`font-typewriter text-xl font-bold tracking-widest ${glowTextClass} transition-colors duration-300 select-none`}>
                      {link.nixieText}
                    </div>

                    <div className="text-sepia-500 group-hover:text-sepia-200 transition-colors duration-300">
                      {link.icon}
                    </div>

                    {/* Tube base shadow lines */}
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-sepia-800 border-t border-sepia-700" />
                  </motion.div>

                  {/* Tube Label */}
                  <span className="font-mono text-[9px] text-sepia-400 mt-2 tracking-widest uppercase">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Footnotes */}
          <div className="w-full border-t border-sepia-700/60 mt-10 pt-4 flex justify-between items-center font-mono text-[8px] text-sepia-400">
            <span>MODEL: NIXIE-AP-26</span>
            <span>MADE IN NEPAL // THAPAR SEC</span>
          </div>
        </div>

        {/* Footer info */}
        <p className="font-typewriter text-[9px] text-sepia-500 mt-12 tracking-wider">
          © 2026 AKRITI PAUDEL. ALL TETHERS SUSPENDED.
        </p>
      </div>
    </section>
  );
}
