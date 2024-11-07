import React, { useEffect, useRef } from 'react'
import './index.scss'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()

  useEffect(() => {
    // Register the GSAP plugin for drawing SVG outlines
    gsap.registerPlugin(DrawSVGPlugin)

    // Timeline for the animation sequence
    const tl = gsap.timeline()

    // Animate the background opacity
    tl.to(bgRef.current, {
      duration: 1.5,
      opacity: 1,
      ease: 'power1.inOut',
    })

    // Draw the outline of the letter "K"
    tl.from(outlineLogoRef.current, {
      drawSVG: '0%', // Draw from 0% to 100%
      duration: 2.5, // Duration of drawing the outline
      ease: 'power2.inOut',
    })

    // Fill the solid logo with gradient
    tl.to(outlineLogoRef.current, {
      fill: 'url(#gradient)', // Fill color after outline is complete
      duration: 1.5,
      ease: 'power2.inOut',
    })
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
