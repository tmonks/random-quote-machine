import React from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      quote: "something smart will go here",
      author: "Smarty Pants"
    };
  }

  handleClick() {
    console.log("You clicked it!");
  }

  render() {
    return (
      <QuoteBox
        quote={this.state.quote}
        author={this.state.author}
        handleClick={this.handleClick}
      />
    );
  }
}

export default App;
