import { Col, Container, Row, Card, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Link } from "react-bootstrap-icons"

const MovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(async () => {
    const movieId = params.movieId
    setIsLoading(true)
    console.log("fetch movie")
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=4440f104&i=${movieId}`
      )

      if (response.ok) {
        setIsLoading(false)
        setMovie(await response.json())
      } else {
        console.log(`something went wrong Don't Panic`)
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }, [])

  return (
    <Container className="d-flex justify-content-center">
      {typeof movie === "undefined" ? (
        <h1>404 - Movie NOT FOUND</h1>
      ) : movie ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title className="text-dark">{movie.Title} </Card.Title>
            <Card.Text>
              <div className="card-info text-dark"> Plot: {movie.Plot}</div>
              <div className="card-info text-dark"> Genre: {movie.Genre}</div>
              <div className="card-info text-dark">
                Director: {movie.Director}
              </div>
              <div className="card-info text-dark"> Writer: {movie.Writer}</div>
              <div className="card-info text-dark"> Actors: {movie.Actors}</div>
              <div className="card-info text-dark">
                Language:{movie.Language}
              </div>
              <div className="card-info text-dark"> Awards: {movie.Awards}</div>
              <div className="card-info text-dark">
                {" "}
                Country:{movie.Country}
              </div>
            </Card.Text>
            <Link to="/">
              <Button variant="primary">Go Home</Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <h1>LOADING...</h1>
      )}
    </Container>
  )
}

export default MovieDetails
