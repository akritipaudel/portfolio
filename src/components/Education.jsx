import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, MapPin, Calendar } from 'lucide-react';

const institutions = [
  {
    id: 1,
    dossier: 'DOSSIER // TIET-BTECH',
    label: 'ACADEMIC INSTITUTION',
    name: 'Thapar Institute of Engineering & Technology',
    degree: 'B.E. in Computer Science and Engineering',
    grade: { tag: 'CGPA', value: '7.19 / 10' },
    location: 'Patiala, India',
    period: 'Aug 2022 – May 2026',
    barcode: [4, 1, 2, 8, 3, 1, 4, 2, 1, 5, 2, 6, 1, 3, 2, 4, 1, 8],
    recordId: 'CSE-TIET-44',
    stamp: 'MATRICULATED',
    stampColor: 'border-sepia-500/20',
    stampTextColor: 'text-sepia-500/20',
    drift: 'animate-drift-2',
  },
  {
    id: 2,
    dossier: 'DOSSIER // SXC-SCIENCE',
    label: 'HIGHER SECONDARY',
    name: "St. Xavier's College, Maitighar",
    degree: 'Science – National Examination Board',
    grade: { tag: 'GPA', value: '3.48 / 4' },
    location: 'Kathmandu, Nepal',
    period: 'Jul 2020 – Jun 2022',
    barcode: [2, 5, 1, 4, 3, 2, 6, 1, 3, 5, 2, 1, 4, 3, 1, 5, 2, 3],
    recordId: 'SCI-SXC-22',
    stamp: 'VERIFIED',
    stampColor: 'border-holo-cyan/20',
    stampTextColor: 'text-holo-cyan/20',
    drift: 'animate-drift-3',
  },
  {
    id: 3,
    dossier: 'DOSSIER // SXS-SCHOOL',
    label: 'SECONDARY SCHOOL',
    name: "St. Xavier's School, Jawalakhel",
    degree: 'Science – National Examination Board',
    grade: { tag: 'GPA', value: '3.85 / 4' },
    location: 'Kathmandu, Nepal',
    period: 'Jul 2010 – Jun 2020',
    barcode: [3, 1, 5, 2, 4, 1, 6, 3, 1, 2, 5, 1, 4, 2, 3, 1, 5, 2],
    recordId: 'SCI-SXS-20',
    stamp: 'COMPLETED',
    stampColor: 'border-holo-amber/20',
    stampTextColor: 'text-holo-amber/20',
    drift: 'animate-drift-1',
  },
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const folderVariants = {
    hidden: { opacity: 0, y: 40, rotate: -1.5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: 'spring', damping: 15, stiffness: 80 },
    },
  };

  return (
    <section id="education" className="relative py-24 px-6 flex flex-col justify-center items-center overflow-hidden z-10">

      {/* Decorative vertical line */}
      <div className="absolute top-0 bottom-0 left-[10%] md:left-[15%] w-[1px] border-l border-dashed border-sepia-400/20 pointer-events-none" />

      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Header */}
        <h3 className="font-typewriter text-xs tracking-[0.2em] text-holo-amber uppercase mb-3 glow-text-amber">
          [ ACADEMIC RECORD // ARCHIVE-04 ]
        </h3>
        <h2 className="font-serif text-3xl md:text-5xl text-sepia-100 font-normal italic text-center mb-16">
          Education
        </h2>

        {/* Dossiers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-start select-text"
        >
          {institutions.map((inst) => (
            <motion.div
              key={inst.id}
              variants={folderVariants}
              className={`relative bg-[#ebdcb9] text-sepia-900 rounded-sm border border-sepia-400 p-6 shadow-xl flex flex-col justify-between min-h-[360px] ${inst.drift} cursor-default`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Paper Noise */}
              <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply rounded-sm"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E\")"
                }}
              />

              {/* Folder Tab */}
              <div className="absolute -top-6 left-4 bg-[#dfcfb9] border-t border-x border-sepia-400 px-3 py-1 text-[8px] font-typewriter font-bold text-sepia-650 rounded-t-xs shadow-xs truncate max-w-[80%]">
                {inst.dossier}
              </div>

              {/* Paperclip */}
              <div className="absolute -top-3 right-8 w-4 h-10 border-2 border-sepia-400 rounded-full bg-transparent opacity-60 pointer-events-none rotate-12">
                <div className="absolute inset-1 border border-sepia-500 rounded-full" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start border-b border-sepia-400/40 pb-3 mb-4">
                  <div>
                    <h4 className="font-typewriter text-[9px] text-sepia-500 tracking-widest uppercase mb-1">{inst.label}</h4>
                    <h3 className="font-serif text-base font-bold text-sepia-950 leading-snug">{inst.name}</h3>
                  </div>
                  <Bookmark className="w-4 h-4 text-sepia-600 shrink-0 mt-0.5" />
                </div>

                <div className="space-y-2.5 font-serif text-xs text-sepia-800">
                  <div className="flex items-start gap-2">
                    <span className="font-typewriter text-[9px] text-sepia-500 bg-sepia-400/10 border border-sepia-300 px-1.5 py-0.5 rounded-sm shrink-0">DEGREE</span>
                    <span className="font-semibold text-sepia-900 leading-snug">{inst.degree}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-typewriter text-[9px] text-sepia-500 bg-sepia-400/10 border border-sepia-300 px-1.5 py-0.5 rounded-sm">{inst.grade.tag}</span>
                    <span className="font-semibold text-sepia-900 tracking-wide">{inst.grade.value}</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1 text-sepia-600">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="font-typewriter text-[10px]">{inst.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sepia-600">
                    <Calendar className="w-3 h-3 shrink-0" />
                    <span className="font-typewriter text-[10px]">{inst.period}</span>
                  </div>
                </div>
              </div>

              {/* Archival footer */}
              <div className="border-t border-sepia-400/30 pt-4 mt-6 flex justify-between items-end">
                <div>
                  <p className="font-typewriter text-[7px] text-sepia-500 mb-1">BARCODE SIG.</p>
                  <div className="w-24 h-5 flex gap-0.5 items-stretch opacity-50">
                    {inst.barcode.map((w, idx) => (
                      <div key={idx} className="bg-sepia-950" style={{ width: `${w}px` }} />
                    ))}
                  </div>
                </div>
                <div className="text-right font-typewriter text-[9px] text-sepia-500">
                  {inst.recordId}
                </div>
              </div>

              {/* Faded stamp */}
              <div className={`absolute bottom-10 right-4 w-16 h-16 border-2 border-dashed ${inst.stampColor} rounded-full flex items-center justify-center -rotate-12 pointer-events-none select-none`}>
                <span className={`font-typewriter text-[8px] ${inst.stampTextColor} font-bold text-center leading-tight px-1`}>{inst.stamp}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
