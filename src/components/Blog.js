import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Publication = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/publications/${slug}`} className="blog" key={id}>
      <article>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p align="justify">{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Publication.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Publication
