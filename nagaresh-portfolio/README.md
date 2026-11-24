# Nagaresh M — Personal Portfolio

A responsive dark developer portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## 1. Requirements
- Node.js 18 or newer
- npm

## 2. Install and run
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## 3. Personalize before publishing
1. Replace `public/profile.jpg` with your own profile photo. Keep the filename `profile.jpg`.
2. Put your resume PDF at `public/resume.pdf`.
3. Edit `src/data/portfolio.js` to update your email, GitHub, LinkedIn, project repository links, project status, education and certificates.
4. Check every claim and project status. Keep planned projects clearly marked as planned/in development until they are ready.
5. Replace placeholder repository URLs (`yourusername`) with your real links.

## 4. Build for production
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## 5. Deploy on Vercel
1. Push this project to a GitHub repository.
2. Sign in to Vercel and import that repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Every new push to the connected branch can trigger a redeployment.

## Notes
- The contact CTA uses `mailto:`; it opens the visitor's email application. It does not store messages. Add a form service or backend later if you need message submissions.
- The resume link expects `public/resume.pdf`.
- The site currently uses editable starter content based on the details provided. Verify dates, CGPA, links and certification details before making the site public.
