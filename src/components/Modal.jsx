import React from 'react'
import data from '../data.json'

export default function Modal({ selectedTestimonial, onClose }) {
  const testimonial = data.testimonials[selectedTestimonial];
  
  if (!testimonial) return null;

  return (
    <div className="modal-container active" data-modal-container>
      <div className="overlay" data-overlay onClick={onClose}></div>
      <section className="testimonials-modal">
        <button className="modal-close-btn" data-modal-close-btn onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={testimonial.avatar} alt={testimonial.name} width="80" data-modal-img />
          </figure>
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>{testimonial.name}</h4>
          <p className="testimonials-text" data-modal-text>{testimonial.text}</p>
        </div>
      </section>
    </div>
  )
}