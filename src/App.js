import React from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      quote: "The man who makes no mistakes does not usually make anything",
      author: "E.J. Phelps"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("You clicked it!");
  }

  render() {
    let backgroundStyle = {
      // backgroundImage: "url('./images/hugues-de-buyer-mimeure-lQPEChtLjUo-unsplash.jpg')"
    };
    return (
      <div className="app-container" style={backgroundStyle}>
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
