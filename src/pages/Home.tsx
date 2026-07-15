import { Link } from 'react-router-dom'
import { problems } from '../data/problems'
import './Home.css'

const categoryColors: Record<string, string> = {
  'Test Automation': 'var(--orange)',
  'Build and Dependencies': 'var(--blue)',
  'Mindset': 'var(--purple)',
}

const projects = [
  {
    name: 'bryan-automation-portfolio',
    desc: 'My final project. UI and API testing with a full CI/CD pipeline on GitHub Actions.',
    langColor: 'var(--accent)',
    url: 'https://github.com/bryan-nathan-c/bryan-automation-portfolio',
  },
  {
    name: 'cucumber-selenium-gradle-framework',
    desc: 'BDD testing framework using Selenium. Wrong import took me days to find.',
    langColor: 'var(--accent)',
    url: 'https://github.com/bryan-nathan-c/cucumber-selenium-gradle-framework',
  },
  {
    name: 'gradle-greeting-task',
    desc: 'Getting comfortable writing custom Gradle tasks with CLI params.',
    langColor: 'var(--green)',
    url: 'https://github.com/bryan-nathan-c/gradle-greeting-task',
  },
]

export default function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="hero-dots-bg" />
        <div className="hero-inner">

          {/* Left */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Gap year, Indonesia
            </div>
            <h1 className="hero-title">
              Bryan <span className="hero-title-dim">Nathaniel</span> Chandra
            </h1>
            <p className="hero-sub">
              Spent my gap year learning QA automation at JayJay.
              Hit a lot of walls. Got through all of them.
            </p>
            <div className="hero-links">
              <Link to="/problems" className="link-primary">Case studies</Link>
              <a href="https://github.com/bryan-nathan-c" target="_blank" rel="noreferrer" className="link-ghost">GitHub</a>
              <a href="https://id.linkedin.com/in/bryan-nathaniel-chandraa" target="_blank" rel="noreferrer" className="link-ghost">LinkedIn</a>
            </div>
          </div>

          {/* Right: info cards */}
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-label">Course</div>
              <div className="hero-card-value">JayJay QA Automation</div>
              <div className="hero-card-sub">2025, Indonesia</div>
            </div>
            <div className="hero-card">
              <div className="hero-card-label">Focus</div>
              <div className="hero-card-value hero-card-accent">Problem solving</div>
              <div className="hero-card-sub">3 real case studies documented</div>
            </div>
            <div className="hero-card">
              <div className="hero-card-label">Stack</div>
              <div className="hero-card-value">
                <span className="hero-card-accent">Java</span>
                {' · '}
                <span className="hero-card-blue">Selenium</span>
                {' · '}
                <span className="hero-card-purple">Cucumber</span>
              </div>
              <div className="hero-card-sub">Deployed on Cloudflare</div>
            </div>
            <div className="hero-card">
              <div className="hero-card-label">Goal</div>
              <div className="hero-card-value">Apple Developer Academy</div>
              <div className="hero-card-sub">Learning to build for people, not just systems</div>
            </div>
          </div>

        </div>
      </section>

      <div className="page-body">

        {/* About */}
        <section className="about-section">
          <div className="about-label">
            <h2 className="section-heading">How I got here</h2>
          </div>
          <div className="about-body">
            <p className="about-text">
              I got into computers when I was 7. My mom helped me install games and I just got obsessed
              trying to figure out how everything worked. Eventually I started doing it myself,
              finding files, running installers, fixing things when they broke.
            </p>
            <p className="about-text">
              In elementary school I joined a robotics program called Robotics Education Centre
              where we built smart technology and basic robots. First time I realized building things was fun.
            </p>
            <p className="about-text">
              In middle school I got my own PC. I started exploring GitHub and found all these
              interesting projects people built and shared for free. That kind of blew my mind.
              People just putting their work out there for anyone to use. That was when
              I knew I wanted to do the same thing someday.
            </p>
            <p className="about-text">
              In high school I took IT as my focus and got into coding properly.
              Me and my friends built a small RPG game on Struckd, then a PVP version
              where we could actually play against each other. First time I made something
              other people used.
            </p>
            <p className="about-text">
              The gap year at JayJay was me going deeper. I wanted to understand
              how software actually gets tested and shipped, not just written.
              This site is what came out of that.
            </p>
            <p className="about-text">
              Through all of that I realized I am most alive when I am building something,
              figuring something out, or helping something work better. I want to keep going in that direction,
              and Apple Developer Academy feels like the right place to do it.
            </p>
            <p className="about-text">
              You can reach me on <a href="https://id.linkedin.com/in/bryan-nathaniel-chandraa" target="_blank" rel="noreferrer" style={{color: 'var(--accent)'}}>LinkedIn</a> or check my work on <a href="https://github.com/bryan-nathan-c" target="_blank" rel="noreferrer" style={{color: 'var(--accent)'}}>GitHub</a>.
            </p>
          </div>
        </section>

        {/* Case studies */}
        <section className="list-section">
          <div className="list-header">
            <h2 className="section-heading">Case studies</h2>
            <div />
            <Link to="/problems" className="list-more">View all →</Link>
          </div>
          <div className="list-rows">
            {problems.map((p, i) => (
              <Link to={`/problems/${p.id}`} key={p.id} className="list-row">
                <span className="list-num">0{i + 1}</span>
                <div className="list-row-body">
                  <span className="list-cat" style={{ color: categoryColors[p.category] ?? 'var(--accent)' }}>
                    {p.category}
                  </span>
                  <h3 className="list-title">{p.title}</h3>
                  <p className="list-desc">{p.summary}</p>
                </div>
                <span className="list-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Repos */}
        <section className="list-section">
          <div className="list-header">
            <h2 className="section-heading">Repos</h2>
            <div />
            <div />
          </div>
          <div className="list-rows">
            {projects.map((proj) => (
              <a href={proj.url} target="_blank" rel="noreferrer" key={proj.name} className="list-row">
                <span className="proj-dot" style={{ background: proj.langColor }} />
                <div className="list-row-body">
                  <h3 className="proj-name">{proj.name}</h3>
                  <p className="list-desc">{proj.desc}</p>
                </div>
                <span className="list-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="closing-section">
          <div className="closing-inner">
            <p className="closing-quote">
              "Grit isn't about being fearless. It's about keep going even when you're scared."
            </p>
            <span className="closing-name">bryan nathaniel chandra</span>
          </div>
        </section>

      </div>
    </main>
  )
}
