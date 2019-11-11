import React, { useEffect, useState } from 'react'
import api from '../../api'
import PostListItem from './PostListItem'

function PostList (props, context) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get('posts')
      .then(res => {setPosts(res.data)})
  }, [])

  return (
    <>
      {posts.map(post => (
        <PostListItem key={post.id} post={post}/>
      ))}
    </>
  )
}

export default PostList