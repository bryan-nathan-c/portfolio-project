import { Link } from 'react-router-dom'
import { problems } from '../data/problems'
import './Home.css'

const categoryColors: Record<string, string> = {
  'Test Automation': '#f7931a',
  'Build and Dependencies': '#60a5fa',
  'Mindset': '#c084fc',
}

const projects = [
  {
    name: 'bryan-automation-portfolio',
    desc: 'Final project. UI + API testing, GitHub Actions CI/CD. Took a few weeks and broke more times than I can remember.',
    langColor: '#f59e0b',
    url: 'https://github.com/bryan-nathan-c/bryan-automation-portfolio',
  },
  {
    name: 'cucumber-selenium-gradle-framework',
    desc: 'BDD framework with Selenium. This is the one where the import was pointing at the wrong repo for days.',
    langColor: '#f59e0b',
    url: 'https://github.com/bryan-nathan-c/cucumber-selenium-gradle-framework',
  },
  {
    name: 'gradle-greeting-task',
    desc: 'Small one. Just me getting used to writing custom Gradle tasks with CLI params.',
    langColor: '#22c55e',
    url: 'https://github.com/bryan-nathan-c/gradle-greeting-task',
  },
]

export default function Home() {
  return (
    <main className="home">

      {/* Hero — full width with glow */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-content">
          <span className="hero-tag">What did my gap year teach me?</span>
          <h1 className="hero-title">Learning by doing</h1>
          <p className="hero-sub">
            Spent my gap year learning QA automation at JayJay. Hit a lot of walls.
            Got through all of them. This site is the honest version of that.
          </p>
          <div className="hero-links">
            <Link to="/problems" className="link-primary">case studies →</Link>
            <a href="https://github.com/bryan-nathan-c" target="_blank" rel="noreferrer" className="link-plain">GitHub</a>
            <a href="https://id.linkedin.com/in/bryan-nathaniel-chandraa" target="_blank" rel="noreferrer" className="link-plain">LinkedIn</a>
          </div>
        </div>
      </section>

      <div className="page-body">

        {/* Divider quote */}
        <section className="divider-section">
          <p className="divider-text">
            When I hit a wall, I ask around, look things up, and work through it with whoever can help.
            Sometimes that means my mentor, sometimes AI, sometimes just talking it through with someone.
            I figure things out, but I have never done it alone.
          </p>
        </section>

        {/* Backstory */}
        <section className="about-section">
          <h2 className="section-heading">How I got here</h2>
          <p className="about-text">
            I got into computers when I was 7. My mom helped me install games and I just got obsessed
            trying to figure out how everything worked. Eventually I started doing it myself,
            finding files, running installers, fixing things when they broke.
          </p>
          <p className="about-text">
            In elementary school I joined a robotics program called Robotics Education Centre
            where we built smart technology and basic robots. That was the first time I realized
            building things was actually fun.
          </p>
          <p className="about-text">
            In middle school I got my own PC. I started exploring GitHub and found all these
            interesting projects people had built and shared for free. That kind of blew my mind
            a little. People just putting their work out there for anyone to use. That was when
            I knew I wanted to do the same thing someday.
          </p>
          <p className="about-text">
            In high school I took IT as my focus and got into coding properly.
            Me and my friends built a small RPG game on Struckd, then a PVP version
            where we could actually play against each other. First time I made something
            other people used.
          </p>
          <p className="about-text">
            The gap year at JayJay was me going deeper into that. I wanted to understand
            how software actually gets tested and shipped, not just written.
            This site is what came out of that.
          </p>
        </section>

        {/* Case studies */}
        <section className="list-section">
          <div className="list-header">
            <h2 className="section-heading">Case studies</h2>
            <Link to="/problems" className="list-more">see all</Link>
          </div>
          {problems.map((p, i) => (
            <Link to={`/problems/${p.id}`} key={p.id} className="list-row">
              <span className="list-num">0{i + 1}</span>
              <div className="list-row-body">
                <span className="list-cat" style={{ color: categoryColors[p.category] ?? '#a78bfa' }}>
                  {p.category}
                </span>
                <h3 className="list-title">{p.title}</h3>
                <p className="list-desc">{p.summary}</p>
              </div>
              <span className="list-arrow">→</span>
            </Link>
          ))}
        </section>

        {/* Repos */}
        <section className="list-section">
          <div className="list-header">
            <h2 className="section-heading">Repos</h2>
          </div>
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
        </section>

        {/* Closing */}
        <section className="closing-section">
          <p className="closing-quote">
            "Grit isn't about being fearless. It's about keep going even when you're scared."
          </p>
          <span className="closing-name">bryan nathaniel chandra</span>
        </section>

      </div>

    </main>
  )
}
