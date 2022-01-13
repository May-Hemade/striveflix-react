import { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Carousel from "react-bootstrap/Carousel"
import MovieCard from "./MovieCard"
import { Link } from 'react-router-dom'
class MovieCarousel extends Component {
  state = {
    movies: [],
  }

  getMovies = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=4440f104&s=${this.props.query}`
      )

      if (response.ok) {
        let result = await response.json()
        let movieList = result.Search
        this.setState({ movies: movieList })
        console.log(movieList)
      } else {
        console.log(`something went wrong Don't Panic`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount = () => {
    this.getMovies()
  }
  arrayChunks = (inputArray, perChunk) => {
    var result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk)

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])
    return result
  }

  render() {
    return (
      <Carousel fade indicators={false}>
        {this.arrayChunks(this.state.movies, 6).map((moviesRow, index) => (
          <Carousel.Item
            key={`carousel-item-${index}`}
            className="d-flex inline"
          >
            <Row className="row w-100 mx-auto" role="listbox">
              {moviesRow.map((movie) => (

      
                <Col key={movie.imdbID} xs={12} s={6} md={3} lg={2}>
                  
               <Link to={"/movie-details/" + movie.imdbID}>
      
                  <MovieCard
                    movie={movie}
                    showComments={this.props.showComments}
                  ></MovieCard>
                    </Link>
                </Col>
              
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

export default MovieCarousel
