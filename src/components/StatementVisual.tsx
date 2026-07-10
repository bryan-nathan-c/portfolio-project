export default function StatementVisual() {
  return (
    <svg
      className="statement-visual"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="centerGlow">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Horizontal lines */}
      {[60, 90, 120, 150, 180, 210, 240].map((y, i) => (
        <line
          key={y}
          x1="0" y1={y} x2="400" y2={y}
          stroke={i % 2 === 0 ? 'url(#lineGrad1)' : 'url(#lineGrad2)'}
          strokeWidth="1"
          className={`sv-line sv-line-${i % 3}`}
        />
      ))}

      {/* Center burst */}
      <circle cx="200" cy="150" r="60" fill="url(#centerGlow)" />

      {/* Converging lines */}
      {[-60, -30, 0, 30, 60].map((offset, i) => (
        <line
          key={i}
          x1={200 + offset * 3}
          y1="0"
          x2="200"
          y2="150"
          stroke="rgba(139,92,246,0.12)"
          strokeWidth="1"
        />
      ))}
      {[-60, -30, 0, 30, 60].map((offset, i) => (
        <line
          key={i}
          x1={200 + offset * 3}
          y1="300"
          x2="200"
          y2="150"
          stroke="rgba(59,130,246,0.1)"
          strokeWidth="1"
        />
      ))}

      {/* Center dot */}
      <circle cx="200" cy="150" r="4" fill="#8b5cf6" opacity="0.8" className="sv-center-dot" />
      <circle cx="200" cy="150" r="10" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" className="sv-center-ring" />
    </svg>
  )
}
