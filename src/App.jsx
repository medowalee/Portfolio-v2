/**
 * @copyright 2025 medo
 * @license Apache-2.0
 */
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ABOUT from "./Pages/home/ABOUT";
import Clients from "./Pages/home/Clients";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/RESUME";
import Service from "./Pages/home/Service";
import Testimonials from "./Pages/home/Testimonials";
import Testimonialsmodal from "./Pages/home/Testimonialsmodal";
import Contact from "./Pages/Contact";
import "./css/animation.css";

const App = () => {

  useEffect(() => {
    const elementToggleFunc = (elem) => elem.classList.toggle("active");

    // Sidebar toggle
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");
    sidebarBtn?.addEventListener("click", () => elementToggleFunc(sidebar));

    // Testimonials modal
    const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    const testimonialsModalFunc = () => {
      modalContainer?.classList.toggle("active");
      overlay?.classList.toggle("active");
    };

    testimonialsItem.forEach((item) => {
      item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
      });
    });

    modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
    overlay?.addEventListener("click", testimonialsModalFunc);

    // Custom select
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    const filterItems = document.querySelectorAll("[data-filter-item]");
    const filterFunc = (selectedValue) => {
      filterItems.forEach((item) => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    select?.addEventListener("click", () => elementToggleFunc(select));

    selectItems.forEach((item) => {
      item.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    });

    let lastClickedBtn = filterBtn[0];
    filterBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);
        lastClickedBtn?.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    });

    // Contact form
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (form?.checkValidity()) {
          formBtn?.removeAttribute("disabled");
        } else {
          formBtn?.setAttribute("disabled", "");
        }
      });
    });

    // Page navigation
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    navigationLinks.forEach((link, index) => {
      link.addEventListener("click", function () {
        pages.forEach((page, i) => {
          if (this.innerHTML.toLowerCase() === page.dataset.page) {
            page.classList.add("active");
            navigationLinks[i].classList.add("active");
            window.scrollTo(0, 0);
          } else {
            page.classList.remove("active");
            navigationLinks[i].classList.remove("active");
          }
        });
      });
    });

  }, []);

  return (
    <div >
      <div className="animation1"></div>
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <article className="about active" data-page="about">
          <ABOUT />
          <Service />
          <Testimonials />
          <Testimonialsmodal />
          {/* <Clients /> */}
        </article>
        {/* <Resume /> */}
        <Portfolio />
        <Contact />
      </div>
    </main>
    <div className="animation2"></div>
    <div className="animation3"></div>
    <div className="animation4"></div>
    <div className="animation5"></div>
</div>
  );
};

export default App;
