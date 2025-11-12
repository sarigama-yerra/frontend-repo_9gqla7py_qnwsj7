import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#050510] text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050510]/30 via-[#050510]/50 to-[#050510]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur"
        >
          Influexa • Creator x Brand Network
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-r from-[#9b5cff] via-[#6c9bff] to-[#7af3ff] bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Where Influence Meets Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          Match visionary brands with next‑gen creators through data‑driven collaborations and cinematic storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#influencers"
            className="group relative rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7c3cff] to-[#00e1ff] opacity-80 blur transition-all duration-300 group-hover:opacity-100" />
            <span className="relative z-10">Work with Creators</span>
          </a>
          <a
            href="#brands"
            className="group relative rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            <span className="relative z-10">Partner as Brand</span>
          </a>
        </motion.div>
      </div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#7c3cff]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00e1ff]/20 blur-3xl" />
    </section>
  )
}

export default Hero
