import { Component } from "react"
import AddComment from "./AddComment"
import Modal from "react-bootstrap/Modal"
import CommentList from "./CommentList"

class CommentsArea extends Component {
  state = {
    comments: [],
  }

  reload = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2ZlM2YyNjM3ODAwMTVlNTBkMjMiLCJpYXQiOjE2NDE5OTMwNTMsImV4cCI6MTY0MzIwMjY1M30.js5Rsp9eSBf5ZWbTJlwy28otJaqev5HoJw6PqXmPVu4",
          },
        }
      )
      if (response.ok) {
        let movieComments = await response.json()
        this.setState({ comments: movieComments })
        console.log(movieComments)
      } else {
        console.log(`something went wrong Don't Panic`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount = () => {
    this.reload()
  }

  render() {
    return (
      <div>
        <CommentList
          comments={this.state.comments}
          fetchComments={this.reload}
        ></CommentList>
        <AddComment fetchComments={this.reload} id={this.props.id} />
      </div>
    )
  }
}

export default CommentsArea
