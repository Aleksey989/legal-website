import React, { useState } from 'react'

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? 'navbar-scrolled shadow' : ''
      }`}
      style={{
        backgroundColor: scrolled ? '#1a237e' : 'transparent',
        transition: 'all 0.3s ease',
        padding: '1rem 0',
      }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#hero"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          <i className="bi bi-bank2 me-2" style={{ color: '#d4af37' }}></i>
          Правовая Защита
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ borderColor: '#fff' }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'brightness(0) invert(1)' }}></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          style={{ backgroundColor: scrolled ? '#1a237e' : 'transparent' }}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {['Главная', 'Услуги', 'О нас', 'Команда', 'Отзывы', 'Запись', 'Оплата', 'Контакты'].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link"
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  style={{
                    color: '#fff',
                    marginLeft: '1rem',
                    fontWeight: '500',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                  onMouseLeave={(e) => (e.target.style.color = '#fff')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#запись"
            className="btn ms-lg-3 mt-3 mt-lg-0"
            style={{
              backgroundColor: '#d4af37',
              color: '#1a237e',
              fontWeight: '600',
              border: 'none',
              padding: '0.5rem 1.5rem',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#c5a028'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#d4af37'
            }}
          >
            Консультация
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
