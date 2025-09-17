import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New inquiry from ${name || 'Website Visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@dezynaesthetix.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="app-container">
      <section id="contact" className="contact-section">
        <h2 className="contact-title">Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="name">Your name</label>
            <input id="name" className="form-control" type="text" placeholder="Jane Doe" value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" className="form-control" type="email" placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea id="message" className="form-control" rows="5" placeholder="Tell us about your project" value={message} onChange={(e)=>setMessage(e.target.value)} required />
          </div>
          <div className="cta-row"><button className="btn btn-primary" type="submit">Send Email</button></div>
        </form>
      </section>
    </main>
  )
}
