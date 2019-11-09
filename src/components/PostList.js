import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostListItem from './PostListItem'

function PostList (props, context) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
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