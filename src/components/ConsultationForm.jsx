import React, { useState } from 'react'

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const services = [
    'Выберите услугу',
    'Недвижимость',
    'Бизнес и корпоративное право',
    'Семейное право',
    'Гражданские дела',
    'ДТП и страхование',
    'Налоговое право',
    'Другое',
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Форма отправлена:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    })
  }

  return (
    <section id="запись" className="py-5" style={{ backgroundColor: '#1a237e' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-5 mb-lg-0">
                <h4
                  className="text-uppercase mb-3"
                  style={{ color: '#d4af37', fontWeight: '600', letterSpacing: '2px' }}
                >
                  Запись на консультацию
                </h4>
                <h2
                  className="display-5 fw-bold mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#fff',
                  }}
                >
                  Получите бесплатную консультацию
                </h2>
                <p className="mb-4" style={{ color: '#e0e0e0', lineHeight: '1.8' }}>
                  Заполните форму и наш юрист свяжется с вами в течение 15 минут
                  для уточнения деталей и назначения консультации.
                </p>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                      }}
                    >
                      <i className="bi bi-telephone" style={{ color: '#d4af37' }}></i>
                    </div>
                    <div>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                        Телефон
                      </p>
                      <p className="mb-0 fw-bold" style={{ color: '#fff' }}>
                        +7 (800) 555-35-35
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                      }}
                    >
                      <i className="bi bi-envelope" style={{ color: '#d4af37' }}></i>
                    </div>
                    <div>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                        Email
                      </p>
                      <p className="mb-0 fw-bold" style={{ color: '#fff' }}>
                        info@pravzashita.ru
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                      }}
                    >
                      <i className="bi bi-clock" style={{ color: '#d4af37' }}></i>
                    </div>
                    <div>
                      <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                        Режим работы
                      </p>
                      <p className="mb-0 fw-bold" style={{ color: '#fff' }}>
                        Пн-Пт: 9:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '10px' }}>
                  <div className="card-body p-4 p-lg-5">
                    {submitted ? (
                      <div className="text-center py-5">
                        <i
                          className="bi bi-check-circle"
                          style={{ color: '#28a745', fontSize: '4rem' }}
                        ></i>
                        <h4 className="mt-4 mb-2" style={{ color: '#1a237e' }}>
                          Заявка отправлена!
                        </h4>
                        <p className="text-muted">
                          Мы свяжемся с вами в ближайшее время
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label" style={{ color: '#1a237e', fontWeight: '500' }}>
                              Ваше имя *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              style={{
                                borderRadius: '5px',
                                border: '1px solid #dee2e6',
                                padding: '0.75rem',
                              }}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" style={{ color: '#1a237e', fontWeight: '500' }}>
                              Телефон *
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="+7 (___) ___-__-__"
                              style={{
                                borderRadius: '5px',
                                border: '1px solid #dee2e6',
                                padding: '0.75rem',
                              }}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" style={{ color: '#1a237e', fontWeight: '500' }}>
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              style={{
                                borderRadius: '5px',
                                border: '1px solid #dee2e6',
                                padding: '0.75rem',
                              }}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" style={{ color: '#1a237e', fontWeight: '500' }}>
                              Интересующая услуга *
                            </label>
                            <select
                              className="form-select"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                              style={{
                                borderRadius: '5px',
                                border: '1px solid #dee2e6',
                                padding: '0.75rem',
                              }}
                            >
                              {services.map((service, index) => (
                                <option key={index} value={service}>
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-12">
                            <label className="form-label" style={{ color: '#1a237e', fontWeight: '500' }}>
                              Опишите вашу ситуацию
                            </label>
                            <textarea
                              className="form-control"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows="4"
                              placeholder="Кратко опишите вашу проблему..."
                              style={{
                                borderRadius: '5px',
                                border: '1px solid #dee2e6',
                                padding: '0.75rem',
                                resize: 'none',
                              }}
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <div className="form-check mb-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="privacy"
                                required
                                style={{ cursor: 'pointer' }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="privacy"
                                style={{ fontSize: '0.9rem', color: '#666', cursor: 'pointer' }}
                              >
                                Я согласен на обработку персональных данных
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn w-100"
                              style={{
                                backgroundColor: '#d4af37',
                                color: '#1a237e',
                                fontWeight: '600',
                                padding: '1rem',
                                borderRadius: '5px',
                                border: 'none',
                              }}
                            >
                              <i className="bi bi-send me-2"></i>
                              Отправить заявку
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm
