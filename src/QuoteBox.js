import React from "react";
import "./QuoteBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function QuoteBox(props) {
  return (
    <div id="quote-box">
      <div id="text-container">
        <p id="text">
          <span className="quote">&quot;</span>
          {props.quote}
          <span className="quote">&quot;</span>
        </p>
        <p id="author">
          - {props.author.length > 0 ? props.author : "Anonymous"}
        </p>
      </div>
      <a
        id="tweet-quote"
        href={
          "https://twitter.com/intent/tweet?text=" +
          props.quote +
          " -" +
          props.author
        }
      >
        <FontAwesomeIcon icon={faTwitter} /> Tweet
      </a>{" "}
      <button id="new-quote" onClick={props.handleClick}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;
