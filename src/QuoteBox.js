import React from "react";
import "./QuoteBox.css";

function QuoteBox(props) {
  return (
    <div className="quote-box">
      <h1>&quot;{props.quote}&quot;</h1>
      <h2>- {props.author}</h2>
      <button onClick={props.handleClick}>New Quote</button>
    </div>
  );
}

export default QuoteBox;
