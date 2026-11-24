import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { profile } from '../data/portfolio'
export default function Hero() {
  return <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
    <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" /><div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
    <div className="section-wrap grid items-center gap-14 py-20 lg:grid-cols-[1.2fr_.8fr]">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-violet-200"><Sparkles size={14} /> OPEN TO LEARNING & OPPORTUNITIES</div>
        <p className="mb-4 text-lg text-slate-400">Hello, I'm</p>
        <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">Nagaresh <span className="gradient-text">M.</span></h1>
        <div className="mt-6 min-h-[36px] text-xl font-semibold text-slate-300 sm:text-2xl"><TypeAnimation sequence={['Computer Science Student', 1800, 'Software Developer', 1800, 'Aspiring AI Engineer', 1800]} wrapper="span" speed={45} repeat={Infinity} /></div>
        <p className="mt-6 max-w-xl leading-8 text-slate-400">{profile.intro}</p>
        <div className="mt-9 flex flex-wrap gap-3"><a className="btn-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="btn-outline" href={profile.resume} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16} /></a></div>
        <div className="mt-10 flex items-center gap-5 text-slate-400"><a aria-label="GitHub" className="social-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={19} /></a><a aria-label="LinkedIn" className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} /></a><a aria-label="Email" className="social-link" href={`mailto:${profile.email}`}><Mail size={19} /></a><span className="ml-2 text-xs tracking-wide">{profile.location}</span></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[390px]">
        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20 blur-2xl" />
        <div className="relative rounded-[2rem] border border-white/10 bg-white/[.04] p-3 shadow-glow backdrop-blur"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-violet-500/20 to-slate-800"><div className="absolute inset-0 flex items-center justify-center text-center" aria-hidden="true"><div><div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 font-display text-4xl font-bold text-white">NM</div><p className="text-sm text-slate-300">Add your profile photo</p><p className="mt-1 text-xs text-slate-500">public/profile.jpg</p></div></div><img src="/profile.jpg" alt="Nagaresh M profile" className="absolute inset-0 h-full w-full object-cover" onError={(e) => e.currentTarget.remove()} /></div></div>
        <div className="absolute -bottom-5 -left-8 rounded-2xl border border-white/10 bg-panel/95 px-5 py-4 shadow-xl"><p className="font-display text-2xl font-bold text-white">4<span className="text-violet-400">+</span></p><p className="text-xs text-slate-400">Projects explored</p></div><div className="absolute -right-5 top-10 rounded-2xl border border-white/10 bg-panel/95 px-4 py-3 shadow-xl"><p className="text-xs text-slate-400">Currently exploring</p><p className="mt-1 text-sm font-semibold text-cyan-300">AI + Full Stack</p></div>
      </motion.div>
    </div>
    <a href="#about" aria-label="Scroll to about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-white sm:block"><ArrowDown className="animate-bounce" size={20} /></a>
  </section>
}
