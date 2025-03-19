import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Optional: Reset form after a few seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      {isSubmitted ? (
        <p className="success-message">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            name="email"
            placeholder="Your Email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            value={formData.message}
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
