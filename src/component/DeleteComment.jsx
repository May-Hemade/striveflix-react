import { Component } from "react"

import React from "react"
import { Trash } from "react-bootstrap-icons"

class DeleteComment extends Component {
  deleteComment = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2ZlM2YyNjM3ODAwMTVlNTBkMjMiLCJpYXQiOjE2NDE5OTMwNTMsImV4cCI6MTY0MzIwMjY1M30.js5Rsp9eSBf5ZWbTJlwy28otJaqev5HoJw6PqXmPVu4",
          },
        }
      )
      if (response.ok) {
        this.loadComments()
      } else {
        console.log(`something went wrong Don't Panic`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  loadComments = () => {
    this.props.fetchComments()
  }

  render() {
    return <Trash onClick={this.deleteComment}></Trash>
  }
}

export default DeleteComment
