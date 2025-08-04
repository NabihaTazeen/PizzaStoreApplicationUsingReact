import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Our Pizza Store</h1>
        <p>Delicious pizzas made with love and the freshest ingredients.</p>
      </section>
      
      <section className="about-history">
        <h2>Our History</h2>
        <p>Since our founding in 1990, our pizza store has been dedicated to serving the best pizzas in town. We started with a small family-owned shop, and over the years, we've grown into a beloved local institution.</p>
      </section>
      
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to provide our customers with mouth-watering pizzas and exceptional service. We believe in using only the finest ingredients to create pizzas that are as nutritious as they are delicious.</p>
      </section>
      
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <p>Our team is a family of passionate pizza enthusiasts who love what they do. From our talented chefs to our friendly delivery drivers, every member of our team is committed to making your pizza experience unforgettable.</p>
      </section>
    </div>
  );
}
export default About;
