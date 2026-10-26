import { describe, expect, it } from 'vitest'
import { portfolio } from './portfolio'

describe('portfolio content', () => {
  it('provides editable content scaffolding and keeps project work explicit', () => {
    expect(portfolio.experience).toHaveLength(2)
    expect(portfolio.experience.map((entry) => entry.organization)).toEqual([
      'Dixon Schwabl + Company',
      'Stevens Institute of Technology',
    ])
    expect(portfolio.education[0].institution).toBe('Saint Peter’s University')
    expect(portfolio.experience.every((entry) => entry.title && entry.dates && entry.description && entry.accomplishments?.length)).toBe(true)
    expect(portfolio.education.every((entry) => entry.degree && entry.field && entry.activities?.length)).toBe(true)
    expect(portfolio.projects.every((project) => project.status === 'placeholder')).toBe(true)
    expect(portfolio.contact.email).toBeUndefined()
    expect(portfolio.contact.resume).toBeUndefined()
  })
})
