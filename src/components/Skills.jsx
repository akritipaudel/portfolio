import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const SKILLS = [
  { name: 'Python', type: 'core' },
  { name: 'C++', type: 'core' },
  { name: 'Django', type: 'backend' },
  { name: 'React', type: 'frontend' },
  { name: 'SQL', type: 'data' },
  { name: 'MySQL', type: 'data' },
  { name: 'HTML & CSS', type: 'frontend' },
  { name: 'NLP', type: 'ai' },
  { name: 'Computer Vision', type: 'ai' },
  { name: 'Scikit-learn', type: 'ai' },
  { name: 'Power BI', type: 'data' },
  { name: 'Git', type: 'tool' },
];

export default function Skills() {
  const constraintsRef = useRef(null);

  // Group skills by category for catalog look
  const categories = {
    core: 'Programming Languages',
    backend: 'Backend Frameworks',
    frontend: 'Web Interfaces',
    ai: 'Intelligence / ML',
    data: 'Data & Analytics',
    tool: 'Version Control',
  };

  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 flex flex-col justify-center items-center overflow-hidden z-10">
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Title */}
        <h3 className="font-typewriter text-xs tracking-[0.2em] text-holo-amber uppercase mb-3 glow-text-amber">
          [ CONTAINMENT FIELD // FIELD-02 ]
        </h3>
        <h2 className="font-serif text-3xl md:text-5xl text-sepia-100 font-normal italic text-center mb-6">
          Skills & Specializations
        </h2>
        <p className="font-mono text-xs text-sepia-300 text-center max-w-md mb-12">
          * GRAB AND DRAG LABELS TO TEST ZERO-GRAVITY SIMULATION *
        </p>

        {/* Gravity Chamber Grid (Asymmetrical Layout) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Catalog Index Sheet (Left Side) */}
          <div className="lg:col-span-1 border border-sepia-400/40 rounded-sm bg-sepia-900/50 p-6 flex flex-col justify-between font-mono text-xs text-sepia-200">
            <div>
              <div className="border-b border-sepia-400/40 pb-2 mb-4 flex justify-between items-center text-[10px] text-sepia-400">
                <span>SKILLS INVENTORY</span>
                <span>STATUS: STABLE</span>
              </div>
              <ul className="space-y-3">
                {Object.entries(categories).map(([key, name]) => {
                  const filtered = SKILLS.filter(s => s.type === key);
                  return (
                    <li key={key} className="flex justify-between items-start">
                      <span className="text-sepia-400">{name}:</span>
                      <span className="text-right text-sepia-100 font-semibold pl-2">
                        {filtered.map(s => s.name).join(', ')}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="border-t border-sepia-400/30 pt-4 mt-6 flex gap-2 items-center text-[10px] text-sepia-400 leading-tight">
              <HelpCircle className="w-3.5 h-3.5 text-holo-cyan shrink-0 animate-pulse" />
              <span>Click and drag the labels in the chamber to verify their anti-gravity suspension.</span>
            </div>
          </div>

          {/* Containment Chamber (Right Side) */}
          <div 
            ref={constraintsRef}
            className="lg:col-span-2 min-h-[400px] border border-sepia-400/40 rounded-sm bg-sepia-950/40 relative overflow-hidden flex flex-wrap gap-4 p-8 justify-center items-center shadow-inner"
            style={{
              backgroundImage: 'radial-gradient(var(--color-sepia-800) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          >
            {/* Holographic Containment Rings */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
              <div className="w-[80%] h-[80%] border-4 border-double border-holo-cyan rounded-full animate-spin" style={{ animationDuration: '40s' }} />
              <div className="absolute w-[50%] h-[50%] border border-dashed border-holo-cyan rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
            </div>

            {/* Draggable Tags */}
            {SKILLS.map((skill, index) => {
              // Generate semi-random initial offsets for drifting animation
              const randomDuration = Math.random() * 4 + 4;
              const randomX = Math.random() * 20 - 10;
              const randomY = Math.random() * 20 - 10;
              const randomRot = Math.random() * 6 - 3;

              // Different border glow depending on skill category
              const isAi = skill.type === 'ai';
              const glowClass = isAi ? 'hover:glow-border-amber hover:text-holo-amber' : 'hover:glow-border-cyan hover:text-holo-cyan';

              return (
                <motion.div
                  key={index}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.15}
                  dragTransition={{ bounceStiffness: 400, bounceDamping: 18 }}
                  whileDrag={{ scale: 1.1, rotate: randomRot * 2, zIndex: 30 }}
                  animate={{
                    x: [0, randomX, -randomX, 0],
                    y: [0, randomY, -randomY, 0],
                    rotate: [randomRot, -randomRot, randomRot],
                  }}
                  transition={{
                    x: { duration: randomDuration, repeat: Infinity, ease: 'easeInOut' },
                    y: { duration: randomDuration + 1, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: randomDuration * 1.5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className={`px-4 py-2 bg-sepia-100 text-sepia-900 border border-sepia-300 rounded-sm font-typewriter text-sm font-bold shadow-md cursor-grab active:cursor-grabbing select-none select-none transition-all duration-300 ${glowClass} flex items-center gap-1.5`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Neon Dot indicator */}
                  <span className={`w-1.5 h-1.5 rounded-full ${isAi ? 'bg-holo-amber shadow-[0_0_4px_var(--color-holo-amber)]' : 'bg-holo-cyan shadow-[0_0_4px_var(--color-holo-cyan)]'}`} />
                  {skill.name}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
