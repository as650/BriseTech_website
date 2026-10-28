import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const services = [
  { icon: '✳', title: 'AI & Intelligent Solutions', text: 'Practical applications of AI and automation that make workflows smarter, faster, and more helpful.', tag: 'INTELLIGENCE' },
  { icon: '⌘', title: 'Web Development', text: 'Responsive, accessible web experiences built with thoughtful design and modern technologies.', tag: 'DIGITAL EXPERIENCES' },
  { icon: '⌁', title: 'Software Engineering', text: 'Maintainable software that solves real problems and grows with its users.', tag: 'ENGINEERED TO SCALE' },
];
const team = [
  ['Team Member 01','AI & Machine Learning'], ['Team Member 02','Frontend Development'], ['Team Member 03','Backend Development'],
  ['Team Member 04','UI/UX Design'], ['Team Member 05','Software Engineering'], ['Team Member 06','Data & AI'],
  ['Team Member 07','Web Development'], ['Team Member 08','Product & Research'], ['Team Member 09','Engineering & Innovation'],
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [['Services','#services'],['About us','#about'],['Team','#team'],['Projects','#projects'],['Contact','#contact']];
  return <>
    <header className="wrap header"><nav className="nav">
      <a className="brand" href="#home"><img src="/brisetech-logo.png" alt="BriseTech logo"/><span>BriseTech</span></a>
      <div className="navlinks">{links.slice(0,4).map(([label,href])=><a key={href} href={href}>{label}</a>)}</div>
      <a className="button navcta" href="#contact">Let's talk ↗</a>
      <button className="mobilemenu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen?'✕':'☰'}</button>
    </nav>{menuOpen&&<div className="mobilelinks">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}</div>}</header>
    <main>
      <section className="wrap hero" id="home"><div><div className="eyebrow"><i/> Engineering a smarter future</div><h1>Ideas into<br/><span className="gradient">intelligent</span><br/>experiences.</h1><p className="lead">We combine artificial intelligence and modern software engineering to turn ambitious ideas into useful, human-centered digital products.</p><div className="actions"><a className="button" href="#contact">Build with us ↗</a><a className="secondary" href="#services">Explore what we do ↓</a></div><p className="subnote">AI solutions · Web development · Software engineering</p></div><div className="visual" aria-label="Abstract blue technology illustration"><div className="orb"><div className="orbit"/><div className="orbit orbit2"/></div><div className="floatcard fc1"><b>✳ AI-driven thinking</b><small>Turning complexity into clarity</small></div><div className="floatcard fc2"><b>⌘ Built with purpose</b><small>Human-centered by design</small></div></div></section>
      <section className="section" id="services"><div className="wrap"><p className="kicker">What we do</p><h2>Technology with a purpose.</h2><p className="sectionlead">From the first idea to a working product, we build digital solutions designed around real needs.</p><div className="cards">{services.map(s=><article className="card" key={s.title}><div className="ico">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><span className="tag">{s.tag}</span></article>)}</div></div></section>
      <section className="section" id="about"><div className="wrap center"><p className="kicker">Why BriseTech</p><h2>Innovation meets intention.</h2><p className="sectionlead">Great technology isn't just about what it can do. It's about the difference it makes.</p><div className="mv"><article className="card"><div className="ico">◎</div><h3>Our mission</h3><p>To combine strong engineering, creative thinking, and emerging technologies to build reliable, scalable, and meaningful digital products.</p></article><article className="card"><div className="ico">↗</div><h3>Our vision</h3><p>To create technology that moves beyond ideas and prototypes to become a lasting part of how people live, work, and innovate.</p></article></div></div></section>
      <section className="section" id="team"><div className="wrap"><p className="kicker">Meet the people</p><h2>Nine minds. One ambition.</h2><p className="sectionlead">A team of web engineering master's students bringing curiosity, technical skills, and a shared drive to build what's next.</p><div className="teamgrid">{team.map(([name,role],i)=><article className="person" key={name}><div className="photo"><img src={`/team-photos/team-${String(i+1).padStart(2,'0')}.jpg`} alt={name} onError={e=>{e.currentTarget.style.display='none';e.currentTarget.nextSibling.style.display='grid'}}/><span>{String(i+1).padStart(2,'0')}</span></div><div><strong>{name}</strong><small>{role}</small></div></article>)}</div><p className="fine">Replace the sample names and add your photos in <code>public/team-photos/</code> using team-01.jpg through team-09.jpg.</p></div></section>
      <section className="section" id="projects"><div className="wrap"><p className="kicker">Selected work</p><h2>Ideas made tangible.</h2><div className="project"><div><h3>Building what comes next.</h3><p>We are developing thoughtful digital experiences that connect emerging technology with real-world needs. Add your project details here as your portfolio grows.</p><a className="secondary" href="#contact">Discuss a project ↗</a></div><div className="projectart"><span>✳</span></div></div></div></section>
      <section className="section" id="contact"><div className="wrap"><div className="contactbox"><p className="kicker">Let's create together</p><h2>Have an idea in mind?</h2><p className="sectionlead">Let's talk about how engineering and intelligent technology can bring it to life.</p><a className="button" href="mailto:hello@brisetech.com">hello@brisetech.com ↗</a><p className="fine">Update this email address if you use a different contact email.</p></div></div></section>
    </main><footer><div className="wrap foot"><a className="brand footerbrand" href="#home"><img src="/brisetech-logo.png" alt=""/><span>BriseTech</span></a><span>Building Smarter Digital Experiences.</span><span>© {new Date().getFullYear()} BriseTech</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
