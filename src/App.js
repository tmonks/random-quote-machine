import React from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";
import fetchJsonp from "fetch-jsonp"
import ReactFCCtest from "react-fcctest"

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
    this.updateQuote()
  }

  updateQuote() {
    /* Storm Consultancy Tech quotes */
    /*
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({ quote: data.quote, author: data.author })
      })
    */

    /* Forismatic API */
    /* "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?" */
    fetchJsonp("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=callback", {
      jsonpCallback: "jsonp"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ quote: json.quoteText, author: json.quoteAuthor })
      })
      .catch(error => {
        console.log('parsing failed', error)
      })
  }

  componentDidMount() {
    this.updateQuote()
  }

  render() {
    const imageUrl = './images/art-background-blur-220072.jpg';
    let styles={}
    // let styles = { backgroundImage: "url(" + imageUrl + ")" };
    // let styles = { backgroundColor: "gray" }
    return (
      <div className="app-container" style={styles}>
        <ReactFCCtest />
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
