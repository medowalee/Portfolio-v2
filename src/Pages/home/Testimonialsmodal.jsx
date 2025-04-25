import React from 'react'

export default function Testimonialsmodal() {
  return (
    <div className="modal-container" data-modal-container>

          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">

            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src="/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
              </figure>

              <img src="/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">

              <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

              <time datetime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>

          </section>

        </div>
  )
}
