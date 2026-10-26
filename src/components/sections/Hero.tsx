import { ArrowDownRight } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
export function Hero() { return <section id="top" className="hero themed-section" data-theme-bg="#F2EFE8" data-theme-fg="#171713">
  <div className="hero-copy" data-reveal><p className="kicker">Independent portfolio · 2026</p><h1><span>Trevor</span><span>Clifton</span></h1><p className="headline">{portfolio.person.headline}</p><p className="intro">{portfolio.person.intro}</p><a className="text-link" href="#about">Begin the story <ArrowDownRight aria-hidden="true" size={18} /></a></div>
  <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Trevor Clifton" data-reveal><div className="portrait-grid" aria-hidden="true" /><div className="portrait-mark" aria-hidden="true">TC</div><p><span>Portrait</span><span>forthcoming</span></p></div>
</section> }
