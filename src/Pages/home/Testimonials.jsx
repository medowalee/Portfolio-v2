import React from 'react'
import data from '../../data.json'

export default function Testimonials() {
  const { testimonials } = data;
  
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">
        {testimonials.map((testimonial, index) => (
          <li key={index} className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img src={testimonial.avatar} alt={testimonial.name} width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
