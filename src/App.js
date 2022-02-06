import React, { Component } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Album from "./components/album";
import Footer from "./footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Hero />
        <Album />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
