import React, { useState } from 'react';
import '../App.css';
import background from '../assets/images/bg.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page" style={{ backgroundImage: `url(${background})` }}>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Fill out the form below and we'll get in touch soon.</p>

        {submitted && <p className="success-message">Thank you! Your message has been sent. ✅</p>}

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="primary-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;