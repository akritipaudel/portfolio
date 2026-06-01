import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Award } from 'lucide-react';

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const folderVariants = {
    hidden: { opacity: 0, y: 40, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: 'spring', damping: 15, stiffness: 80 },
    },
  };

  return (
    <section id="achievements" className="relative min-h-screen py-24 px-6 flex flex-col justify-center items-center overflow-hidden z-10">

      {/* Decorative vertical blueprint coordinate line */}
      <div className="absolute top-0 bottom-0 right-[10%] md:right-[15%] w-[1px] bg-dashed border-l border-sepia-400/25 pointer-events-none" />

      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Header */}
        <h3 className="font-typewriter text-xs tracking-[0.2em] text-holo-green uppercase mb-3 glow-text-green">
          [ COMMENDATIONS // ARCHIVE-05 ]
        </h3>
        <h2 className="font-serif text-3xl md:text-5xl text-sepia-100 font-normal italic text-center mb-16">
          Honours &amp; Achievements
        </h2>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start select-text"
        >
          {/* Dossier: COMPEX Scholarship */}
          <motion.div
            variants={folderVariants}
            className="relative bg-[#ebdcb9] text-sepia-900 rounded-sm border border-sepia-400 p-6 md:p-8 shadow-xl flex flex-col justify-between min-h-[380px] animate-drift-3 cursor-default"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Paper Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply rounded-sm"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.15\'/%3E%3C/svg%3E")'
              }}
            />

            {/* Folder Tab */}
            <div className="absolute -top-6 left-6 bg-[#dfcfb9] border-t border-x border-sepia-400 px-4 py-1 text-[9px] font-typewriter font-bold text-sepia-650 rounded-t-xs shadow-xs">
              DOSSIER // SCHOLARSHIP
            </div>

            {/* Certificate Clip Stamp */}
            <div className="absolute -top-3 right-10 w-7 h-10 bg-holo-amber/10 border border-holo-amber/40 rounded flex items-center justify-center rotate-[-12deg] glow-border-amber pointer-events-none">
              <Award className="w-4 h-4 text-holo-amber animate-pulse" />
            </div>

            {/* Dossier Content */}
            <div>
              <div className="flex justify-between items-start border-b border-sepia-400/40 pb-4 mb-6">
                <div>
                  <h4 className="font-typewriter text-xs text-sepia-500 tracking-widest uppercase">HONOR / COMMENDATION</h4>
                  <h3 className="font-serif text-2xl font-bold text-sepia-950 mt-1 leading-tight">
                    COMPEX Scholarship <br /> Award Recipient
                  </h3>
                </div>
                <Bookmark className="w-5 h-5 text-sepia-700 shrink-0 mt-1" />
              </div>

              <div className="space-y-4 font-serif text-sm text-sepia-800">
                <div className="flex items-center gap-2">
                  <span className="font-typewriter text-[10px] text-sepia-500 bg-sepia-400/10 border border-sepia-300 px-1.5 py-0.5 rounded-sm">AWARDED BY</span>
                  <span className="font-semibold text-sepia-900">Embassy of India, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-typewriter text-[10px] text-sepia-500 bg-sepia-400/10 border border-sepia-300 px-1.5 py-0.5 rounded-sm">ELIGIBILITY</span>
                  <span className="font-semibold text-sepia-900">Top-Tier Academic Merit</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-typewriter text-[10px] text-sepia-500 bg-sepia-400/10 border border-sepia-300 px-1.5 py-0.5 rounded-sm shrink-0 mt-0.5">DETAIL</span>
                  <span>Prestigious scholarship program awarded to outstanding Nepalese undergraduates to pursue higher engineering studies in premium Indian tech institutes.</span>
                </div>
              </div>
            </div>

            {/* Archival footer */}
            <div className="border-t border-sepia-400/30 pt-6 mt-8 flex justify-between items-end">
              <div>
                <p className="font-typewriter text-[8px] text-sepia-500">DIGITAL BARCODE SIGNATURE</p>
                <div className="w-32 h-6 flex gap-0.5 items-stretch bg-transparent mt-1 opacity-60">
                  {[2, 4, 1, 3, 5, 2, 1, 8, 4, 1, 2, 3, 2, 5, 1, 6, 2, 4].map((w, idx) => (
                    <div key={idx} className="bg-sepia-950" style={{ width: `${w}px` }} />
                  ))}
                </div>
              </div>
              <div className="text-right font-typewriter text-[10px] text-sepia-500">
                RECORD ID // CMPX-2022
              </div>
            </div>

            {/* Faded stamp */}
            <div className="absolute bottom-12 right-6 w-20 h-20 border-2 border-dashed border-holo-amber/25 rounded-full flex items-center justify-center rotate-12 pointer-events-none select-none">
              <span className="font-typewriter text-[9px] text-holo-amber/25 font-bold">APPROVED</span>
            </div>
          </motion.div>

          {/* Spacer / decorative second slot */}
          <motion.div
            variants={folderVariants}
            className="relative bg-[#1a1410]/40 text-sepia-300 rounded-sm border border-dashed border-sepia-600/30 p-6 md:p-8 flex flex-col justify-center items-center min-h-[380px] md:mt-12 cursor-default opacity-50"
          >
            <div className="absolute -top-6 left-6 bg-sepia-900 border-t border-x border-sepia-700 px-4 py-1 text-[9px] font-typewriter font-bold text-sepia-500 rounded-t-xs shadow-xs">
              DOSSIER // PENDING
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 border border-dashed border-sepia-600/40 rounded-full flex items-center justify-center mx-auto">
                <span className="font-typewriter text-xs text-sepia-600">?</span>
              </div>
              <p className="font-typewriter text-[10px] text-sepia-600 tracking-widest uppercase">CLASSIFIED</p>
              <p className="font-serif italic text-sepia-500 text-sm">More commendations incoming…</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
