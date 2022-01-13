import { Col, Container, Row } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CommentsArea from "./CommentArea"

//import dishes from '../data/menu.json'

const MovieDetails = () => {

    const params = useParams()
    // params is ALWAYS going to be an object!
    console.log('PARAMS!!', typeof params.Id)

    const [movie, setMovie] = useState(null)
    // if the pasta is still loading, we'll get pasta === null
    // but if the pasta is not been found, .find() is going to return undefined
    // pasta will be truthy finally if the right object has been found
        const movieId = params.Id
        
        console.log(movieId)
    
    
        const getMovie = async () => {
            try {
              let response = await fetch(
                `http://www.omdbapi.com/?apikey=99963efb&i=${movieId}`
            

                )
        
              if (response.ok) {
                let result = await response.json()
                let clickedmovie = result
                setMovie(clickedmovie)
                console.log(movie)
              } else {
                console.log(`something went wrong Don't Panic`)
              }
            } catch (error) {
              console.log(error)
            }
          }
    
    
        useEffect(() => {
        // I have the pastaId in the url! let's grab it back with params
        
        
        getMovie()
        
        // const movie = movies.find(movie => movie.id.toString() === movieId)
        // pastaDish now hopefully is an object with all the details about the right pasta I clicked on!
        
    }, [])


    // initially I check if the .find() method has failed, that means pasta is undefined
    // if it has not failed, it can be null (initial value, so still loading) or a valid pasta
    // I then check if pasta is truthy: if that's the case, show the pasta details
    // otherwise show a loading message/spinner/loader...


    console.log({movie})
    return (
        <>
        <Container>
            {
                typeof movie === 'undefined'
                    ? (
                        <h1>404 - movie NOT FOUND</h1>
                    )
                    : movie
                        ? (
                            <Row>
                                <Col>
                                    <img src={movie.Poster} alt="movie" />
                                    <h2>{movie.Title}</h2>
                                    <p>{movie.Plot}</p>
                                    <strong>{movie.imdbRating}</strong>
                                </Col>
                            </Row>
                        )
                        : <h1>LOADING...</h1>
            }
        </Container>
        <CommentsArea id={movieId}/>
        </>
    )
}

export default MovieDetails