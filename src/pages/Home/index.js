import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
import gsap from 'gsap'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const letterKRef = useRef(null)
  const nameArray = Array.from('avita')
  const jobArray = Array.from('Web Developer')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    // GSAP animation for drawing the letter K
    gsap.set(letterKRef.current, {
      strokeDasharray: 300,
      strokeDashoffset: 300,
    })
    gsap.to(letterKRef.current, {
      strokeDashoffset: 0,
      duration: 3,
      ease: 'power2.inOut',
      delay: 1, // Delay to sync with other animations
    })

    gsap.to(letterKRef.current, {
      fill: 'url(#gradient)',
      duration: 1,
      delay: 4,
    })
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="background-animation"></div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className="logo-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="letter-k"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: '#FFD700', stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: '#FF6F61', stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  ref={letterKRef}
                  d="M 10,10 L 10,90 L 30,90 L 30,50 L 70,90 L 90,90 L 50,50 L 90,10 L 70,10 L 30,45 L 30,10 Z"
                  fill="none" // Initially empty so it can be filled later
                  stroke="#003b46"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JavaScript Expert / UI Enthusiast</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="logo-zone">
          <Logo />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
