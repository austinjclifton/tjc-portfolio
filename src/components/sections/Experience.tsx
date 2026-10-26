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
            { label: 'What I do', value: item.description ?? 'Add a concise overview of the work, the team, and the day-to-day contribution.' },
            { label: 'Selected focus', value: item.accomplishments ?? ['Add a campaign, launch, or key initiative.', 'Add a measurable result or meaningful outcome.'] },
          ]}
        />
      ))}
    </div>
  )
}
