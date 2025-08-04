// src/components/ContactUs.js
import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling

function ContactUs() {
  return (
    <div className="contact-us-container container mt-5">
      <h1 className="mb-4">Contact Us</h1>
      <div className="store-details">
        <h2>About Our Store</h2>
        <p>Welcome to the Pizza Store! We offer a wide range of delicious pizzas made with fresh ingredients. Our store has been serving the community since 2020, providing great food and a friendly atmosphere.</p>
        <p>We are located in the heart of the city, easily accessible and ready to serve you every day of the week. Whether you're looking for a quick meal or a family dinner, we have something for everyone.</p>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      <div className="store-info mt-4">
        <h2>Store Information</h2>
        <p><strong>Address:</strong> Pizza Store Hyd, India</p>
        <p><strong>Phone:</strong> 8919458483</p>
        <p><strong>Email:</strong> 123@pizzastore.com</p>
      </div>
    </div>
  );
}
export default ContactUs;
