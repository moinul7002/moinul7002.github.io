import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section bg-grey">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/publications" className="btn center-btn">
          Show All
        </Link>
      )}
    </section>
  )
}

export default Blogs
