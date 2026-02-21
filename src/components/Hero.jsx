import React from 'react'

const Hero = () => {
  return (
    <section
      id="главная"
      className="hero-section d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a237e 0%, #0d1442 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content fade-in-up">
              <h1
                className="display-3 fw-bold mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#fff',
                  lineHeight: '1.2',
                }}
              >
                Профессиональная юридическая защита
              </h1>
              <p
                className="lead mb-4"
                style={{
                  color: '#e0e0e0',
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                }}
              >
                Более 15 лет опыта защиты прав и интересов наших клиентов.
                Индивидуальный подход, конфиденциальность и гарантированный результат.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="#запись"
                  className="btn btn-lg pulse-hover"
                  style={{
                    backgroundColor: '#d4af37',
                    color: '#1a237e',
                    fontWeight: '600',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '5px',
                  }}
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Записаться на консультацию
                </a>
                <a
                  href="#услуги"
                  className="btn btn-lg"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#fff',
                    border: '2px solid #d4af37',
                    fontWeight: '600',
                    padding: '1rem 2rem',
                    borderRadius: '5px',
                  }}
                >
                  <i className="bi bi-list-check me-2"></i>
                  Наши услуги
                </a>
              </div>

              <div className="row mt-5 pt-4">
                <div className="col-md-4 mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                      }}
                    >
                      <i className="bi bi-award" style={{ color: '#d4af37', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h5 className="mb-1" style={{ color: '#fff', fontWeight: '600' }}>
                        500+
                      </h5>
                      <p className="mb-0" style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                        Выигранных дел
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                      }}
                    >
                      <i className="bi bi-people" style={{ color: '#d4af37', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h5 className="mb-1" style={{ color: '#fff', fontWeight: '600' }}>
                        1000+
                      </h5>
                      <p className="mb-0" style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                        Довольных клиентов
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                      }}
                    >
                      <i className="bi bi-clock-history" style={{ color: '#d4af37', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h5 className="mb-1" style={{ color: '#fff', fontWeight: '600' }}>
                        15 лет
                      </h5>
                      <p className="mb-0" style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                        Опыта работы
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-image text-center fade-in-up">
              <div
                className="position-relative"
                style={{
                  width: '400px',
                  height: '400px',
                  margin: '0 auto',
                }}
              >
                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    top: 0,
                    left: 0,
                  }}
                ></div>
                <div
                  className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '80%',
                    height: '80%',
                    backgroundColor: 'rgba(212, 175, 55, 0.15)',
                    top: '10%',
                    left: '10%',
                  }}
                >
                  <i className="bi bi-shield-check" style={{ color: '#d4af37', fontSize: '8rem' }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x pb-4"
        style={{ zIndex: 1 }}
      >
        <a href="#услуги" style={{ color: '#d4af37', textDecoration: 'none' }}>
          <i className="bi bi-chevron-double-down" style={{ fontSize: '2rem', animation: 'pulse 2s infinite' }}></i>
        </a>
      </div>
    </section>
  )
}

export default Hero
