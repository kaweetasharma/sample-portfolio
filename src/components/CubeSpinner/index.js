import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

const CubeSpinner = ({ icons }) => {
  return (
    <div className="cubespinner">
      {icons.map(({ icon, color }, idx) => {
        return (
          <div key={idx} className={`face${idx + 1}`}>
            <FontAwesomeIcon icon={icon} color={color} />
          </div>
        )
      })}
    </div>
  )
}

export default CubeSpinner
