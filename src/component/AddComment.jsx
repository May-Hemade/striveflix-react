import { Component } from "react"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.id,
    },
  }

  handleInput = (property, value) => {
    this.setState({
      comment: {
        ...this.state.comment,
        [property]: value,
      },
    })
  }

  submitComment = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2ZlM2YyNjM3ODAwMTVlNTBkMjMiLCJpYXQiOjE2NDE5OTMwNTMsImV4cCI6MTY0MzIwMjY1M30.js5Rsp9eSBf5ZWbTJlwy28otJaqev5HoJw6PqXmPVu4",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.comment),
        }
      )
      console.log(response)
      if (response.ok) {
        this.props.fetchComments()
      } else {
        console.log(`something went wrong Don't Panic`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add Comment"
            onChange={(e) => {
              this.handleInput("comment", e.target.value)
            }}
          />

          <div key="inline-radio" className="mb-3 d-inline">
            {["1", "2", "3", "4", "5"].map((rating) => (
              <Form.Check
                key={`inline-radio-${rating}`}
                inline
                label={rating}
                name="rating"
                type="radio"
                className="d-inline"
                value={rating}
                onClick={(e) => {
                  this.handleInput("rate", e.target.value)
                }}
              />
            ))}
          </div>
          <Button variant="info" onClick={this.submitComment}>
            Submit
          </Button>
        </Form.Group>
      </div>
    )
  }
}

export default AddComment
