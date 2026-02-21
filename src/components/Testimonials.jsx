import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Михаил Иванов',
      position: 'ИП, Москва',
      text: 'Благодаря команде «Правовая Защита» удалось выиграть сложный арбитражный спор с конкурентом. Профессиональный подход и отличное знание законодательства.',
      rating: 5,
    },
    {
      name: 'Ольга Петрова',
      position: 'Частное лицо, Санкт-Петербург',
      text: 'Помогли с разводом и разделом имущества. Всё прошло быстро и в рамках закона. Очень благодарна за понимание и поддержку в трудный момент.',
      rating: 5,
    },
    {
      name: 'Алексей Сидоров',
      position: 'Директор ООО «ТехноСтрой»',
      text: 'Сотрудничаем уже 5 лет по всем юридическим вопросам компании. Надежные партнеры, всегда на связи и решают любые задачи оперативно.',
      rating: 5,
    },
    {
      name: 'Наталья Козлова',
      position: 'Владелец недвижимости',
      text: 'Проводили проверку квартиры перед покупкой. Выявили несколько рисков, которые помогли избежать проблем в будущем. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Дмитрий Волков',
      position: 'Водитель, Казань',
      text: 'Попал в ДТП, страховая отказала в выплате. Юристы компании помогли взыскать полную компенсацию через суд.',
      rating: 5,
    },
    {
      name: 'Елена Новикова',
      position: 'Предприниматель, Новосибирск',
      text: 'Помогли с регистрацией бизнеса и разработкой договоров. Всё сделано качественно и в кратчайшие сроки.',
      rating: 5,
    },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <i key={i} className="bi bi-star-fill" style={{ color: '#d4af37' }}></i>
    ))
  }

  return (
    <section id="отзывы" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h4
            className="text-uppercase mb-3"
            style={{ color: '#d4af37', fontWeight: '600', letterSpacing: '2px' }}
          >
            Отзывы
          </h4>
          <h2
            className="display-5 fw-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#1a237e',
            }}
          >
            Что говорят наши клиенты
          </h2>
          <p className="lead" style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Нам доверяют тысячи клиентов по всей России
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
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  backgroundColor: '#fff',
                }}
              >
                <div className="card-body p-4">
                  <div className="mb-3">{renderStars(testimonial.rating)}</div>
                  <p
                    className="card-text mb-4 fst-italic"
                    style={{
                      color: '#555',
                      lineHeight: '1.7',
                      minHeight: '100px',
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: 'rgba(26, 35, 126, 0.1)',
                      }}
                    >
                      <i className="bi bi-person" style={{ color: '#1a237e', fontSize: '1.5rem' }}></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold" style={{ color: '#1a237e' }}>
                        {testimonial.name}
                      </h6>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="d-inline-flex align-items-center justify-content-center">
            <div className="text-center">
              <h2 className="display-4 fw-bold mb-0" style={{ color: '#d4af37' }}>
                4.9
              </h2>
              <p className="mb-0 text-muted">Средний рейтинг</p>
            </div>
            <div className="mx-4">
              <div className="vr" style={{ height: '60px' }}></div>
            </div>
            <div className="text-center">
              <h2 className="display-4 fw-bold mb-0" style={{ color: '#d4af37' }}>
                1000+
              </h2>
              <p className="mb-0 text-muted">Отзывов</p>
            </div>
            <div className="mx-4">
              <div className="vr" style={{ height: '60px' }}></div>
            </div>
            <div className="text-center">
              <h2 className="display-4 fw-bold mb-0" style={{ color: '#d4af37' }}>
                98%
              </h2>
              <p className="mb-0 text-muted">Рекомендуют нас</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
