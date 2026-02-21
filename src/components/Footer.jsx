import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer style={{ backgroundColor: '#0d1442', color: '#fff' }}>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="mb-4">
              <a
                className="d-flex align-items-center text-decoration-none"
                href="#главная"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  color: '#fff',
                }}
              >
                <i className="bi bi-bank2 me-2" style={{ color: '#d4af37' }}></i>
                Правовая Защита
              </a>
            </div>
            <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
              Профессиональная юридическая компания с многолетним опытом работы.
              Защищаем ваши права и интересы с 2009 года.
            </p>
            <div className="d-flex gap-3">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: '#fff' }}
                onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                onMouseLeave={(e) => (e.target.style.color = '#fff')}
              >
                <i className="bi bi-telegram" style={{ fontSize: '1.3rem' }}></i>
              </a>
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: '#fff' }}
                onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                onMouseLeave={(e) => (e.target.style.color = '#fff')}
              >
                <i className="bi bi-whatsapp" style={{ fontSize: '1.3rem' }}></i>
              </a>
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: '#fff' }}
                onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                onMouseLeave={(e) => (e.target.style.color = '#fff')}
              >
                <i className="bi bi-vk" style={{ fontSize: '1.3rem' }}></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <h5 className="mb-4 fw-bold" style={{ color: '#d4af37' }}>
              Навигация
            </h5>
            <ul className="list-unstyled">
              {['Главная', 'Услуги', 'О нас', 'Команда', 'Отзывы', 'Запись', 'Оплата', 'Контакты'].map((item) => (
                <li className="mb-2" key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-decoration-none text-muted"
                    style={{ transition: 'color 0.3s' }}
                    onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                    onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h5 className="mb-4 fw-bold" style={{ color: '#d4af37' }}>
              Услуги
            </h5>
            <ul className="list-unstyled">
              {[
                'Недвижимость',
                'Корпоративное право',
                'Семейное право',
                'Гражданские дела',
                'ДТП и страхование',
                'Налоговое право',
              ].map((service) => (
                <li className="mb-2" key={service}>
                  <a
                    href="#услуги"
                    className="text-decoration-none text-muted"
                    style={{ transition: 'color 0.3s' }}
                    onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                    onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h5 className="mb-4 fw-bold" style={{ color: '#d4af37' }}>
              Контакты
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt me-2 mt-1" style={{ color: '#d4af37' }}></i>
                <span className="text-muted">
                  г. Москва, ул. Тверская, д. 1<br />
                  БЦ «Московский», офис 405
                </span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone me-2" style={{ color: '#d4af37' }}></i>
                <a
                  href="tel:+78005553535"
                  className="text-decoration-none text-muted"
                  style={{ transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                  onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
                >
                  +7 (800) 555-35-35
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope me-2" style={{ color: '#d4af37' }}></i>
                <a
                  href="mailto:info@pravzashita.ru"
                  className="text-decoration-none text-muted"
                  style={{ transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                  onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
                >
                  info@pravzashita.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4" style={{ backgroundColor: '#0a0d2e' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-muted">
                © 2024 Правовая Защита. Все права защищены.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <a
                href="#"
                className="text-decoration-none text-muted me-3"
                style={{ fontSize: '0.9rem' }}
                onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-decoration-none text-muted"
                style={{ fontSize: '0.9rem' }}
                onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
