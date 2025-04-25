import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4b38coy",
        "template_v8dy7gc",
        form.current,
        "Y6h3vU8NWfEweIWzo"
      )
      .then(
        () => {
          toast.success(" تم إرسال الرسالة بنجاح", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        },
        () => {
          toast.error(" حصل خطأ أثناء الإرسال", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form mt-8">
        <h3 className="h3 form-title mb-4">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form" data-form>
          <div className="input-wrapper flex flex-col md:flex-row gap-6 mb-6">
            <input
              type="text"
              name="fullname"
              className="form-input flex-1 p-4 rounded-lg border border-gray-300"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-input flex-1 p-4 rounded-lg border border-gray-300"
              placeholder="Email address"
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input w-full p-4 rounded-lg border border-gray-300 mb-6"
            placeholder="Your Message"
            rows={5}
            required
          ></textarea>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString("ar-SR")}
          />

          <button
            className="form-btn flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg transition"
            type="submit"
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>

        {/* هنا بنركب الـ ToastContainer */}
        <ToastContainer 
          newestOnTop={true}
        />
      </section>
    </article>
  );
}
