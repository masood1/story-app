import React from 'react'

const UserPost = props => (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
)

export default UserPost