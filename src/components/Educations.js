import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiEducations(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        degree
        major
        institution
        year
      }
    }
  }
`

const Educations = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiEducations: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { degree, major, institution, year } = jobs[value]

  return (
    <section className="section jobs bg-grey">
      <Title title="Education" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.degree}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{major}</h3>
          <h4>{institution}</h4>
          {/* <h5>{location}</h5> */}
          <p className="job-date">{year}</p>
        </article>
      </div>
    </section>
  )
}

export default Educations
