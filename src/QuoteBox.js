import React from "react";

function QuoteBox(props) {
  return (
    <div className="quote-box">
      <h1>{props.quote}</h1>
      <h2>{props.author}</h2>
      <button onClick={props.handleClick}>New Quote</button>
    </div>
  );
}

export default QuoteBox;
