import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)
type ThemeStop = { element: HTMLElement; top: number; background: string; foreground: string }
const readTheme = (element: HTMLElement) => ({ background: element.dataset.themeBg ?? '#F2EFE8', foreground: element.dataset.themeFg ?? '#171713' })

export function useScrollThemes(container: RefObject<HTMLElement | null>, backdrop: RefObject<HTMLDivElement | null>) {
  useGSAP(() => {
    const root = document.documentElement
    const layer = backdrop.current
    if (!layer || !container.current) return
    const sections = gsap.utils.toArray<HTMLElement>('[data-theme-bg]', container.current)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stops: ThemeStop[] = []
    const setTheme = (background: string, foreground: string) => {
      layer.style.backgroundColor = background
      root.style.setProperty('--page-fg', foreground)
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background)
    }
    const measure = () => { stops = sections.map((element) => ({ element, top: element.offsetTop, ...readTheme(element) })) }
    const render = () => {
      if (!stops.length) return
      const position = window.scrollY + window.innerHeight * 0.42
      let index = 0
      stops.forEach((stop, stopIndex) => { if (stop.top <= position) index = stopIndex })
      const current = stops[index]
      const next = stops[Math.min(index + 1, stops.length - 1)]
      const span = Math.max(next.top - current.top, 1)
      const raw = (position - current.top) / span
      const progress = current === next ? 0 : gsap.utils.clamp(0, 1, (raw - 0.62) / 0.28)
      setTheme(gsap.utils.interpolate(current.background, next.background, progress), progress > 0.5 ? next.foreground : current.foreground)
    }
    measure()
    if (reduced) { const initial = readTheme(sections[0]); setTheme(initial.background, initial.foreground); return }
    const trigger = ScrollTrigger.create({ trigger: container.current, start: 'top top', end: 'bottom bottom', onUpdate: render, onRefreshInit: measure, onRefresh: render })
    render()
    window.addEventListener('hashchange', render)
    window.addEventListener('popstate', render)
    return () => { trigger.kill(); window.removeEventListener('hashchange', render); window.removeEventListener('popstate', render) }
  }, { scope: container, dependencies: [] })
}

export function useSectionReveals(container: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.utils.toArray<HTMLElement>('[data-reveal]', container.current).forEach((element) => {
      gsap.fromTo(element, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } })
    })
  }, { scope: container, dependencies: [] })
}
