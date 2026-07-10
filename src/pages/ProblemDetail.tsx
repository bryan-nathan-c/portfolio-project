import { useParams, Link, Navigate } from 'react-router-dom'
import { problems } from '../data/problems'
import './ProblemDetail.css'

const steps = [
  { key: 'problem' as const, label: 'The Problem', emoji: '01' },
  { key: 'investigation' as const, label: 'What I Tried', emoji: '02' },
  { key: 'solution' as const, label: 'What Fixed It', emoji: '03' },
  { key: 'outcome' as const, label: 'What I Took Away', emoji: '04' },
]

const categoryColors: Record<string, string> = {
  'Test Automation': '#f7931a',
  'Build and Dependencies': '#60a5fa',
  'Mindset': '#c084fc',
}

export default function ProblemDetail() {
  const { id } = useParams<{ id: string }>()
  const problem = problems.find((p) => p.id === id)

  if (!problem) return <Navigate to="/problems" replace />

  const currentIndex = problems.findIndex((p) => p.id === id)
  const prev = problems[currentIndex - 1]
  const next = problems[currentIndex + 1]
  const color = categoryColors[problem.category] ?? '#8b5cf6'

  return (
    <main className="detail-page">

      {/* Back */}
      <div className="detail-back-wrap">
        <Link to="/problems" className="back-link">
          ← Case Studies
        </Link>
      </div>

      {/* Hero header */}
      <div className="detail-hero" style={{ '--accent': color } as React.CSSProperties}>
        <div className="detail-hero-glow" style={{ background: `radial-gradient(ellipse at top, ${color}22 0%, transparent 65%)` }} />
        <div className="detail-hero-content">
          <span className="detail-category" style={{ color }}>{problem.category} / {problem.context}</span>
          <h1 className="detail-title">{problem.title}</h1>
          <p className="detail-summary">{problem.summary}</p>
          <div className="detail-tags">
            {problem.tags.map((tag) => (
              <span key={tag} className="detail-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="detail-body">
        {steps.map(({ key, label, emoji }) => (
          <div key={key} className="step-block">
            <div className="step-num">{emoji}</div>
            <div className="step-content-wrap">
              <h2 className="step-title">{label}</h2>
              <p className="step-body">{problem[key]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nav */}
      <div className="detail-nav">
        {prev ? (
          <Link to={`/problems/${prev.id}`} className="detail-nav-link">
            <span className="detail-nav-dir">← Previous</span>
            <span className="detail-nav-title">{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/problems/${next.id}`} className="detail-nav-link detail-nav-right">
            <span className="detail-nav-dir">Next →</span>
            <span className="detail-nav-title">{next.title}</span>
          </Link>
        ) : <div />}
      </div>

    </main>
  )
}
