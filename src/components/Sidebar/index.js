import './index.scss'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  //   faLinkedin,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="kavita" />
      </Link>
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/about"
          className={'about-link'}
        >
          <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fff" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kavita-sharma-04ab55187/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kaweetasharma"
          >
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
