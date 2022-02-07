import React, { Component } from "react";
import Card from "./card";

class Album extends Component {
  state = {
    //TODO: find a better way to load images to the cards array
    cards: [
      {
        title: "Card 1",
        text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgSrc: "./img/budapest.jpg",
      },
      {
        title: "Card 2",
        text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgSrc: "./img/mountains.jpg",
      },
      {
        title: "Card 3",
        text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgSrc: "./img/squirrel.jpg",
      },
      {
        title: "Card 4",
        text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgSrc: "./img/goat.jpg",
      },
      {
        title: "Card 5",
        text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgSrc: "./img/lemur.jpg",
      },
      {
        title: "Card 6",
        text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgSrc: "./img/oldman.jpg",
      },
    ],
    imgViewer: { className: "disabled-img-viewer", src: null },
  };

  handleDelete = (card) => {
    const cards = this.state.cards.filter((c) => c !== card);
    this.setState({ cards });
  };

  handleViewer = (imgSrc) => {
    let newViewer = this.state.imgViewer;

    newViewer.className = "enabled-img-viewer";
    newViewer.src = imgSrc;

    this.setState({ imgViewer: newViewer });
  };

  render() {
    return (
      <div className="album container">
        <div
          id="img-viewer-container"
          className={this.state.imgViewer.className}
        >
          <img
            id="img-viewer"
            src={this.state.imgViewer.src}
            alt="Image Viewer"
          />
        </div>

        <div className="row">
          {this.state.cards.map((c) => (
            <Card
              key={c.title}
              card={c}
              onDelete={this.handleDelete}
              onViewer={this.handleViewer}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Album;
