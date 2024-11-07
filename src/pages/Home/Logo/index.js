import React, { useEffect, useRef } from 'react'
import './index.scss'

const Logo = () => {
  const bgRef = useRef(null)
  const outlineLogoRef = useRef(null)

  useEffect(() => {
    // Animate background opacity with vanilla JavaScript
    if (bgRef.current) {
      bgRef.current.style.transition = 'opacity 1.5s ease-in-out'
      bgRef.current.style.opacity = 1
    }

    // Animate the drawing of the letter "K"
    if (outlineLogoRef.current) {
      outlineLogoRef.current.style.strokeDasharray =
        outlineLogoRef.current.getTotalLength()
      outlineLogoRef.current.style.strokeDashoffset =
        outlineLogoRef.current.getTotalLength()
      outlineLogoRef.current.style.animation =
        'drawKAnimation 2.5s ease-in-out forwards 1.5s, fillKColor 1.5s ease-in-out forwards 4s'
    }
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <svg
        width="100%" // Make the SVG responsive
        height="100%" // Make the SVG responsive
        viewBox="0 0 200 300" // Ensure the entire "K" fits within this box
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF6F61" />
          </linearGradient>
          <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="10" dy="10" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <g
          className="svg-container"
          fill="none"
          filter="url(#dropShadow)" // Add shadow effect for depth
        >
          <path
            ref={outlineLogoRef}
            d="M 50 50 L 50 250 L 75 250 L 75 150 L 150 250 L 175 250 L 100 150 L 175 50 L 150 50 L 75 135 L 75 50 Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
