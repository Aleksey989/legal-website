import React from 'react'

const Contacts = () => {
  return (
    <section id="контакты" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h4
            className="text-uppercase mb-3"
            style={{ color: '#d4af37', fontWeight: '600', letterSpacing: '2px' }}
          >
            Контакты
          </h4>
          <h2
            className="display-5 fw-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#1a237e',
            }}
          >
            Свяжитесь с нами
          </h2>
          <p className="lead" style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Мы всегда готовы помочь вам решить юридические вопросы
          </p>
          <div
            className="mx-auto mt-4"
            style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#d4af37',
            }}
          ></div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'rgba(26, 35, 126, 0.1)',
                }}
              >
                <i className="bi bi-geo-alt" style={{ color: '#1a237e', fontSize: '2rem' }}></i>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#1a237e' }}>
                Адрес
              </h4>
              <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                г. Москва, ул. Тверская, д. 1<br />
                БЦ «Московский», офис 405
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'rgba(26, 35, 126, 0.1)',
                }}
              >
                <i className="bi bi-telephone" style={{ color: '#1a237e', fontSize: '2rem' }}></i>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#1a237e' }}>
                Телефон
              </h4>
              <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                <a href="tel:+78005553535" style={{ color: '#1a237e', textDecoration: 'none' }}>
                  +7 (800) 555-35-35
                </a>
                <br />
                <a href="tel:+74951234567" style={{ color: '#1a237e', textDecoration: 'none' }}>
                  +7 (495) 123-45-67
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'rgba(26, 35, 126, 0.1)',
                }}
              >
                <i className="bi bi-envelope" style={{ color: '#1a237e', fontSize: '2rem' }}></i>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#1a237e' }}>
                Email
              </h4>
              <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                <a href="mailto:info@pravzashita.ru" style={{ color: '#1a237e', textDecoration: 'none' }}>
                  info@pravzashita.ru
                </a>
                <br />
                <a href="mailto:support@pravzashita.ru" style={{ color: '#1a237e', textDecoration: 'none' }}>
                  support@pravzashita.ru
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <div
                className="p-4"
                style={{ backgroundColor: '#1a237e', color: '#fff' }}
              >
                <h4 className="mb-0 fw-bold">
                  <i className="bi bi-clock me-2"></i>
                  Режим работы
                </h4>
              </div>
              <div className="p-4">
                <table className="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: '500', color: '#1a237e' }}>Понедельник</td>
                      <td className="text-end">9:00 - 20:00</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '500', color: '#1a237e' }}>Вторник</td>
                      <td className="text-end">9:00 - 20:00</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '500', color: '#1a237e' }}>Среда</td>
                      <td className="text-end">9:00 - 20:00</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '500', color: '#1a237e' }}>Четверг</td>
                      <td className="text-end">9:00 - 20:00</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '500', color: '#1a237e' }}>Пятница</td>
                      <td className="text-end">9:00 - 20:00</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '500', color: '#1a237e' }}>Суббота</td>
                      <td className="text-end">10:00 - 18:00</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '500', color: '#1a237e' }}>Воскресенье</td>
                      <td className="text-end">Выходной</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="rounded shadow-lg overflow-hidden"
              style={{ height: '100%', minHeight: '300px', backgroundColor: '#e9ecef' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3712!2d37.6046!3d55.7539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzE0LjAiTiAzN8KwMzYnMTYuNiJF!5e0!3m2!1sru!2sru!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта проезда"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h5 className="mb-3 fw-bold" style={{ color: '#1a237e' }}>
            Мы в социальных сетях
          </h5>
          <div className="d-flex justify-content-center gap-3">
            <a
              href="#"
              className="btn rounded-circle"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#1a237e',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d4af37'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1a237e'
              }}
            >
              <i className="bi bi-telegram" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a
              href="#"
              className="btn rounded-circle"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#1a237e',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d4af37'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1a237e'
              }}
            >
              <i className="bi bi-whatsapp" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a
              href="#"
              className="btn rounded-circle"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#1a237e',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d4af37'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1a237e'
              }}
            >
              <i className="bi bi-vk" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a
              href="#"
              className="btn rounded-circle"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#1a237e',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d4af37'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1a237e'
              }}
            >
              <i className="bi bi-youtube" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
