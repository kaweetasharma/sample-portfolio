import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const MyNavLink = ({ icon, to, className }) => {
  return (
    <NavLink
      exact="true"
      activeClassname="active"
      to={to}
      className={className}
    >
      <FontAwesomeIcon icon={icon} color="#4d4d4e" />
    </NavLink>
  )
}

export default MyNavLink
