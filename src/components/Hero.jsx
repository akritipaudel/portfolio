import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 80 },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center select-none overflow-hidden z-10">

      {/* Main Hero Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Antique Accent Seal */}
        <motion.div
          variants={itemVariants}
          className="border border-sepia-400 bg-sepia-100 text-sepia-950 font-serif font-semibold text-xs tracking-[0.25em] uppercase px-4 py-1.5 rounded-full shadow-md select-none rotate-[-1deg] animate-drift-2"
        >
          Est. 2026 / Codex Akriti
        </motion.div>

        {/* Name & Role Card */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-xl w-full mx-auto px-8 py-8 rounded border border-sepia-400/40 bg-sepia-900/60 backdrop-blur-xs shadow-xl flex flex-col items-center select-text"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 159, 104, 0.05) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        >
          {/* Polaroid-style hanger */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-6 bg-sepia-700/80 rounded border-t border-x border-sepia-600 shadow-inner flex justify-center">
            <div className="w-2.5 h-2.5 bg-sepia-950 rounded-full border border-sepia-800 mt-1" />
          </div>

          <div className="mt-2 text-sepia-300 font-mono text-[10px] tracking-[0.3em] uppercase mb-1">
            SUBJECT IDENTIFICATION
          </div>
          <h1 className="font-typewriter text-3xl sm:text-4xl text-sepia-100 font-bold tracking-tight mb-3">
            Akriti Paudel
          </h1>
          <hr className="w-full border-dashed border-sepia-400/30 my-3" />

          <p className="font-mono text-xs sm:text-sm text-sepia-200 leading-relaxed text-center max-w-md">
            Computer Science Undergraduate{' '}
            <span className="text-holo-cyan glow-text-cyan font-semibold">|</span>{' '}
            Full Stack Developer{' '}
            <span className="text-holo-cyan glow-text-cyan font-semibold">|</span>{' '}
            AI Enthusiast
          </p>

          {/* Corner marks */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-sepia-400/40" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-sepia-400/40" />
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-sepia-400/40" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-sepia-400/40" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-2 cursor-pointer text-sepia-400 hover:text-holo-cyan transition-colors"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-typewriter text-[10px] tracking-[0.2em] uppercase">Drift Downward</span>
          <div className="w-1.5 h-7 border border-sepia-400 rounded-full flex justify-center p-0.5">
            <motion.div
              className="w-1 h-1.5 bg-sepia-300 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
