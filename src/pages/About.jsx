import React from 'react'

export default function About() {
  return (
    <main className="app-container">
      <section className="about-section">
        <h2 className="about-title">About</h2>
        <div className="about-card">
          <h3 className="about-subtitle">Company Story</h3>
          <p className="about-text">Dezyn Aesthetix was founded with a simple belief: every business deserves a strong digital presence, no matter its size. We noticed that many companies either had outdated websites or no online presence at all — and were losing opportunities because of it. That’s where we stepped in.</p>
          <p className="about-text">We started Dezyn Aesthetix to bridge that gap. Our team focuses on designing modern, responsive websites and integrating smart CRM systems that help businesses not only look professional but also operate more efficiently. We’re passionate about giving brands the tools they need to grow and compete in today’s digital-first world.</p>
        </div>
        <div className="about-card">
          <h3 className="about-subtitle">Vision</h3>
          <p className="about-text">To empower businesses without a digital presence by giving them websites and systems that become the foundation of their growth.</p>
        </div>
        <div className="about-card">
          <h3 className="about-subtitle">Mission</h3>
          <p className="about-text">To design high-quality, responsive websites and seamless CRM solutions that make it easy for businesses to connect with customers, build trust, and scale efficiently.</p>
        </div>
      </section>
    </main>
  )
}
