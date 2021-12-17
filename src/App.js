 
import "./App.css"
import MovieCarousel from "./component/MovieCarousel"
import { Container } from "react-bootstrap"
import { Component } from "react"
import MyNavBar from './component/MyNavBar';
import Header from './component/Header';
import StriveflixFooter from './component/StriveflixFooter';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar/>
        <Header/>
        <Container fluid>
          <h3 className="py-3">Lord of The Rings</h3>
          <MovieCarousel query="lord of the rings" />
          <h3 className="py-3">Harry Potter</h3>
          <MovieCarousel query="harry potter" />
          <h3 className="py-3">Star Wars</h3>
          <MovieCarousel query="star wars" />
         
        </Container>
        <StriveflixFooter/>
      </div>
    )
  }

}
export default App
