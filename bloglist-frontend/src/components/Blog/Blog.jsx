import React from 'react'
import PropTypes from 'prop-types'
import { useField } from '../../hooks/useField'

export const Blog = ({
  blog,
  likeBlog,
  removeBlog,
  handleAddComment,
  comment,
  setComment
}) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  /*  const [visible, setVisible] = useState(false) */
  const Comment = useField(setComment)

  if (!blog) {
    return null
  }

  /* const ShowData = () => {
    setVisible(!visible)
  } */
  return (
    <div style={blogStyle} className="blog">
      <h3>{blog.title}</h3>
      <div>
        <p>{blog.author}</p>
        <p>{blog.url}</p>
        <p>Likes: {blog.likes}</p>
        <button onClick={() => likeBlog(blog.id)}>Like</button>
        <button onClick={() => removeBlog(blog.id)}>Remove</button>
        {/* {blog.user === []
          ? ''
          : blog.user.map((blog) => <p key={blog.id}>{blog.name}</p>)} */}
        <form onSubmit={(e) => handleAddComment(e, blog.id)}>
          <input
            value={comment.comment}
            onChange={Comment.onChangeOnce}
            name="comment"
            placeholder="Escribe tu comentario"
          />
          <button>Add comment</button>
        </form>
        {!blog.comments.length ? (
          <p>Escribe un Comentario!!!</p>
        ) : (
          <ul>
            {blog.comments.map((comment) => (
              <li key={comment}>{comment}</li>
            ))}
          </ul>
        )}
      </div>
      {/*   <button onClick={ShowData}>{!visible ? 'Show' : 'Hide'}</button>
      {visible && (
      )} */}
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object,
  likeBlog: PropTypes.func,
  removeBlog: PropTypes.func
}

export default Blog
