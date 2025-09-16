import React from 'react'
import logo from './logo.png'

export default function App() {
  return (
    <div className="site-wrapper">
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src={logo} alt="Dezyn Aesthetix logo" />
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
          <p className="hero-subtitle">We build high-quality websites and provide CRM management to help you grow efficiently.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Get Started</a>
          </div>
        </section>

        <section id="services" className="features-section">
          <div className="feature-card">
            <div className="feature-icon" aria-hidden>🎨</div>
            <h3 className="feature-title">High-Quality Websites</h3>
            <p className="feature-desc">Responsive, SEO-friendly sites optimized for speed, accessibility, and conversion.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden>🧭</div>
            <h3 className="feature-title">CRM Management</h3>
            <p className="feature-desc">Implementation, integrations, automation, and dashboards to centralize customer data and workflows.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden>⚡</div>
            <h3 className="feature-title">Brand Identity</h3>
            <p className="feature-desc">Logos, color systems, and tone that align your visual voice with business goals.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-text">© {new Date().getFullYear()} Dezyn Aesthetix • All rights reserved.</p>
      </footer>
    </div>
  )
}
