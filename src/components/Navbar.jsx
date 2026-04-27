import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const debtSolutionsLinks = [
  { label: 'Individual Voluntary Arrangement', path: '/debt-solutions/iva' },
  { label: 'Debt Management Plan (DMP)', path: '/debt-solutions/dmp' },
  { label: 'Debt Relief Order (DRO)', path: '/debt-solutions/dro' },
  { label: 'Bankruptcy', path: '/debt-solutions/bankruptcy' },
]

const WHATSAPP_NUMBER = '447700000000'

const WhatsAppIcon = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0zm0 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm5.422-7.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
  </svg>
)

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
)

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropOpen, setMobileDropOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
    setMobileDropOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <>
      <nav className="navbar">

        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="Be Debt Free" />
        </Link>

        <ul className="navbar-links">
          <li className="dropdown" ref={dropdownRef}>
            <button
              className={`dropdown-toggle${dropdownOpen ? ' open' : ''}`}
              onClick={() => setDropdownOpen(p => !p)}
            >
              Debt Solutions
              <ChevronIcon />
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {debtSolutionsLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* <li>
            <a href="#" onClick={e => e.preventDefault()} style={{ opacity: 0.45, cursor: 'default' }}>
              Blog
            </a>
          </li> */}

          <li>
            <Link to="/how-it-works">How it Works</Link>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href={waLink} target="_blank" rel="noreferrer" className="navbar-wa" aria-label="WhatsApp">
            <WhatsAppIcon width={24} height={24} />
          </a>

          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button
          className="mobile-dropdown-toggle"
          onClick={() => setMobileDropOpen(p => !p)}
        >
          Debt Solutions {mobileDropOpen ? '▲' : '▼'}
        </button>

        {mobileDropOpen && (
          <div className="mobile-submenu">
            {debtSolutionsLinks.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        )}

        <a href="#" onClick={e => e.preventDefault()} style={{ opacity: 0.45, cursor: 'default' }}>
          Blog
        </a>

        <Link to="/how-it-works">How it Works</Link>

        <div className="mobile-wa-row">
          <a href={waLink} target="_blank" rel="noreferrer" className="mobile-wa-btn">
            <WhatsAppIcon width={18} height={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  )
}