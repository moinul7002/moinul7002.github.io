import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
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
            <p>{info}</p>

            <a
              href="https://drive.google.com/file/d/15CfZKn--mC2G2mTMvpS2Cp5qlpD_P-7K/view?usp=sharing
"
              className="btn"
            >
              My Resume
            </a>

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
