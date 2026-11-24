import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'
const links = [['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Journey', 'journey'], ['Experience', 'experience'], ['Contact', 'contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-ink/80 backdrop-blur-xl">
    <nav className="section-wrap flex h-[76px] items-center justify-between">
      <a href="#home" className="font-display text-xl font-bold tracking-tight text-white">NM<span className="text-violet-400">.</span></a>
      <div className="hidden items-center gap-8 md:flex">{links.map(([label, id]) => <a key={id} className="text-sm text-slate-400 transition hover:text-white" href={`#${id}`}>{label}</a>)}<a href="#contact" className="btn-outline !px-4 !py-2 text-sm">Let's talk <ArrowUpRight size={15}/></a></div>
      <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 text-white md:hidden">{open ? <X/> : <Menu/>}</button>
    </nav>
    {open && <div className="border-t border-white/10 bg-panel px-6 py-5 md:hidden">{links.map(([label, id]) => <a onClick={() => setOpen(false)} key={id} className="block py-3 text-slate-300" href={`#${id}`}>{label}</a>)}</div>}
  </header>
}
