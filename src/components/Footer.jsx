import React from 'react'
import { Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-[#050510] py-12 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(700px_240px_at_80%_10%,rgba(108,155,255,.06),transparent), radial-gradient(600px_220px_at_10%_80%,rgba(124,60,255,.06),transparent)'}} />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-white/60">© {new Date().getFullYear()} Influexa. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="group rounded-full border border-white/10 bg-white/5 p-2 hover:border-white/20 hover:bg-white/10">
              <Twitter className="h-5 w-5 text-white/80 group-hover:text-white" />
            </a>
            <a href="#" aria-label="Instagram" className="group rounded-full border border-white/10 bg-white/5 p-2 hover:border-white/20 hover:bg-white/10">
              <Instagram className="h-5 w-5 text-white/80 group-hover:text-white" />
            </a>
            <a href="#" aria-label="YouTube" className="group rounded-full border border-white/10 bg-white/5 p-2 hover:border-white/20 hover:bg-white/10">
              <Youtube className="h-5 w-5 text-white/80 group-hover:text-white" />
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#influencers" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:border-white/20 hover:bg-white/10">Join as Creator</a>
            <a href="#brands" className="rounded-full bg-gradient-to-r from-[#7c3cff] to-[#00e1ff] px-4 py-2 text-sm font-semibold text-black/90">Join as Brand</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
