import React from "react"
import {
  FaCode,
  FaSketch,
  FaAndroid,
  FaCodeBranch,
  FaDatabase,
  FaDev,
  FaMix,
} from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Coding",
    text: `C, C++, Python, R, Matlab`,
  },
  // {
  //   id: 2,
  //   icon: <FaSketch className="service-icon" />,
  //   title: "Web Development",
  //   text: `HTML5, CSS3, GraphQL, JavaScript, Django`,
  // },
  {
    id: 3,
    icon: <FaDev className="service-icon" />,
    title: "Developer Tools",
    text: `Linux, Git, Docker, SSRS, Django`,
  },
  {
    id: 4,
    icon: <FaDatabase className="service-icon" />,
    title: "Big Data Tools",
    text: `NoSQL (MongoDB), SQL (MySQL, PostgreSQL, SQL Server), Power BI, Azure Data Factory, Azure Data Lake Storage`,
  },
  {
    id: 5,
    icon: <FaMix className="service-icon" />,
    title: "Machine Learning",
    text: `Pandas, NumPy, Keras, Scikit-Learn, TensorFlow 2.0, MatPlotlib, PyTorch, Scrapy, NLTK, Gensim, Scipy`,
  },
]
