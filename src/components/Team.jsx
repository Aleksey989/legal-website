import React from 'react'

const Team = () => {
  const team = [
    {
      name: 'Александр Петров',
      position: 'Учредитель, Старший партнер',
      experience: '20 лет опыта',
      description: 'Специалист по корпоративному и налоговому праву',
      image: 'bi-person',
    },
    {
      name: 'Елена Смирнова',
      position: 'Ведущий юрист',
      experience: '12 лет опыта',
      description: 'Эксперт по семейному и гражданскому праву',
      image: 'bi-person',
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Старший юрист',
      experience: '10 лет опыта',
      description: 'Специалист по недвижимости и арбитражным спорам',
      image: 'bi-person',
    },
    {
      name: 'Анна Волкова',
      position: 'Юрист',
      experience: '7 лет опыта',
      description: 'Эксперт по ДТП и страхованию',
      image: 'bi-person',
    },
  ]

  return (
    <section id="команда" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h4
            className="text-uppercase mb-3"
            style={{ color: '#d4af37', fontWeight: '600', letterSpacing: '2px' }}
          >
            Наша команда
          </h4>
          <h2
            className="display-5 fw-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#1a237e',
            }}
          >
            Профессионалы своего дела
          </h2>
          <p className="lead" style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Наша команда состоит из высококвалифицированных юристов с многолетним опытом работы
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
          {team.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="card h-100 border-0 shadow-sm text-center transition-all"
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
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{
                      width: '120px',
                      height: '120px',
                      backgroundColor: 'rgba(26, 35, 126, 0.1)',
                    }}
                  >
                    <i
                      className={`bi ${member.image}`}
                      style={{ color: '#1a237e', fontSize: '4rem' }}
                    ></i>
                  </div>
                  <h4
                    className="card-title mb-2 fw-bold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#1a237e',
                    }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="text-uppercase mb-2"
                    style={{
                      color: '#d4af37',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      letterSpacing: '1px',
                    }}
                  >
                    {member.position}
                  </p>
                  <p
                    className="text-muted mb-3"
                    style={{ fontSize: '0.9rem', fontStyle: 'italic' }}
                  >
                    {member.experience}
                  </p>
                  <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                    {member.description}
                  </p>
                  <div className="mt-3">
                    <a
                      href="#запись"
                      className="btn"
                      style={{
                        backgroundColor: '#1a237e',
                        color: '#fff',
                        padding: '0.4rem 1rem',
                        fontSize: '0.9rem',
                        borderRadius: '5px',
                      }}
                    >
                      Записаться
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
