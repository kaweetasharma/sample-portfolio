import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import CubeSpinner from '../../components/CubeSpinner'
import { aboutPageIcons } from './icon-data'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={Array.from('About Me')}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Hey there! I'm Kavita, a <strong>Frontend Developer</strong> who
            loves creating fun and interactive user experiences. I spend my days
            building awesome websites, experimenting with animations, and
            occasionally trying to make my code look as fancy as my coffee art.
          </p>
          <p>
            When I'm not coding, you can find me exploring new JavaScript
            frameworks, building mini side projects just for fun, or trying to
            crack the latest CSS trick. I believe in making the web a more
            vibrant, colorful, and engaging space—one line of code at a time.
          </p>
          <p>
            I'm passionate about learning and growth. Whether it's trying to
            make a <span className="highlight">cube spin</span> (like the one on
            the right) or diving into the latest frontend trends, I'm always up
            for the challenge. If you like what you see and want to collaborate,{' '}
            <a href="/contact" className="contact-link">
              reach out to me!
            </a>
          </p>
        </div>
        <div className="stage-cube-cont">
          <CubeSpinner icons={aboutPageIcons} />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
