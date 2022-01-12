import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"
import MovieCarousel from "./MovieCarousel"
import MyNavBar from "./MyNavBar"
import StriveflixFooter from "./StriveflixFooter"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <h3 className="py-3">Lord of The Rings</h3>
          <MovieCarousel query="lord of the rings" />
          <h3 className="py-3">Harry Potter</h3>
          <MovieCarousel query="harry potter" />
          <h3 className="py-3">Star Wars</h3>
          <MovieCarousel query="star wars" />
        </Container>
        <StriveflixFooter />
      </div>
    )
  }
}
