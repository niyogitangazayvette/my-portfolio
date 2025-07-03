import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aha twashyiramo code yo kohereza message niba dufite backend
    setStatus("Thank you! Your message has been received.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
          ></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
}

export default Contact;
