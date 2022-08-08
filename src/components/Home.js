import React from "react";
import Header from "./Header";
import "../styles/Home.css";

const Home = () => (
  <div className="home-container">
    <Header />
    <main>
      <h1>Welcome to our page!</h1>
      <p className="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </main>
  </div>
);

export default Home;
