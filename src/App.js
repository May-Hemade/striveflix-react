import "./App.css"
import MovieCarousel from "./component/MovieCarousel"
import { Container } from "react-bootstrap"
import { Component } from "react"
import MyNavBar from "./component/MyNavBar"
import Header from "./component/Header"
import StriveflixFooter from "./component/StriveflixFooter"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import TVShows from "./component/TVShows"
import MovieDetails from "./component/MovieDetails"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MyNavBar></MyNavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows/:query" element={<TVShows />} />
            <Route
              path="/movie-details/:movieId"
              element={<MovieDetails />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
