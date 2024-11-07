import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact-form.scss'
import Loader from 'react-loaders'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  const [sendingEmail, setSendingEmail] = useState(false)

  //template params

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: 'Dilaram',
    subject,
    message,
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setSendingEmail(true)

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        setSendingEmail(false)
        console.log('Email sent successfully!', response)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      })
      .catch((error) => {
        setSendingEmail(false)
        console.log('Error sending email:', error)
      })
  }

  return (
    <div className="contact-form">
      <form onSubmit={sendEmail}>
        <ul>
          <li className="half">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </li>
          <li className="half">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </li>
          <li>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
            />
          </li>
          <li>
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            />
          </li>
          <li>
            {sendingEmail ? (
              <Loader type="semi-circle-spin" className="flat-button" />
            ) : (
              <input type="submit" className="flat-button" value="Send" />
            )}
          </li>
        </ul>
      </form>
    </div>
  )
}

export default ContactForm
