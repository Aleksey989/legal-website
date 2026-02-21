import React from 'react'

const About = () => {
  const advantages = [
    { icon: 'bi-shield-check', title: 'Надежность', text: 'Гарантируем конфиденциальность и защиту ваших интересов' },
    { icon: 'bi-lightning-charge', title: 'Скорость', text: 'Оперативное решение любых юридических вопросов' },
    { icon: 'bi-trophy', title: 'Опыт', text: 'Более 15 лет успешной практики в различных отраслях права' },
    { icon: 'bi-cash-coin', title: 'Прозрачность', text: 'Честные цены без скрытых платежей и комиссий' },
  ]

  return (
    <section id="о-нас" className="py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="position-relative">
              <div
                className="position-absolute rounded"
                style={{
                  width: '80%',
                  height: '80%',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  top: '10%',
                  left: '10%',
                }}
              ></div>
              <div
                className="position-relative rounded overflow-hidden shadow-lg"
                style={{
                  backgroundColor: '#1a237e',
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className="text-center p-5">
                  <i
                    className="bi bi-building"
                    style={{ color: '#d4af37', fontSize: '8rem' }}
                  ></i>
                  <h3
                    className="mt-4 mb-0"
                    style={{ color: '#fff', fontFamily: "'Playfair Display', serif" }}
                  >
                    Правовая Защита
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ps-lg-5">
            <h4
              className="text-uppercase mb-3"
              style={{ color: '#d4af37', fontWeight: '600', letterSpacing: '2px' }}
            >
              О компании
            </h4>
            <h2
              className="display-5 fw-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#1a237e',
              }}
            >
              Ваш надежный партнер в мире права
            </h2>
            <p className="lead mb-4" style={{ color: '#555', lineHeight: '1.8' }}>
              Юридическая компания «Правовая Защита» — это команда опытных юристов,
              готовых защитить ваши права и интересы в любой ситуации.
              Мы работаем с 2009 года и помогли тысячам клиентов решить их юридические проблемы.
            </p>
            <p className="mb-4" style={{ color: '#666', lineHeight: '1.8' }}>
              Наша миссия — сделать качественную юридическую помощь доступной для каждого.
              Мы ценим доверие клиентов и всегда действуем в их интересах,
              используя все законные методы защиты.
            </p>

            <div className="row g-4 mt-4">
              {advantages.map((adv, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'rgba(26, 35, 126, 0.1)',
                      }}
                    >
                      <i
                        className={`bi ${adv.icon}`}
                        style={{ color: '#1a237e', fontSize: '1.3rem' }}
                      ></i>
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold" style={{ color: '#1a237e' }}>
                        {adv.title}
                      </h5>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                        {adv.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <a
                href="#команда"
                className="btn me-3"
                style={{
                  backgroundColor: '#1a237e',
                  color: '#fff',
                  padding: '0.8rem 2rem',
                  borderRadius: '5px',
                  fontWeight: '500',
                }}
              >
                Наша команда
              </a>
              <a
                href="#контакты"
                className="btn"
                style={{
                  backgroundColor: 'transparent',
                  color: '#1a237e',
                  border: '2px solid #1a237e',
                  padding: '0.8rem 2rem',
                  borderRadius: '5px',
                  fontWeight: '500',
                }}
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
