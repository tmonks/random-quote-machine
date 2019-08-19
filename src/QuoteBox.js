import React from "react";
import "./QuoteBox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function QuoteBox(props) {
  return (
    <div id="quote-box">
      <p id="text">&quot;{props.quote}&quot;</p>
      <p id="author">- {props.author}</p>
      <a id="tweet-quote" target="_blank" href={"https://twitter.com/intent/tweet?text=" + props.quote + " -" + props.author}>
        <FontAwesomeIcon icon={faTwitter} /> Tweet
      </a>
      <button id="new-quote" onClick={props.handleClick}>New Quote</button>
    </div>
  );
}

export default QuoteBox;
