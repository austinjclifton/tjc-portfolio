import { ArrowUpRight, Download } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

function LinkedInMark() {
  return (
    <svg className="linkedin-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04s-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45A1.76 1.76 0 0 0 24 22.27V1.73A1.76 1.76 0 0 0 22.23 0Z" />
    </svg>
  )
}

export function Contact() {
  const { contact } = portfolio

  return (
    <section id="contact" className="contact themed-section" data-theme-bg="#171713" data-theme-fg="#F5F1E8">
      <div className="section-number">06 / Contact</div>
      <div className="contact-main" data-reveal>
        <p className="kicker">The next conversation</p>
        <h2>Let’s make<br /><em>something clear.</em></h2>
      </div>
      <div className="contact-actions" data-reveal>
        <p>Connect with Trevor on LinkedIn. Additional contact details will be added here when available.</p>
        {contact.email ? <a href={`mailto:${contact.email}`}>Email Trevor <ArrowUpRight size={17} /></a> : <span className="disabled-action" aria-disabled="true">Email unavailable <ArrowUpRight size={17} /></span>}
        {contact.linkedIn ? (
          <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">
            <span className="contact-link-label"><LinkedInMark />LinkedIn</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        ) : <span className="disabled-action" aria-disabled="true">LinkedIn unavailable <ArrowUpRight size={17} /></span>}
        {contact.resume ? <a href={contact.resume} download>Download résumé <Download size={17} /></a> : <span className="disabled-action" aria-disabled="true">Résumé forthcoming <Download size={17} /></span>}
      </div>
      <footer><p>Trevor Clifton · Marketing &amp; Communications</p><a href="#top">Back to top ↑</a></footer>
    </section>
  )
}
