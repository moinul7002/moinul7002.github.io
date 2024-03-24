import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Educations from "../components/Educations"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
    // allstrapiEducations: { nodes: educations}
  } = data

  return (
    <Layout>
      <Hero />
      <Jobs />
      <Educations />
      <Blogs blogs={blogs} title="Publication" showLink />
      <Services />
      <Projects projects={projects} title="Featured Projects" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(
      filter: { featured: { eq: true } }
      sort: { fields: strapiId, order: DESC }
      limit: 3
    ) {
      nodes {
        github
        strapiId
        desc
        title
        url
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: strapiId, order: DESC }, limit: 3) {
      nodes {
        slug
        strapiId
        content
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
