import React from 'react';
import './Home.css'; // Import the CSS file for Home component

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Pizza Store</h1>
        <p>Discover our delicious range of pizzas, made with fresh ingredients and a lot of love!</p>
      </header>
      <section className="home-content">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fresh and High-Quality Ingredients</li>
          <li>Wide Variety of Pizza Options</li>
          <li>Friendly and Fast Service</li>
          <li>Great Value for Your Money</li>
        </ul>
      </section>
      <section className="home-images">
        <h2>Our Popular Pizzas</h2>
        <div className="image-gallery">
          <div className="image-item">
            <img src="https://tse2.mm.bing.net/th?id=OIP.1gj6qiafv0QzHk1JPev_MgHaFN&pid=Api&P=0&h=180" alt="Pizza 1" />
            <p>Margherita</p>
          </div>
          <div className="image-item">
            <img src="https://tse3.mm.bing.net/th?id=OIP.UGHF0Am9aenF1uI3H1Y1swHaE8&pid=Api&P=0&h=180" alt="Pizza 2" />
            <p>Pepperoni</p>
          </div>
          <div className="image-item">
            <img src="https://tse1.mm.bing.net/th?id=OIP.gVvi9ineTYCQmNLDmItrXQHaE6&pid=Api&P=0&h=180" alt="Pizza 3" />
            <p>Vegetarian</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
