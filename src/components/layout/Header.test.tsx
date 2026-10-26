import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('exposes an accessible mobile menu and all section links', () => {
    render(<Header />)
    const menu = screen.getByRole('button', { name: /menu/i })
    expect(menu).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(menu)
    expect(menu).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'experience' })).toHaveAttribute('href', '#experience')
    expect(screen.getAllByRole('link')).toHaveLength(7)
  })
})
