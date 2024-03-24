import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      {/* <SEO title="Blog" /> */}
      <section className="blog-page">
        <Blogs blogs={blogs} title="Publications" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
