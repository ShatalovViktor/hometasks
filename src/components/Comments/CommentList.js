import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentListItem from './CommentListItem'

function CommentList ({ postId }) {
  const [comments, setComments] = useState([])
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(res => {
        setComments(res.data)
      })
  }, [postId])

  return (
    <>
      {comments.map(comment => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </>
  )
}

export default CommentList