import type { Theme } from '../data/portfolio'

type ChapterDetail = {
  label: string
  value: string
}

type ChapterScreenProps = {
  title: string
  theme: Theme
  details: ChapterDetail[]
}

export function ChapterScreen({ title, theme, details }: ChapterScreenProps) {
  const logoClasses = [
    'brand-watermark',
    theme.logoTone ? `brand-watermark--${theme.logoTone}` : '',
    theme.logoScale ? `brand-watermark--${theme.logoScale}` : '',
  ].filter(Boolean).join(' ')

  return (
    <section
      className="profile-chapter themed-section brand-stage"
      data-theme-bg={theme.background}
      data-theme-fg={theme.foreground}
      style={{ '--accent': theme.accent } as React.CSSProperties}
    >
      {theme.logo && (
        <img
          className={logoClasses}
          src={theme.logo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="chapter-title" data-reveal>
        <h2>{title}</h2>
      </div>
      <div className="chapter-footer" data-reveal>
        <div className="chapter-details">
          {details.map((detail) => (
            <div key={detail.label}>
              <span>{detail.label}</span>
              <p>{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
