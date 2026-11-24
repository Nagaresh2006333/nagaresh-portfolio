export const profile = {
  name: 'Nagaresh M',
  shortName: 'NM',
  role: 'Computer Science Engineering Student',
  headline: 'Building useful things with code.',
  location: 'Karnataka, India',
  email: 'nagareshnaveen@gmail.com', // Replace with your professional email
  github: 'https://github.com/Nagaresh2006333', // Replace with your GitHub URL
  linkedin: 'https://www.linkedin.com/in/nagaresh-m-47bb23335/', // Replace with your LinkedIn URL
  resume: '/resume.pdf',
  intro: 'I am a Computer Science Engineering student who enjoys turning ideas into practical software. I am especially interested in full-stack development, artificial intelligence and solving real-world problems through technology.'
}

export const skills = [
  { category: 'Programming', items: ['C', 'Java', 'Python', 'JavaScript'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Bootstrap'] },
  { category: 'Backend', items: ['Spring Boot', 'REST APIs', 'Flask'] },
  { category: 'Database & Tools', items: ['MySQL', 'Git', 'GitHub', 'Postman', 'IntelliJ IDEA'] },
  { category: 'Exploring', items: ['Machine Learning', 'AI', 'DSA', 'Cybersecurity'] }
]

export const projects = [
  {
    title: 'MedCare Pharmacy', status: 'Completed', category: 'Full-stack application',
    description: 'A pharmacy management web application with medicine browsing, user accounts, order management and admin workflows.',
    stack: ['React', 'Spring Boot', 'MySQL', 'JWT'],
    highlights: ['Role-based authentication', 'Medicine and order management', 'REST API integration'],
    github: 'https://github.com/yourusername/medcare-pharmacy', live: '', accent: 'from-violet-500/20 to-fuchsia-500/10'
  },
  {
    title: 'ATM Sentinel', status: 'In development', category: 'FinTech / Backend',
    description: 'An advanced ATM simulation concept focused on secure transactions, fraud detection, cash management and ATM health monitoring.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Python'],
    highlights: ['Transaction processing', 'Rule-based fraud detection', 'ATM cash and health monitoring'],
    github: 'https://github.com/yourusername/atm-sentinel', live: '', accent: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    title: 'Agro AI', status: 'Planned', category: 'AI / Machine Learning',
    description: 'An agriculture-focused AI project to identify crop diseases from images and recommend suitable treatments.',
    stack: ['Python', 'Machine Learning', 'React'],
    highlights: ['Crop disease identification', 'Fertilizer and pesticide suggestions', 'Treatment recommendations'],
    github: 'https://github.com/yourusername/agro-ai', live: '', accent: 'from-emerald-500/20 to-lime-500/10'
  },
  {
    title: 'Waste Recycling Management', status: 'Planning', category: 'Web application',
    description: 'A community platform concept to coordinate waste collection and connect reusable materials with recycling opportunities.',
    stack: ['Python', 'Flask', 'MySQL'],
    highlights: ['Community waste collection', 'Recycling marketplace concept', 'Collection workflow management'],
    github: 'https://github.com/yourusername/waste-recycling', live: '', accent: 'from-amber-500/20 to-orange-500/10'
  }
]

export const education = [
  { period: '2026 — Present', degree: 'B.E. in Computer Science & Engineering', institution: 'RV Institute of Technology and Management', detail: 'Lateral-entry student · VTU' },
  { period: 'Completed', degree: 'Diploma in Computer Science & Engineering', institution: 'JSS Polytechnic, Nanjangud', detail: 'Diploma completed · CGPA: 8.06' },
  { period: 'Completed', degree: 'SSLC', institution: 'jawahar english medium high school gundlupete ', detail: 'SSCL completed · 76.16%' }
]

export const certifications = [
  { name: 'Python Essentials 1', issuer: 'Cisco Networking Academy', detail: 'Foundational Python programming certification', year: 'Completed' },
  { name: 'More certifications coming soon', issuer: 'Continuous learning', detail: 'Add your certificate title, issuer and credential link here.', year: 'In progress' }
]

export const learning = ['Data Structures & Algorithms', 'Advanced Java and Spring Boot', 'Python programming', 'AI & Machine Learning', 'Building and deploying real-world projects']

export const achievements = [
  { title: 'Diploma in Computer Science', detail: 'Completed a diploma in CSE before entering the BE programme through lateral entry.' },
  { title: 'Hands-on project development', detail: 'Built and explored full-stack application workflows using React, Spring Boot and MySQL.' },
  { title: 'Continuous technical learning', detail: 'Practising programming and expanding skills across software development and AI.' }
]
