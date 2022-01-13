 
import "./App.css"
// import MovieCarousel from "./component/MovieCarousel"
// import { Container } from "react-bootstrap"
// import { Component } from "react"
import MyNavBar from './component/MyNavBar';
// import Header from './component/Header';
import StriveflixFooter from './component/StriveflixFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TVShows from './component/TVShows'
import MovieDetails from "./component/MovieDetails";
import Registration from "./component/Registration";
function App() {
// class App extends Component {
  // render() {
    return (
    <Router>
      <div className="App">
        <MyNavBar/>
          <Routes>
           <Route path="/" element={<h1>HOLAA</h1>}/>
            {/* <Header/> */}
            {/* <Container fluid>
              <h3 className="py-3">Lord of The Rings</h3>
              <MovieCarousel query="lord of the rings" />
              <h3 className="py-3">Harry Potter</h3>
              <MovieCarousel query="harry potter" />
              <h3 className="py-3">Star Wars</h3>
              <MovieCarousel query="star wars" />
            
            </Container> */}
            <Route path="/tv-shows" element={<TVShows/>}/>
            <Route path="/movie-details/:Id" element={<MovieDetails/>}/>
            <Route path="/register" element={<Registration />}/>
          </Routes>
        <StriveflixFooter/>
      </div>
    </Router>
    )
  }


export default App
