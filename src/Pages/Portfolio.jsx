import React from "react";
import data from "../data.json";
import "./css/portfolio.css";
import "remixicon/fonts/remixicon.css"; // تأكد من إضافة مسار الأيقونات الصحيح

export default function Portfolio() {
  const { portfolio } = data;
  const isEmpty = portfolio.projects.length === 0;

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {portfolio.categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button className={index === 0 ? "active" : ""} data-filter-btn>
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {portfolio.categories.map((category, index) => (
              <li key={index} className="select-item">
                <button data-select-item>{category}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className={`${isEmpty ? "project-not" : "project-list"}`}>
          {portfolio.projects.length > 0 ? (
            portfolio.projects.map((project, index) => (
              <li
                key={index}
                className="project-item active"
                data-filter-item
                data-category={project.category.toLowerCase()}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    {project.allowIframe ? (
                      <div className="iframe-wrapper">
                        <iframe
                          src={project.link}
                          title={project.title}
                          loading="lazy"
                          sandbox=""
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                      />
                    )}
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.alt}</p>
                </a>
              </li>
            ))
          ) : (
            <ul>
              <li className="no-projects">
                <div className="icon">
                  {/* مثال بأيقونة من RemixIcon */}
                  <i className="ri-folder-3-line"></i>
                </div>
                <p>لا يوجد مشاريع</p>
              </li>
            </ul>
          )}
        </ul>
      </section>
    </article>
  );
}
