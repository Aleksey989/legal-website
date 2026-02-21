import React, { useState } from 'react'

const Payment = () => {
  const [selectedService, setSelectedService] = useState('')
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const services = [
    { id: 1, name: 'Консультация юриста (30 мин)', price: 3000 },
    { id: 2, name: 'Консультация юриста (1 час)', price: 5000 },
    { id: 3, name: 'Анализ документов', price: 3000 },
    { id: 4, name: 'Составление договора', price: 5000 },
    { id: 5, name: 'Представительство в суде (1 заседание)', price: 10000 },
    { id: 6, name: 'Юридическое сопровождение сделки', price: 15000 },
    { id: 7, name: 'Другая сумма', price: 0 },
  ]

  const handleServiceChange = (e) => {
    const service = services.find(s => s.id === parseInt(e.target.value))
    if (service) {
      setSelectedService(service.name)
      setAmount(service.price > 0 ? service.price : '')
    }
  }

  const handlePayment = (method) => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Пожалуйста, введите сумму оплаты')
      return
    }

    setPaymentMethod(method)

    // PayPal интеграция через backend API
    if (method === 'paypal') {
      const container = document.getElementById('paypal-button-container')
      container.innerHTML = '' // Очистить предыдущие кнопки

      if (window.paypal) {
        paypal.Buttons({
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'paypal'
          },
          createOrder: async function(data, actions) {
            try {
              const response = await fetch('http://localhost:5000/api/paypal/create-order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  amount: amount,
                  description: selectedService || 'Услуга юриста'
                })
              })

              const order = await response.json()
              return order.orderID
            } catch (error) {
              console.error('Error creating order:', error)
              alert('Ошибка при создании заказа')
              throw error
            }
          },
          onApprove: async function(data, actions) {
            try {
              const response = await fetch('http://localhost:5000/api/paypal/capture-order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  orderID: data.orderID
                })
              })

              const captureData = await response.json()

              alert(`Оплата успешно завершена!\n\nЗаказ: ${captureData.orderID}\nСумма: ${amount} ₽`)
              console.log('Payment details:', captureData)
              setAmount('')
              setSelectedService('')
            } catch (error) {
              console.error('Error capturing order:', error)
              alert('Ошибка при подтверждении оплаты')
            }
          },
          onError: function(err) {
            console.error('PayPal error:', err)
            alert('Ошибка при оплате через PayPal')
          },
          onCancel: function(data) {
            alert('Оплата отменена')
            console.log('Payment cancelled:', data)
          }
        }).render('#paypal-button-container')
      } else {
        alert('PayPal SDK не загружен. Проверьте Client ID в index.html')
      }
    } else if (method === 'card') {
      alert(`Для оплаты картой требуется интеграция Stripe или CloudPayments`)
    } else if (method === 'yoomoney') {
      alert(`Для оплаты через ЮMoney требуется интеграция с API ЮMoney`)
    }
  }

  return (
    <section id="оплата" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h4
            className="text-uppercase mb-3"
            style={{ color: '#d4af37', fontWeight: '600', letterSpacing: '2px' }}
          >
            Оплата онлайн
          </h4>
          <h2
            className="display-5 fw-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#1a237e',
            }}
          >
            Безопасная оплата услуг
          </h2>
          <p className="lead" style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Оплатите юридические услуги онлайн с помощью любых удобных способов оплаты
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

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg" style={{ borderRadius: '10px' }}>
              <div className="card-body p-4 p-lg-5">
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#1a237e', fontWeight: '500' }}>
                      Выберите услугу *
                    </label>
                    <select
                      className="form-select"
                      onChange={handleServiceChange}
                      style={{
                        borderRadius: '5px',
                        border: '1px solid #dee2e6',
                        padding: '0.75rem',
                      }}
                    >
                      <option value="">-- Выберите услугу --</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {service.price > 0 ? service.price.toLocaleString() + ' ₽' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#1a237e', fontWeight: '500' }}>
                      Сумма оплаты (₽) *
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Введите сумму"
                      min="100"
                      style={{
                        borderRadius: '5px',
                        border: '1px solid #dee2e6',
                        padding: '0.75rem',
                      }}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label" style={{ color: '#1a237e', fontWeight: '500' }}>
                      Комментарий к оплате
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Например: ФИО, номер договора"
                      style={{
                        borderRadius: '5px',
                        border: '1px solid #dee2e6',
                        padding: '0.75rem',
                      }}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label mb-3" style={{ color: '#1a237e', fontWeight: '500' }}>
                      Способ оплаты *
                    </label>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <button
                          className={`btn w-100 h-100 d-flex flex-column align-items-center justify-content-center py-4 ${
                            paymentMethod === 'paypal' ? 'btn-warning' : 'btn-outline-secondary'
                          }`}
                          onClick={() => handlePayment('paypal')}
                          style={{
                            borderRadius: '10px',
                            border: '2px solid #dee2e6',
                            transition: 'all 0.3s',
                          }}
                          onMouseEnter={(e) => {
                            if (paymentMethod !== 'paypal') {
                              e.target.style.borderColor = '#1a237e'
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (paymentMethod !== 'paypal') {
                              e.target.style.borderColor = '#dee2e6'
                            }
                          }}
                        >
                          <i className="bi bi-paypal mb-2" style={{ fontSize: '2rem' }}></i>
                          <span style={{ fontWeight: '500' }}>PayPal</span>
                        </button>
                      </div>

                      <div className="col-md-4">
                        <button
                          className={`btn w-100 h-100 d-flex flex-column align-items-center justify-content-center py-4 ${
                            paymentMethod === 'card' ? 'btn-warning' : 'btn-outline-secondary'
                          }`}
                          onClick={() => handlePayment('card')}
                          style={{
                            borderRadius: '10px',
                            border: '2px solid #dee2e6',
                            transition: 'all 0.3s',
                          }}
                          onMouseEnter={(e) => {
                            if (paymentMethod !== 'card') {
                              e.target.style.borderColor = '#1a237e'
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (paymentMethod !== 'card') {
                              e.target.style.borderColor = '#dee2e6'
                            }
                          }}
                        >
                          <i className="bi bi-credit-card mb-2" style={{ fontSize: '2rem' }}></i>
                          <span style={{ fontWeight: '500' }}>Банковская карта</span>
                        </button>
                      </div>

                      <div className="col-md-4">
                        <button
                          className={`btn w-100 h-100 d-flex flex-column align-items-center justify-content-center py-4 ${
                            paymentMethod === 'yoomoney' ? 'btn-warning' : 'btn-outline-secondary'
                          }`}
                          onClick={() => handlePayment('yoomoney')}
                          style={{
                            borderRadius: '10px',
                            border: '2px solid #dee2e6',
                            transition: 'all 0.3s',
                          }}
                          onMouseEnter={(e) => {
                            if (paymentMethod !== 'yoomoney') {
                              e.target.style.borderColor = '#1a237e'
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (paymentMethod !== 'yoomoney') {
                              e.target.style.borderColor = '#dee2e6'
                            }
                          }}
                        >
                          <i className="bi bi-wallet2 mb-2" style={{ fontSize: '2rem' }}></i>
                          <span style={{ fontWeight: '500' }}>ЮMoney</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* PayPal Button Container */}
                  {paymentMethod === 'paypal' && (
                    <div className="col-12 mt-4">
                      <div className="text-center mb-3">
                        <span style={{ color: '#1a237e', fontWeight: '500' }}>
                          <i className="bi bi-paypal me-2"></i>
                          Оформите оплату через PayPal
                        </span>
                      </div>
                      <div id="paypal-button-container"></div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-top">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                        <i className="bi bi-shield-lock me-2" style={{ color: '#d4af37' }}></i>
                        Безопасная оплата с защитой данных
                      </p>
                    </div>
                    <div className="col-md-6 text-md-end mt-3 mt-md-0">
                      <div className="d-inline-flex gap-2">
                        <i className="bi bi-credit-card" style={{ fontSize: '1.5rem', color: '#666' }}></i>
                        <i className="bi bi-paypal" style={{ fontSize: '1.5rem', color: '#666' }}></i>
                        <i className="bi bi-bank" style={{ fontSize: '1.5rem', color: '#666' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="card border-0 bg-white">
                <div className="card-body p-4">
                  <h5 className="mb-3 fw-bold" style={{ color: '#1a237e' }}>
                    <i className="bi bi-info-circle me-2" style={{ color: '#d4af37' }}></i>
                    Информация об оплате
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>
                      Моментальное подтверждение оплаты
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>
                      Оплата без комиссии
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2 text-success me-2"></i>
                      Чек на электронную почту
                    </li>
                    <li className="mb-0">
                      <i className="bi bi-check2 text-success me-2"></i>
                      Возврат средств при необходимости
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card border-0 bg-warning bg-opacity-10 mt-3">
                <div className="card-body p-4">
                  <h6 className="fw-bold mb-2" style={{ color: '#1a237e' }}>
                    <i className="bi bi-lightbulb me-2" style={{ color: '#d4af37' }}></i>
                    Настройка PayPal
                  </h6>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#555' }}>
                    Для реальной оплаты замените <code>test</code> на ваш Client ID в файле <code>index.html</code>.
                    Получите Client ID на <a href="https://developer.paypal.com/dashboard/" target="_blank" rel="noopener noreferrer">developer.paypal.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
