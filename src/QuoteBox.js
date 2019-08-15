import React from "react";
import "./QuoteBox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function QuoteBox(props) {
  return (
    <div id="quote-box">
      <h1 id="text">&quot;{props.quote}&quot;</h1>
      <h2 id="author">- {props.author}</h2>
      <button id="new-quote" onClick={props.handleClick}>New Quote</button>
      <br />
      <a id="tweet-quote" target="_blank" href={"https://twitter.com/intent/tweet?text=" + props.quote + " -" + props.author}>
        <FontAwesomeIcon icon={faTwitter} /> Tweet
      </a>
    </div>
  );
}

export default QuoteBox;
