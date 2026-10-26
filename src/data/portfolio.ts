export type ContentStatus = 'confirmed' | 'placeholder'

export type Theme = { background: string; foreground: string; accent: string; source?: string; logo?: string; logoTone?: 'light' | 'dark' | 'multiply' | 'original'; logoScale?: 'compact' | 'reduced'; verified: boolean }
export type Experience = { organization: string; eyebrow: string; status: ContentStatus; title?: string; dates?: string; description?: string; accomplishments?: string[]; link?: string; theme: Theme }
export type Project = { title: string; category?: string; description?: string; organization?: string; date?: string; images?: { src: string; alt: string }[]; externalLink?: string; outcomes?: string[]; status: ContentStatus }
export type Education = { institution: string; degree?: string; field?: string; dates?: string; status: ContentStatus; theme: Theme }

export const brandSources = {
  geneseo: 'https://www.geneseo.edu/comm_mark/color-palette/',
  saintPeters: 'https://www.saintpeters.edu/wp-content/uploads/blogs.dir/98/files/2013/01/brand.pdf',
  stevens: 'https://www.stevens.edu/page-chapter/branding-resources',
  dsco: 'https://dixonschwabl.com/about/',
}

export const portfolio = {
  person: {
    name: 'Trevor Clifton',
    initials: 'TC',
    headline: 'Marketing & Communications',
    intro: 'A considered home for the work, ideas, and experience behind Trevor’s communications career.',
    biography: undefined as string | undefined,
    portrait: undefined as string | undefined,
  },
  experience: [
    { organization: 'Dixon Schwabl + Company', eyebrow: 'Experience 01', status: 'confirmed', theme: { background: '#D65432', foreground: '#171713', accent: '#F7DDD4', source: brandSources.dsco, logo: 'https://dsco.us-east-1.linodeobjects.com/static/dsco-logo-square-padding.png', logoTone: 'multiply', logoScale: 'reduced', verified: false } },
    { organization: 'Stevens Institute of Technology', eyebrow: 'Experience 02', status: 'confirmed', theme: { background: '#7A2431', foreground: '#FFF9F4', accent: '#E7BEC5', source: brandSources.stevens, logo: 'https://www.stevens.edu/favicon/safari-pinned-tab.svg', logoTone: 'light', verified: false } },
    { organization: "Saint Peter’s University", eyebrow: 'Experience 03', status: 'confirmed', theme: { background: '#003B70', foreground: '#FFFFFF', accent: '#6DB5E7', source: brandSources.saintPeters, logo: 'https://www.saintpeters.edu/wp-content/themes/spc-base-theme/images/favicon/safari-pinned-tab.svg', logoTone: 'light', verified: true } },
  ] as Experience[],
  projects: [
    { title: 'Selected work, coming into focus', category: 'Campaign / project placeholder', description: 'A flexible case-study format ready for the brief, Trevor’s role, the creative response, and the final work.', status: 'placeholder' },
    { title: 'A second story belongs here', category: 'Campaign / project placeholder', description: 'This card is intentionally marked as a design-stage placeholder—not presented as completed client work.', status: 'placeholder' },
  ] as Project[],
  skillCategories: [
    { title: 'Strategy', items: ['Focus areas to confirm', 'Capabilities to confirm', 'Specialties to confirm'] },
    { title: 'Storytelling', items: ['Formats to confirm', 'Channels to confirm', 'Audiences to confirm'] },
    { title: 'Collaboration', items: ['Working style to confirm', 'Team experience to confirm', 'Tools to confirm'] },
  ],
  education: [
    { institution: "Saint Peter’s University", status: 'confirmed', theme: { background: '#E5EFF8', foreground: '#082B4C', accent: '#0072CE', source: brandSources.saintPeters, logo: 'https://www.saintpeters.edu/wp-content/themes/spc-base-theme/images/favicon/safari-pinned-tab.svg', logoTone: 'dark', verified: true } },
    { institution: 'SUNY Geneseo', status: 'confirmed', theme: { background: '#003087', foreground: '#FFFFFF', accent: '#DAAA00', source: brandSources.geneseo, logo: 'https://www.geneseo.edu/wp-content/uploads/2026/07/PrimaryBrandmark_onWhite-2.png', logoTone: 'original', logoScale: 'compact', verified: true } },
  ] as Education[],
  contact: { email: undefined as string | undefined, linkedIn: undefined as string | undefined, otherLinks: [] as { label: string; href: string }[], resume: undefined as string | undefined },
}

export type PortfolioContent = typeof portfolio
