import React from 'react'
import data from '../../data.json'

export default function ABOUT() {
  const { about } = data;
  
  return (
    <>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {about.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </>
  )
}
