import { Component, useState } from "react"
import CommentsArea from "./CommentArea"
import Modal from "react-bootstrap/Modal"
import "../App.css"
import { Link, useLocation, useNavigate } from "react-router-dom"

const MovieCard = ({ movie }) => {
  const [showComments, setShowComments] = useState(false)

  return (
    <div>
      <Link to={"/movie-details/" + movie.imdbID}>
        <img
          className="img-fluid w-100 movie-img"
          src={movie.Poster}
          alt={movie.Title}
        />
      </Link>
    </div>
  )
}

export default MovieCard
