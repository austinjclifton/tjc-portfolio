import { ChapterScreen } from '../ChapterScreen'
import { portfolio } from '../../data/portfolio'

export function Education() {
  return (
    <div id="education">
      {portfolio.education.map((item) => (
        <ChapterScreen
          key={item.institution}
          title={item.institution}
          theme={item.theme}
          details={[
            { label: 'Degree', value: [item.degree, item.field].filter(Boolean).join(' · ') || 'Degree and field of study' },
            { label: 'Timeline', value: item.dates ?? 'To be confirmed' },
            { label: 'Academic focus', value: item.description ?? 'Add a short note about coursework, interests, or a defining academic experience.' },
            { label: 'Activities', value: item.activities ?? ['Add a club, organization, or leadership role.', 'Add an award, publication, or campus activity.'] },
          ]}
        />
      ))}
    </div>
  )
}
