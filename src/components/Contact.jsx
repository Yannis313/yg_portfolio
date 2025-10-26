import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_67ykysg",   
        "template_g147vbm",  
        form.current,
        "GzwbVjc7_iKliCHqc"  
      )
      .then(
        () => alert("✅ Message envoyé avec succès !"),
        (error) => alert("❌ Erreur lors de l'envoi : " + error.text)
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-info card-glass">
          <h2>Let's talk !</h2>
          <p className="contact-mail">
            📧 <a href="mailto:yann@test.com">yannis.gaspard@gmail.com</a>
          </p>
          <p className="contact-phone">📞 +33 6 42 99 89 36</p>
          <p className="contact-proposition">
            Que vous soyez développeur ou pas, je serai toujours partant pour discuter tech, web et marketing !
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form card-glass">
          <h2>Envoyez-moi un message</h2>

          <label htmlFor="user_name">Nom</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
          />

          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn-send">Envoyer</button>
        </form>
      </div>
    </section>
  );
}