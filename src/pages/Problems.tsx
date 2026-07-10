import { useState } from 'react'
import { Link } from 'react-router-dom'
import { problems } from '../data/problems'
import './Problems.css'

const categoryColors: Record<string, string> = {
  'Test Automation': '#f59e0b',
  'Build and Dependencies': '#3b82f6',
  'Mindset': '#8b5cf6',
}

export default function Problems() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...new Set(problems.map((p) => p.category))]

  const filtered = problems.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const q = search.toLowerCase()
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    return matchesCategory && matchesSearch
  })

  return (
    <main className="problems-page">

      <div className="problems-hero">
        <p className="problems-eyebrow">// case studies</p>
        <h1 className="problems-title">The walls I hit.<br />How I got through.</h1>
        <p className="problems-subtitle">
          All from my gap year at JayJay. Written down honestly, confusion and all.
        </p>
      </div>

      <div className="problems-body">
        <div className="problems-filters">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pill ${activeCategory === cat ? 'pill-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="results-count">{filtered.length} {filtered.length === 1 ? 'story' : 'stories'}</p>

        {filtered.length === 0 ? (
          <div className="no-results">
            <p>Nothing matches that search.</p>
          </div>
        ) : (
          <div className="problems-list">
            {filtered.map((p) => (
              <Link to={`/problems/${p.id}`} key={p.id} className="problem-row">
                <span className="problem-row-num">0{problems.indexOf(p) + 1}</span>
                <div className="problem-row-body">
                  <div className="problem-row-top">
                    <span
                      className="problem-row-category"
                      style={{ color: categoryColors[p.category] ?? '#8b5cf6' }}
                    >
                      {p.category}
                    </span>
                    <span className="problem-row-date">{p.date}</span>
                  </div>
                  <h2 className="problem-row-title">{p.title}</h2>
                  <p className="problem-row-summary">{p.summary}</p>
                  <div className="problem-row-tags">
                    {p.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="problem-row-arrow">→</span>
              </Link>
            ))}
          </div>
        )}
      </div>

    </main>
  )
}
