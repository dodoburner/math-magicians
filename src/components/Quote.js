import React, { useEffect } from "react";
import Header from "./Header";
import "../styles/Quote.css";

const Quote = () => {
  useEffect(() => {
    const fetchQuotes = async () => {
      const data = await fetch("https://random-math-quote-api.herokuapp.com/");
      const json = await data.json();
      console.log(json);
      document.querySelector(".quote").innerHTML = `
        ${json.quote}
        <br>
        - <span class='author'>${json.author}</span>
      `;
    };

    fetchQuotes();
  });

  return (
    <div>
      <Header />
      <div className="quote-container">
        <p className="quote" />
      </div>
    </div>
  );
};

export default Quote;
