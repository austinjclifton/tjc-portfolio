import { ChapterScreen } from '../ChapterScreen'
import { portfolio } from '../../data/portfolio'

export function Experience() {
  return (
    <div id="experience">
      {portfolio.experience.map((item) => (
        <ChapterScreen
          key={item.organization}
          title={item.organization}
          theme={item.theme}
          details={[
            { label: 'Role', value: item.title ?? 'To be confirmed' },
            { label: 'Timeline', value: item.dates ?? 'To be confirmed' },
            { label: 'Story', value: item.description ?? 'Responsibilities and selected achievements will be added here.' },
          ]}
        />
      ))}
    </div>
  )
}
