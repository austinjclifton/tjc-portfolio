import { describe, expect, it } from 'vitest'
import { portfolio } from './portfolio'

describe('portfolio content', () => {
  it('keeps unknown career details empty and placeholder work explicit', () => {
    expect(portfolio.experience).toHaveLength(2)
    expect(portfolio.experience.map((entry) => entry.organization)).toEqual([
      'Dixon Schwabl + Company',
      'Stevens Institute of Technology',
    ])
    expect(portfolio.education[0].institution).toBe('Saint Peter’s University')
    expect(portfolio.experience.every((entry) => !entry.title && !entry.dates)).toBe(true)
    expect(portfolio.projects.every((project) => project.status === 'placeholder')).toBe(true)
    expect(portfolio.contact.email).toBeUndefined()
    expect(portfolio.contact.resume).toBeUndefined()
  })
})
