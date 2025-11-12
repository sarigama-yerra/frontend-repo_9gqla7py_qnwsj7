import React from 'react'
import { motion } from 'framer-motion'

const brands = [
  { name: 'Nebula', tagline: 'Beyond ordinary launches', color: '#7c3cff' },
  { name: 'Aether', tagline: 'Design that breathes', color: '#00e1ff' },
  { name: 'Quanta', tagline: 'Data with soul', color: '#6c9bff' },
  { name: 'Vortex', tagline: 'Motion defines identity', color: '#9b5cff' },
  { name: 'Pulse', tagline: 'Sound of trends', color: '#4ef0ff' },
  { name: 'Orbit', tagline: 'Gravity for growth', color: '#b38bff' }
]

const Brands = () => {
  return (
    <section id="brands" className="relative w-full bg-[#070716] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(700px_240px_at_80%_10%,rgba(108,155,255,.07),transparent), radial-gradient(600px_220px_at_10%_80%,rgba(124,60,255,.07),transparent)'}} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Trusted by Future‑Ready Brands</h2>
          <p className="text-white/60">Hover or tap to reveal their vibe.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1"
            >
              <div className="relative flex h-full w-full items-center justify-center rounded-[14px] bg-[#0b0b16]">
                {/* holographic orb */}
                <div className="absolute inset-6 rounded-full" style={{
                  background: `radial-gradient(circle at 30% 30%, ${b.color}55, transparent 60%), radial-gradient(circle at 70% 70%, #00e1ff44, transparent 60%), radial-gradient(circle at 50% 50%, #ffffff08, transparent 70%)`,
                  boxShadow: `0 0 60px -10px ${b.color}`
                }} />
                <div className="relative z-10 text-center">
                  <p className="text-sm font-semibold tracking-wide">{b.name}</p>
                  <p className="mt-1 text-xs text-white/70">{b.tagline}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
