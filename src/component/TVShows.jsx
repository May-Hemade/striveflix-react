import React, { Component } from "react"
import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import MovieCard from "./MovieCard"

const TVShows = () => {
  const params = useParams()
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(async () => {
    setIsLoading(true)
    console.log("fetch movie")
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=4440f104&s=${params.query}&type=series`
      )

      if (response.ok) {
        setIsLoading(false)
        const result = await response.json()
        setMovies(result.Search)
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
    <div>
      {movies && (
        <Container>
          <Row>
            {movies.map((movie) => (
              <Col
                key={movie.imdbID}
                xs={12}
                s={6}
                md={3}
                lg={2}
                className="m-2"
              >
                <MovieCard movie={movie}></MovieCard>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  )
}

export default TVShows
