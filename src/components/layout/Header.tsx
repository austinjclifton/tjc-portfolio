import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolio } from '../../data/portfolio'

export function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => { const close = () => setOpen(false); window.addEventListener('hashchange', close); return () => window.removeEventListener('hashchange', close) }, [])
  return <header className="site-header">
    <a className="monogram" href="#top" aria-label="Trevor Clifton, back to top">{portfolio.person.initials}</a>
    <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="site-navigation"><span>{open ? 'Close' : 'Menu'}</span>{open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}</button>
    <nav id="site-navigation" className={open ? 'nav is-open' : 'nav'} aria-label="Primary navigation">{portfolio.navigation.map((item) => <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>{item}</a>)}</nav>
  </header>
}
