import React from "react";
import Header from "./Header";
import "../styles/Home.css";

const Home = () => (
  <div className="home-container">
    <Header />
    <main>
      <h1>Welcome to our page!</h1>
      <p className="home-text">
        Remember that one time in math class when the teacher asked you
        what&apos;s 2 + 2, and you said 5? Then everyone in the class laughed at
        you, and you went home crying. Well no more of that! Introducing math
        magicians, it&apos;s a single page app that fullfils all your second
        grade math needs. And if you ever lose motivation to do more math, check
        out the quotes section that provides a fresh new math quote for
        inspiration.
      </p>
    </main>
  </div>
);

export default Home;
