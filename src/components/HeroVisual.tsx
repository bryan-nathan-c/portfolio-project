export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">

      {/* Blurry orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Dot grid */}
      <svg className="hero-grid" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="dotgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(247,147,26,0.18)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>

      {/* Spinning dashed ring */}
      <svg className="hero-ring" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7931a" stopOpacity="0.7" />
            <stop offset="35%" stopColor="#fbbf24" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f7931a" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <circle cx="350" cy="350" r="300" fill="none" stroke="url(#ringGrad)" strokeWidth="1.5" strokeDasharray="10 18" />
        <circle cx="350" cy="350" r="220" fill="none" stroke="rgba(247,147,26,0.18)" strokeWidth="1" strokeDasharray="4 12" />
        <circle cx="350" cy="350" r="140" fill="none" stroke="rgba(251,191,36,0.12)" strokeWidth="1" />
      </svg>

      {/* Pulsing dots */}
      <svg className="hero-dots" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        {[
          [100, 70], [700, 100], [180, 490], [650, 410],
          [390, 50], [760, 290], [50, 310], [430, 530],
          [280, 155], [570, 195], [140, 360], [710, 450],
          [490, 80], [220, 250], [600, 340],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="2.5"
            fill="#f7931a"
            className={`dot dot-${i % 3}`}
          />
        ))}
      </svg>

      {/* Animated horizontal lines */}
      <svg className="hero-lines" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        {[120, 240, 380, 480].map((y, i) => (
          <line
            key={y}
            x1="0" y1={y} x2="800" y2={y}
            stroke="#f7931a"
            strokeWidth="0.5"
            className={`hline hline-${i % 3}`}
          />
        ))}
      </svg>

    </div>
  )
}
