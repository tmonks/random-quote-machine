import React from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";
import fetchJsonp from "fetch-jsonp";
import ReactFCCtest from "react-fcctest";

const backgroundImages = [
  "art-background-blue-370799.jpg",
  "art-background-blur-220072.jpg",
  "background-blur-blurred-949587.jpg",
  "background-blur-bright-220067.jpg",
  "backlit-chiemsee-dawn-1363876.jpg",
  "blooming-blur-close-up-459059.jpg",
  "blue-blur-color-932638.jpg",
  "blurred-background-colors-daytime-1250260-01.jpg",
  "hugues-de-buyer-mimeure-lQPEChtLjUo-unsplash.jpg"
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      quote: "The man who makes no mistakes does not usually make anything",
      author: "E.J. Phelps",
      backgroundNum: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.updateQuote();
    this.setState({
      backgroundNum: Math.floor(Math.random() * backgroundImages.length)
    });
  }

  updateQuote() {
    fetchJsonp(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=callback",
      {
        jsonpCallback: "jsonp"
      }
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ quote: json.quoteText, author: json.quoteAuthor });
      })
      .catch(error => {
        console.log("parsing failed", error);
      });
  }

  componentDidMount() {
    this.updateQuote();
  }

  render() {
    const imageUrl = "./images/" + backgroundImages[this.state.backgroundNum];
    console.log(
      "setting background to: " +
        imageUrl +
        " (background num: " +
        this.state.backgroundNum +
        ")"
    );
    // let styles={}
    let styles = { backgroundImage: "url(" + imageUrl + ")" };
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
