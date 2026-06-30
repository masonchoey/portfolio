import { useEffect, useState } from 'react'
import {
  profile,
  highlights,
  about,
  experience,
  projects,
  skills,
  education,
} from './data/content.js'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ExternalIcon,
  CodeIcon,
} from './components/Icons.jsx'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function Nav() {
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" aria-label="Home">
          <span className="nav__mark">MC</span>
        </a>
        <nav className="nav__links" aria-label="Section navigation">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'is-active' : ''}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a className="nav__cta" href={profile.links.email}>
          Get in touch
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container">
        <p className="hero__eyebrow">{profile.location} · Open to SWE / ML roles</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">
          {profile.title} <span className="hero__title-accent">· ML Systems &amp; Full-Stack</span>
        </h2>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View projects
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> GitHub
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </div>

        <div className="stats">
          {highlights.map((h) => (
            <div className="stat" key={h.label}>
              <div className="stat__value">{h.value}</div>
              <div className="stat__label">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section__head">
          <span className="section__kicker">{kicker}</span>
          <h2 className="section__title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" kicker="01 — About" title="Engineer who ships ML to production">
      <div className="about">
        <div className="about__body">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="about__card">
          <h3>Education</h3>
          <p className="about__school">{education.school}</p>
          <p className="about__degree">{education.degree}</p>
          <p className="about__detail">{education.detail}</p>
          <div className="about__divider" />
          <h3>Focus areas</h3>
          <ul className="about__focus">
            <li>RAG &amp; retrieval systems</li>
            <li>Multi-agent LLM applications</li>
            <li>Serverless &amp; MLOps on AWS</li>
            <li>Full-stack (FastAPI + React)</li>
          </ul>
        </aside>
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" kicker="02 — Experience" title="Where I've worked">
      <div className="timeline">
        {experience.map((job) => (
          <article className="job" key={job.company + job.period}>
            <div className="job__meta">
              <span className="job__period">{job.period}</span>
              <span className="job__loc">{job.location}</span>
            </div>
            <div className="job__main">
              <h3 className="job__role">{job.role}</h3>
              <p className="job__company">{job.company}</p>
              <ul className="job__points">
                {job.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <div className="tags">
                {job.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" kicker="03 — Projects" title="Things I've built">
      <div className="projects">
        {projects.map((p) => (
          <article className={`project ${p.featured ? 'project--featured' : ''}`} key={p.name}>
            <div className="project__top">
              <h3 className="project__name">{p.name}</h3>
              <span className="project__period">{p.period}</span>
            </div>
            <p className="project__blurb">{p.blurb}</p>
            <div className="tags">
              {p.stack.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <div className="project__links">
              {p.live && (
                <a className="plink plink--accent" href={p.live} target="_blank" rel="noreferrer">
                  <ExternalIcon /> {p.liveLabel || 'Live demo'}
                </a>
              )}
              {p.github && (
                <a className="plink" href={p.github} target="_blank" rel="noreferrer">
                  <CodeIcon /> Source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (<></>
    // <Section id="skills" kicker="04 — Skills" title="Tools I work with">
    //   <div className="skills">
    //     {skills.map((cat) => (
    //       <div className="skillcard" key={cat.group}>
    //         <h3>{cat.group}</h3>
    //         <div className="tags">
    //           {cat.items.map((it) => (
    //             <span className="tag tag--lg" key={it}>
    //               {it}
    //             </span>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" kicker="05 — Contact" title="Let's build something">
      <div className="contact">
        <p className="contact__lead">
          I'm actively looking for software engineering and ML roles. The fastest way to reach me is
          email — happy to talk through any of the work above.
        </p>
        <div className="contact__links">
          <a className="contactbtn" href={profile.links.email}>
            <MailIcon /> {profile.email}
          </a>
          <a className="contactbtn" href={profile.links.github} target="_blank" rel="noreferrer">
            <GitHubIcon /> github.com/masonchoey
          </a>
          <a className="contactbtn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon /> linkedin.com/in/masonchoey
          </a>
        </div>
      </div>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Mason Choey</span>
          <span className="footer__note">Built with React &amp; Vite · Deployed on GitHub Pages</span>
        </div>
      </footer>
    </>
  )
}
