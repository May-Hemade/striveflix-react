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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJiMzBmM2NhMTZlYjAwMTU2Yzk3NmIiLCJpYXQiOjE2Mzk2NTc3MTUsImV4cCI6MTY0MDg2NzMxNX0.ZanleSqInFZNZuXonzL1Mu8KohG4YzKkfSTko2JwDfo",
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
