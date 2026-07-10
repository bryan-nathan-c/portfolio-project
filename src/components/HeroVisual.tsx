export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Animated grid */}
      <svg className="hero-grid" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Glowing ring */}
      <svg className="hero-ring" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r="240" fill="none" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="6 14" />
        <circle cx="300" cy="300" r="180" fill="none" stroke="rgba(247,147,26,0.05)" strokeWidth="1" />
        <circle cx="300" cy="300" r="120" fill="none" stroke="rgba(251,191,36,0.04)" strokeWidth="1" />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7931a" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f7931a" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating dots */}
      <svg className="hero-dots" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        {[
          [120, 80], [680, 120], [200, 480], [640, 420],
          [380, 60], [740, 300], [60, 300], [420, 520],
          [300, 160], [560, 200],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="2"
            fill="rgba(247,147,26,0.5)"
            className={`dot dot-${i % 3}`}
          />
        ))}
      </svg>
    </div>
  )
}
