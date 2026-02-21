import React from 'react'

const Services = () => {
  const services = [
    {
      icon: 'bi-house',
      title: 'Недвижимость',
      description: 'Сопровождение сделок купли-продажи, аренды, юридическая проверка объектов, споры с застройщиками.',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'bi-briefcase',
      title: 'Бизнес и корпоративное право',
      description: 'Регистрация компаний, разработка уставов, корпоративные споры, защита бизнеса от рейдерства.',
      price: 'от 10 000 ₽'
    },
    {
      icon: 'bi-person-badge',
      title: 'Семейное право',
      description: 'Разводы, раздел имущества, алименты, установление отцовства, усыновление, брачные договоры.',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'bi-file-earmark-text',
      title: 'Гражданские дела',
      description: 'Взыскание долгов, защита прав потребителей, возмещение ущерба, договорные отношения.',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'bi-car-front',
      title: 'ДТП и страхование',
      description: 'Помощь при ДТП, взыскание ущерба, страховые выплаты, ОСАГО, КАСКО.',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'bi-bank2',
      title: 'Налоговое право',
      description: 'Налоговое планирование, споры с налоговой, оптимизация налогообложения, проверка бизнеса.',
      price: 'от 8 000 ₽'
    }
  ]

  return (
    <section id="услуги" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2
            className="display-5 fw-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#1a237e',
            }}
          >
            Наши услуги
          </h2>
          <p className="lead" style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Комплексное юридическое сопровождение для физических и юридических лиц
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
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="card h-100 border-0 shadow-sm transition-all pulse-hover"
                style={{
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
                <div className="card-body p-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: '70px',
                      height: '70px',
                      backgroundColor: 'rgba(26, 35, 126, 0.1)',
                    }}
                  >
                    <i
                      className={`bi ${service.icon}`}
                      style={{ color: '#1a237e', fontSize: '2rem' }}
                    ></i>
                  </div>
                  <h4
                    className="card-title mb-3 fw-bold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#1a237e',
                    }}
                  >
                    {service.title}
                  </h4>
                  <p className="card-text text-muted mb-4" style={{ lineHeight: '1.7' }}>
                    {service.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                    <span
                      className="fw-bold"
                      style={{ color: '#d4af37', fontSize: '1.1rem' }}
                    >
                      {service.price}
                    </span>
                    <a
                      href="#запись"
                      className="btn"
                      style={{
                        backgroundColor: '#1a237e',
                        color: '#fff',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '5px',
                      }}
                    >
                      Заказать
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="#оплата"
            className="btn btn-lg"
            style={{
              backgroundColor: '#d4af37',
              color: '#1a237e',
              fontWeight: '600',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '5px',
            }}
          >
            <i className="bi bi-credit-card me-2"></i>
            Оплатить услуги онлайн
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
