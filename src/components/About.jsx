import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function About() {
  const cardRef = useRef(null);

  // Motion values for 3D tilt interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform motion values to rotation degrees
  const rotateX = useTransform(mouseY, [-300, 300], [12, -12]);
  const rotateY = useTransform(mouseX, [-300, 300], [-12, 12]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Reset tilt on mouse leave
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-6 flex items-center justify-center overflow-hidden z-10"
    >
      {/* Decorative background grid behind about card */}
      <div className="absolute inset-0 max-w-5xl mx-auto flex items-center justify-center opacity-15 pointer-events-none">
        <div className="w-[500px] h-[500px] border border-sepia-400 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-[400px] h-[400px] border border-dashed border-sepia-300 rounded-full" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        <h3 className="font-typewriter text-center text-xs tracking-[0.2em] text-holo-cyan uppercase mb-4 glow-text-cyan">
          [ ARCHIVAL RECORD // LOG-01 ]
        </h3>

        {/* About Card with 3D Tilt */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
          className="relative rounded-sm shadow-2xl bg-[#f5ebd7] text-sepia-900 px-8 py-10 sm:px-12 sm:py-14 select-text border border-sepia-200 cursor-default animate-drift-1"
        >
          {/* Subtle noise pattern inside card */}
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply rounded-sm"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.15\'/%3E%3C/svg%3E")'
            }}
          />

          {/* Coffee stain illustration (SVG Overlay) */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sepia-900/50 via-sepia-900/30 to-transparent rounded-full filter blur-xl" />

          <svg className="absolute -bottom-2 -right-2 w-32 h-32 text-sepia-600/15 pointer-events-none select-none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>

          {/* Binder holes on the left to simulate a notebook page */}
          <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-around py-6 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-3.5 h-3.5 bg-sepia-950 rounded-full border border-sepia-600/30 shadow-inner flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#f5ebd7] rounded-full" />
              </div>
            ))}
          </div>

          <div className="pl-6 border-l border-sepia-300/40">
            {/* Journal Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-8 border-b border-sepia-300/60 pb-4">
              <div>
                <h2 className="font-serif italic text-3xl font-semibold text-sepia-950">
                  Journal Entry
                </h2>
                <p className="font-typewriter text-[10px] text-sepia-600 mt-1">
                  LOC: HIMALAYAN FOOTHILLS / CLOUD SIMULATOR
                </p>
              </div>
              <div className="font-typewriter text-right text-xs text-sepia-600 bg-sepia-400/10 px-2.5 py-1 border border-sepia-300/40 rounded-sm">
                DATE: 31-MAY-2026
              </div>
            </div>

            {/* Content text */}
            <div className="font-serif text-lg text-sepia-800 leading-relaxed space-y-6">

              <p className="indent-8 text-justify">
                Currently, as a <strong>Computer Science Undergraduate</strong>, my work is centered around the overlap of software engineering, artificial intelligence, and interactive frontend landscapes. I focus on developing systems that are both functionally robust and visually engaging.
              </p>
              <p className="indent-8 text-justify">
                With practical experience building full-stack applications in <strong>Python, Django, and React</strong>, alongside training models in <strong>Machine Learning and NLP</strong>, I approach software not just as a set of instructions, but as an environment where algorithms can drift, adapt, and operate beyond static boundaries.
              </p>
            </div>

            {/* Handwriting annotation at the bottom */}
            <div className="mt-12 flex justify-between items-end">
              <div className="font-serif italic text-sm text-sepia-500 max-w-[200px] leading-tight rotate-[-3deg]">
                * "Gravity is nothing but a localized field distortion. Same is true for code."
              </div>
              <div className="text-right">
                <p className="font-typewriter text-[9px] text-sepia-400">AUTHOR SIGN-OFF</p>
                <p className="font-serif italic text-xl text-sepia-900 tracking-wide mt-1 pr-2">
                  Akriti P.
                </p>
              </div>
            </div>
          </div>

          {/* Vintage Wax Seal / Hologram hybrid stamp in top-right */}
          <div className="absolute -top-4 -right-4 w-14 h-14 bg-holo-amber/15 border border-holo-amber rounded-full flex items-center justify-center rotate-12 glow-border-amber select-none pointer-events-none">
            <div className="w-[85%] h-[85%] border border-dashed border-holo-amber rounded-full flex items-center justify-center">
              <span className="font-typewriter text-[8px] text-holo-amber font-bold leading-none">APPROVED</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
