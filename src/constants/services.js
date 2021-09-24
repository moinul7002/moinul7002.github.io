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
    text: `C, C++, Python, PHP`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Web Development",
    text: `HTML5, CSS3, GraphQL, javaScript, ES6, Laravel, Django`,
  },
  {
    id: 3,
    icon: <FaDev className="service-icon" />,
    title: "Development Tools",
    text: `Linux, Git, Docker, AWS, Jupyter Notebook, Google Colab`,
  },
  {
    id: 4,
    icon: <FaDatabase className="service-icon" />,
    title: "Big Data",
    text: `Statistical Analysis, Data Mining & Modeling, Database Management`,
  },
  {
    id: 5,
    icon: <FaMix className="service-icon" />,
    title: "Machine Learning",
    text: `Scikit-learn, Keras, TensorFlow, NumPy, Pandas, Matplotlib, Librosa etc.`,
  },
]
