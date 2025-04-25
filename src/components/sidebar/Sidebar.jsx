import React from 'react'
import data from '../../data.json'

export default function Sidebar() {
  const { personalInfo } = data;
  
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={personalInfo.avatar} alt={personalInfo.name} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={personalInfo.name}>{personalInfo.name}</h1>
          <p className="title">{personalInfo.title}</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${personalInfo.contacts.email}`} className="contact-link">{personalInfo.contacts.email}</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${personalInfo.contacts.phone}`} className="contact-link">{personalInfo.contacts.phone}</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime={personalInfo.contacts.birthday}>{personalInfo.contacts.birthday}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{personalInfo.contacts.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {personalInfo.social.map((item, index) => (
            <li key={index} className="social-item">
              <a href={item.link} className="social-link">
                <ion-icon name={item.icon}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
