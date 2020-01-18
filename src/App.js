import React from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";
import fetchJsonp from "fetch-jsonp";
// import ReactFCCtest from "react-fcctest";

const backgroundImages = [
  "meadow-4485609_1920.jpg",
  "backlit-chiemsee-dawn-1363876.jpg",
  "austria-dawn-desktop-backgrounds-1323550.jpg",
  "background-blur-bright-220067.jpg",
  "blooming-blur-close-up-459059.jpg",
  "clouds-dawn-horizon-33067.jpg",
  "fog-foggy-lake-2649403.jpg"
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      quote: "",
      author: "",
      backgroundNum: -1,
      initialLoad: true
    };

    this.updateQuote = this.updateQuote.bind(this);
  }

  updateQuote() {
    // calculate a new random index for the background image
    const newBackgroundNum = (this.state.backgroundNum + 1) % backgroundImages.length;

    fetchJsonp(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=callback",
      { jsonpCallback: "jsonp" }
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          quote: json.quoteText.replace(/^\s+|\s+$/g, ""),
          author: json.quoteAuthor,
          backgroundNum: newBackgroundNum,
          initialLoad: false
        });
      })
      .catch(error => {
        console.log("parsing failed", error);
      });
  }

  componentDidMount() {
    // force browser to pre-download background images
    backgroundImages.forEach(background => {
      const img = new Image();
      img.src = "./images/" + background;
    });

    this.updateQuote();
  }

  render() {
    const imageUrl = "./images/" + backgroundImages[this.state.backgroundNum];
    let styles = {};
    if (!this.state.initialLoad) {
      styles = { backgroundImage: "url(" + imageUrl + ")" };
    }

    return (
      <div className="app-container" style={styles}>
        {/* <ReactFCCtest /> */}
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          handleClick={this.updateQuote}
          initialLoad={this.state.initialLoad}
        />
      </div>
    );
  }
}

export default App;
