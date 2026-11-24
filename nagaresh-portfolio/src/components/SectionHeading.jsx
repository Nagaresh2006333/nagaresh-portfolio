import { motion } from 'framer-motion'
export default function SectionHeading({ eyebrow, title, description }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .55 }} className="mb-12 max-w-2xl">
    <p className="mb-3 text-xs font-bold uppercase tracking-[.28em] text-violet-300">{eyebrow}</p>
    <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
  </motion.div>
}
