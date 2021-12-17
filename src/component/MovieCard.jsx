import { Component, useState } from "react"
import CommentsArea from "./CommentArea"
import Modal from "react-bootstrap/Modal"
import "../App.css"

class MovieCard extends Component {
  state = {
    showComments: false,
  }

  setShowComments = (show) => {
    this.setState({
      showComments: show,
    })
  }

  showComments = () => this.setShowComments(true)
  hideComments = () => this.setShowComments(false)

  render() {
    return (
      <div>
        <img
          className="img-fluid w-100 movie-img"
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
          onClick={this.showComments}
        />
        {this.state.showComments && (
          <Modal show={true} onHide={this.hideComments}>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <CommentsArea id={this.props.movie.imdbID} />
            </Modal.Body>

            <Modal.Footer>
              {/* <AddComment fetchComments={this.reload} id={this.props.asin} /> */}
            </Modal.Footer>
          </Modal>
        )}
      </div>
    )
  }
}

export default MovieCard
