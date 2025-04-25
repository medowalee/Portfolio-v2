import React from 'react'
import data from '../../data.json'

export default function Service() {
  const { services } = data;
  
  return (
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            <div className="service-icon-box">
              <img src={service.icon} alt={service.title} width="40"/>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>
              <p className="service-item-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
