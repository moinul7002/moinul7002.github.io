import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]

  return (
    <Layout>
      {/* <SEO title="About Me" description="about moinul" /> */}
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />

            <a
              target="_blank"
              href="https://www.canva.com/design/DAFV89z5R0c/jNzGHANQvuAAYg8carf5HA/view?utm_content=DAFV89z5R0c&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              className="btn"
            >
              My Resume
            </a>
            <div>
              <p></p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: info }} />

            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
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

export default About
