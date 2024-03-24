import React from "react"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaGithub,
  FaInstagram,
  FaMailBulk,
  FaDiscord,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaMailBulk className="social-icon"></FaMailBulk>,
    url: "mailto:moinulislam4080@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com/in/moinul-islam-7002/",
  },
  {
    id: 3,
    icon: <FaFacebookF className="social-icon"></FaFacebookF>,
    url: "https://www.facebook.com/moinulislam7002",
  },
  // {
  //   id: 4,
  //   icon: <FaTelegram className="social-icon"></FaTelegram>,
  //   url: "",
  // },
  {
    id: 4,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/_moinul7002/",
  },
  {
    id: 5,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/moinul7002",
  },
  {
    id: 6,
    icon: <FaDiscord className="social-icon"></FaDiscord>,
    url: "https://discord.com/users/3954/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
