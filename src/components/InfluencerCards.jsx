import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const sampleCreators = [
  { name: 'NovaKai', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop', followers: '1.2M', engagement: '6.4%', niche: 'Tech + Gaming' },
  { name: 'AstraLyra', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop', followers: '820K', engagement: '7.1%', niche: 'Beauty + Lifestyle' },
  { name: 'PixelVoyager', img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop', followers: '540K', engagement: '5.2%', niche: 'Travel + Photo' },
  { name: 'EchoRift', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop', followers: '1.8M', engagement: '4.9%', niche: 'Auto + Gadgets' },
  { name: 'LunaVibe', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop', followers: '950K', engagement: '6.8%', niche: 'Wellness + Yoga' },
  { name: 'NeonNomad', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop', followers: '410K', engagement: '8.1%', niche: 'Food + Street' },
  { name: 'GlitchMuse', img: 'https://images.unsplash.com/photo-1520975730399-4da5b53da527?q=80&w=1200&auto=format&fit=crop', followers: '1.1M', engagement: '5.7%', niche: 'Art + Fashion' },
  { name: 'OrbitZen', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop', followers: '670K', engagement: '6.0%', niche: 'Productivity' },
  { name: 'VantaWave', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop', followers: '300K', engagement: '7.9%', niche: 'Streetwear' },
  { name: 'CosmoFlux', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop', followers: '2.3M', engagement: '4.1%', niche: 'Science + Ed' }
]

const InfluencerCard = ({ creator, index }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group [perspective:1000px]"
    >
      <div className="relative h-64 w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-[2px] shadow-[0_0_40px_-10px_#7c3cff]">
        <div className="relative h-full w-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-500 group-active:[transform:rotateY(180deg)] group-[.flipped]:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
            <img src={creator.img} alt={creator.name} className="h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />
            <div className="absolute inset-0 mix-blend-overlay" style={{ background: 'radial-gradient(1200px 300px at -10% -20%, rgba(124,60,255,.25), transparent), radial-gradient(1000px 200px at 120% 120%, rgba(0,225,255,.2), transparent)' }} />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <div>
                <p className="text-sm text-white/70">{creator.niche}</p>
                <h3 className="text-xl font-bold">{creator.name}</h3>
              </div>
              <Sparkles className="h-5 w-5 text-[#7c3cff]" />
            </div>
          </div>
          {/* Back */}
          <div className="absolute inset-0 rounded-2xl bg-[#0b0b16] p-4 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-[#9b5cff] to-[#00e1ff] bg-clip-text text-transparent">{creator.name}</h3>
                <p className="mt-2 text-sm text-white/70">{creator.niche}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-white/60">Followers</p>
                  <p className="text-lg font-semibold">{creator.followers}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-white/60">Engagement</p>
                  <p className="text-lg font-semibold">{creator.engagement}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const InfluencerCards = () => {
  const creators = useMemo(() => sampleCreators, [])

  const shuffle = () => {
    const grid = document.getElementById('creator-grid')
    if (!grid) return
    grid.animate([
      { filter: 'brightness(1) blur(0px)' },
      { filter: 'brightness(1.6) blur(2px)' },
      { filter: 'brightness(1) blur(0px)' }
    ], { duration: 600, easing: 'cubic-bezier(.22,.61,.36,1)' })
    // randomly toggle flipped state for fun
    grid.querySelectorAll('.group').forEach((el) => {
      if (Math.random() > 0.6) el.classList.toggle('flipped')
    })
  }

  return (
    <section id="influencers" className="relative w-full bg-[#050510] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(600px 200px at 10% 10%, rgba(124,60,255,.12), transparent), radial-gradient(500px 180px at 90% 90%, rgba(0,225,255,.1), transparent)'}}/>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Creators</h2>
            <p className="text-white/60">Tap to flip cards. Five per row on desktop.</p>
          </div>
          <button onClick={shuffle} className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold">
            <span className="absolute inset-0 -z-0 bg-[radial-gradient(120px_40px_at_var(--x,50%)_50%,rgba(124,60,255,.35),transparent)] transition-[--x] duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#9b5cff]" /> Shuffle Cards
            </span>
          </button>
        </div>

        <div id="creator-grid" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {creators.map((c, i) => (
            <InfluencerCard key={i} creator={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfluencerCards
