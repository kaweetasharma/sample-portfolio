import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters'
import ContactForm from './Form/ContactForm'
import Map from './Map/map'

const position = [51.505, -0.09]

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={Array.from('Contact Me')}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm always excited to connect with fellow developers, discuss
            projects, or just share some good vibes! Whether you're looking to
            collaborate, have a question, or just want to say hi, feel free to
            drop me a message.
          </p>
          <ContactForm />
        </div>
        <div className="info-map">
          Kavita Sharma, <br />
          United Kingdom, <br />
          Dagenham, London <br />
          <span>sharma97kavita@gmail.com</span>
        </div>
        <div className="map-wrap">
          <Map position={position} />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
