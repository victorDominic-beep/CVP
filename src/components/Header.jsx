import { Menu, X } from 'lucide-react'
import { Button } from './common'
import { images } from '../assets/images'

const navItems = [
  ['Home', 'top'],
  ['About Us', 'about'],
  ['Services', 'services'],
  ['Pricing', 'process'],
  ['Contact Us', 'contact'],
]

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="CVP home">
      <img src={images.logo} alt="Central Verification Portal" />
    </a>
  )
}

export function Navigation({ menuOpen, onToggle, onNavigate, activePage = 'top' }) {
  return (
    <header className="navbar">
      <Brand />
      <button className="menu-toggle" type="button" onClick={onToggle} aria-label="Toggle navigation">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        {navItems.map(([label, href]) => (
          <a className={activePage === href ? 'active' : ''} key={href} href={href === 'contact' ? '/contact' : href === 'process' ? '/pricing' : `/#${href}`} onClick={onNavigate}>{label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <a href="#contact">Log in</a>
        <Button>Sign up</Button>
      </div>
    </header>
  )
}
