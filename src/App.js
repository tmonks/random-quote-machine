import React from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";
import fetchJsonp from "fetch-jsonp";
import ReactFCCtest from "react-fcctest";

const backgroundImages = [
  "art-background-blue-370799-01.jpg",
  "art-background-blur-220072-01.jpg",
  "background-blur-bright-220067-01.jpg",
  "backlit-chiemsee-dawn-1363876-01.jpg",
  "blooming-blur-close-up-459059-01.jpg",
  "blurred-background-colors-daytime-1250260-01.jpg"
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      quote: "...",
      author: "",
      backgroundNum: -1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.updateQuote();
  }

  updateQuote() {
    // calculate a new random index for the background image
    const newBackgroundNum =
      (this.state.backgroundNum + 1) % backgroundImages.length;

    fetchJsonp(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=callback",
      { jsonpCallback: "jsonp" }
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          quote: json.quoteText.replace(/^\s+|\s+$/g, ""),
          author: json.quoteAuthor,
          backgroundNum: newBackgroundNum
        });
      })
      .catch(error => {
        console.log("parsing failed", error);
      });
  }

  componentDidMount() {
    backgroundImages.forEach(background => {
      const img = new Image();
      img.src = "./images/" + background;
      console.log("preloading img: " + img.src);
    });
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
