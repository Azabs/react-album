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
  };

  //TODO: Implement this method
  handleDelete = () => {
    console.log("delete handler called");
  };

  handleExpand = () => {
    console.log("expand handler called");
  };

  render() {
    return (
      <div className="album container">
        <div className="row">
          {this.state.cards.map((c) => (
            <Card
              key={c.title}
              card={c}
              onDelete={this.handleDelete}
              onExpand={this.handleExpand}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Album;
