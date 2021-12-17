import ListGroup from "react-bootstrap/ListGroup"
import DeleteComment from "./DeleteComment"
import MyBadge from "./MyBadge"

const SingleComment = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>
        {props.comment.comment}
        <MyBadge
          message={props.comment.rate}
          color={ratingColor(props.comment.rate)}
        ></MyBadge>
      </span>
      <DeleteComment
        commentId={props.comment._id}
        fetchComments={props.fetchComments}
      />
    </ListGroup.Item>
  )
}

const ratingColor = (rating) => {
  if (rating < 3) return "danger"
  if (rating < 5) return "warning"
  return "success"
}

export default SingleComment
