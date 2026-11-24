import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 })
  useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth'; return () => { document.documentElement.style.scrollBehavior = 'auto' } }, [])
  return <div className="min-h-screen overflow-hidden bg-ink text-white"><motion.div style={{ scaleX, transformOrigin: '0%' }} className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400" /><Navbar /><main><Hero /><About /><Skills /><Projects /><Journey /><Experience /><Contact /></main></div>
}
