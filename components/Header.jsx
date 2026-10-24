const baseUrl = import.meta.env.BASE_URL

const links = [
  ['About', `${baseUrl}#about`],
  ['Projects', `${baseUrl}#/projects`],
  ['Contact', `${baseUrl}#contact`],
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#242323] text-[#f4f0e9]">
      <div className="section-wrap flex items-center justify-between py-6">
        <a href={baseUrl} className="text-lg font-bold">UX Portfolio</a>
        <nav aria-label="Primary navigation" className="header-links flex gap-5">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
    </header>
  )
}