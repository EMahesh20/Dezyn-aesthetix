import React, { useState } from 'react'

export default function Home() {
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
      <section className="hero-section">
        <p className="site-tag">Design • Strategy • Web</p>
        <h1 className="hero-title">Designing Modern Websites for Growth</h1>
        <p className="hero-subtitle">We create responsive, SEO-friendly websites and integrate smart CRM solutions to help your business scale effortlessly.</p>
      </section>

      <section id="services" className="features-section">
        <div className="feature-card">
          <h3 className="feature-title">Websites</h3>
          <p className="feature-desc">Responsive, fast, SEO-optimized websites to drive traffic and conversion.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">CRM</h3>
          <p className="feature-desc">Automated workflows and dashboards to manage your customer data efficiently.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Brand Identity</h3>
          <p className="feature-desc">Logos, color systems, and tone that align your visual voice with business goals.</p>
        </div>
      </section>

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
