import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: 'This field is required' });
    } else if (e.target.name === 'email' && !validateEmail(e.target.value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <input name="name" placeholder="Name" onBlur={handleBlur} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
        
        <input name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
        
        <textarea name="message" placeholder="Message" onBlur={handleBlur} onChange={handleChange} />
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
