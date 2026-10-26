import { ChapterScreen } from '../ChapterScreen'
import { portfolio } from '../../data/portfolio'

export function Education() {
  return (
    <div id="education">
      {portfolio.education.map((item, index) => (
        <ChapterScreen
          key={item.institution}
          eyebrow={`Education ${String(index + 1).padStart(2, '0')}`}
          title={item.institution}
          theme={item.theme}
          details={[
            { label: 'Degree', value: item.degree ?? 'To be confirmed' },
            { label: 'Timeline', value: item.dates ?? 'To be confirmed' },
            { label: 'Story', value: item.field ?? 'Academic focus and milestones will be added here.' },
          ]}
        />
      ))}
    </div>
  )
}
