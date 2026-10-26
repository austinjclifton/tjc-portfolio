import { useRef } from 'react'
import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { useScrollThemes, useSectionReveals } from './hooks/useScrollThemes'

export default function App() {
  const container = useRef<HTMLElement>(null)
  const backdrop = useRef<HTMLDivElement>(null)
  useScrollThemes(container, backdrop)
  useSectionReveals(container)
  return <><a className="skip-link" href="#about">Skip to content</a><div className="page-backdrop" ref={backdrop} aria-hidden="true" /><Header /><main ref={container}><Hero /><About /><Experience /><Education /><Projects /><Skills /><Contact /></main></>
}
