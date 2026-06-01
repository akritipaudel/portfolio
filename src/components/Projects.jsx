import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Asset Imports
import projectEquity from '../assets/project_equity.png';
import projectCalmind from '../assets/project_calmind.png';
import projectWalker from '../assets/project_walker.png';

const PROJECTS = [
  {
    title: 'Equity Research Dashboard',
    description: 'A comprehensive financial analytics and valuation system integrating real-time market data feeds, DCF metrics, and automated report generation.',
    tag: 'FINANCIAL ANALYTICS',
    image: projectEquity,
    accentColor: 'amber',
    stamp: 'CLASSIFIED',
    refId: 'DOC-1873-ER'
  },
  {
    title: 'Calmind Platform',
    description: 'An NLP-powered mental wellness ecosystem offering sentiment-sensitive journaling, real-time therapy logs, and botanical UI visualization.',
    tag: 'NATURAL LANGUAGE PROCESSING',
    image: projectCalmind,
    accentColor: 'green',
    stamp: 'SECURE',
    refId: 'DOC-1992-CM'
  },
  {
    title: 'Autonomous Robot Walker',
    description: 'AI-assisted mechanical navigation apparatus for the visually impaired, deploying computer vision, lidar mapping, and predictive vector pathing.',
    tag: 'ROBOTICS & COMPUTER VISION',
    image: projectWalker,
    accentColor: 'cyan',
    stamp: 'PROTOTYPE',
    refId: 'DOC-1928-AW'
  }
];

function PolaroidCard({ project, index }) {
  const cardRef = useRef(null);
  
  // Motion values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Rotations for 3D card tilt
  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);
  
  // Floating offsets
  const floatClass = index === 0 ? 'animate-drift-1' : index === 1 ? 'animate-drift-2' : 'animate-drift-3';

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const accentGlowClass = 
    project.accentColor === 'amber' ? 'hover:shadow-[0_0_20px_rgba(255,159,104,0.15)] hover:border-holo-amber/60' :
    project.accentColor === 'green' ? 'hover:shadow-[0_0_20px_rgba(163,226,201,0.15)] hover:border-holo-green/60' :
    'hover:shadow-[0_0_20px_rgba(134,227,206,0.15)] hover:border-holo-cyan/60';

  const stampColorClass = 
    project.accentColor === 'amber' ? 'text-holo-amber border-holo-amber/30 bg-holo-amber/5' :
    project.accentColor === 'green' ? 'text-holo-green border-holo-green/30 bg-holo-green/5' :
    'text-holo-cyan border-holo-cyan/30 bg-holo-cyan/5';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      className={`w-full max-w-[340px] md:max-w-[320px] bg-[#FAF8F5] text-sepia-900 p-4 pb-6 rounded shadow-xl border border-sepia-200 cursor-default select-text ${floatClass} ${accentGlowClass} transition-colors duration-500`}
    >
      {/* Polaroid Image Slot */}
      <div className="relative aspect-square w-full overflow-hidden bg-sepia-950 border border-sepia-200/60 shadow-inner group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover filter grayscale-20 sepia-80 contrast-95 transition-all duration-700 group-hover:filter-none group-hover:scale-105"
        />
        
        {/* Holographic scanner laser line effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-holo-cyan/15 to-transparent h-1/3 w-full -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none" />

        {/* Polaroid stamp overlay */}
        <div className={`absolute top-3 right-3 px-2 py-0.5 text-[8px] font-typewriter border rounded rotate-12 ${stampColorClass} pointer-events-none select-none tracking-widest`}>
          {project.stamp}
        </div>
      </div>

      {/* Polaroid Card Margin (Bottom) */}
      <div className="mt-5 flex flex-col items-start text-left">
        <div className="flex justify-between items-center w-full font-typewriter text-[9px] text-sepia-500 tracking-wider mb-1">
          <span>REF // {project.refId}</span>
          <span>{project.tag}</span>
        </div>
        <h4 className="font-typewriter text-base text-sepia-950 font-bold leading-tight mb-2 tracking-tight group-hover:text-holo-cyan transition-colors">
          {project.title}
        </h4>
        <p className="font-serif text-xs text-sepia-700 leading-relaxed text-justify">
          {project.description}
        </p>
      </div>

      {/* Simulated tape/tack on top of Polaroid */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-sepia-300/40 backdrop-blur-xxs rotate-[-2deg] border border-sepia-400/20 shadow-xs pointer-events-none select-none" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 flex flex-col justify-center items-center overflow-hidden z-10">
      
      {/* Dynamic scan laser bar behind section header */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-holo-cyan/20 to-transparent pointer-events-none" />

      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Header */}
        <h3 className="font-typewriter text-xs tracking-[0.2em] text-holo-cyan uppercase mb-3 glow-text-cyan">
          [ ARCHIVAL SPECIMENS // SHELF-03 ]
        </h3>
        <h2 className="font-serif text-3xl md:text-5xl text-sepia-100 font-normal italic text-center mb-16">
          Antique Project Ledger
        </h2>

        {/* Project Polaroids Grid */}
        <div className="w-full flex flex-col md:flex-row flex-wrap gap-10 lg:gap-14 justify-center items-center">
          {PROJECTS.map((project, index) => (
            <PolaroidCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Scanline keyframe override helper */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(300%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </section>
  );
}
