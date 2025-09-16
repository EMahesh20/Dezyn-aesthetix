import React from 'react'

export default function App() {
  return (
    <div className="site-wrapper">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">DA</span>
          <span className="brand-name">Dezyn Aesthetix</span>
        </div>
        <nav className="nav-links" aria-label="primary">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="app-container">
        <section className="hero-section">
          <p className="site-tag">Design • Strategy • Web</p>
          <h1 className="hero-title">Dezyn Aesthetix</h1>
          <p className="hero-subtitle">Elegant, modern experiences that elevate your brand and convert visitors into loyal customers.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Get Started</a>
            <a className="btn btn-ghost" href="#work">View Portfolio</a>
          </div>
        </section>

        <section id="services" className="features-section">
          <div className="feature-card">
            <div className="feature-icon" aria-hidden>🎨</div>
            <h3 className="feature-title">Brand Identity</h3>
            <p className="feature-desc">Logos, color systems, and tone that align your visual voice with business goals.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden>🧭</div>
            <h3 className="feature-title">UX Strategy</h3>
            <p className="feature-desc">Research-driven flows and wireframes that simplify journeys and improve conversion.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden>⚡</div>
            <h3 className="feature-title">Web Development</h3>
            <p className="feature-desc">Fast, accessible websites engineered with modern React tooling and best practices.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-text">© {new Date().getFullYear()} Dezyn Aesthetix • All rights reserved.</p>
      </footer>
    </div>
  )
}
