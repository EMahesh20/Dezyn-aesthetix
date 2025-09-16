import React from 'react'

export default function App() {
  return (
    <div className="site-wrapper">
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src="/logo.svg" alt="Dezyn Aesthetix logo" />
          <span className="brand-name">Dezyn Aesthetix</span>
        </div>
        <nav className="nav-links" aria-label="primary">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main className="app-container">
        <section className="hero-section">
          <p className="site-tag">Design • Strategy • Web</p>
          <h1 className="hero-title">Designing Modern Websites for Growth</h1>
          <p className="hero-subtitle">We create responsive, SEO-friendly websites and integrate smart CRM solutions to help your business scale effortlessly.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Start Your Project</a>
          </div>
        </section>

        <section id="services" className="features-section">
          <div className="feature-card">
            <div className="feature-icon" aria-hidden>🎨</div>
            <h3 className="feature-title">Websites</h3>
            <p className="feature-desc">Responsive, fast, SEO-optimized websites to drive traffic and conversion.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden>🧭</div>
            <h3 className="feature-title">CRM</h3>
            <p className="feature-desc">Automated workflows and dashboards to manage your customer data efficiently.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden>⚡</div>
            <h3 className="feature-title">Brand Identity</h3>
            <p className="feature-desc">Logos, color systems, and tone that align your visual voice with business goals.</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-text">Email us at <a className="contact-link" href="mailto:info@dezynaesthetix.com">info@dezynaesthetix.com</a></p>
          <p className="contact-text">Instagram: <a className="contact-link" href="https://instagram.com/dezynaesthetix" target="_blank" rel="noopener noreferrer">@dezynaesthetix</a></p>
          <div className="cta-row"><a className="btn btn-primary" href="mailto:info@dezynaesthetix.com">Email Us</a></div>
        </section>
        <section id="about" className="about-section">
          <h2 className="about-title">About</h2>
          <p className="about-text">Dezyn Aesthetix is a design and development studio crafting modern, performant websites with integrated CRM solutions to scale your operations and brand.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <p className="footer-text">© 2025 Dezyn Aesthetix • All rights reserved.</p>
          <div className="footer-sitemap">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          <div className="social-links" aria-label="social links">
            <a className="social-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.08V24h-3.9V8z"/></svg>
            </a>
            <a className="social-link" href="https://instagram.com/dezynaesthetix" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.4.42.6.24 1 .53 1.5.98.45.45.74.9.98 1.5.17.5.36 1.2.42 2.4.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.42 2.4-.24.6-.53 1-.98 1.5-.45.45-.9.74-1.5.98-.5.17-1.2.36-2.4.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.4-.42-.6-.24-1-.53-1.5-.98a3.9 3.9 0 0 1-.98-1.5c-.17-.5-.36-1.2-.42-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.42-2.4.24-.6.53-1 .98-1.5.45-.45.9-.74 1.5-.98.5-.17 1.2-.36 2.4-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.07-1 .05-1.6.22-2 .37-.5.2-.8.43-1.1.76-.33.33-.56.62-.76 1.1-.15.4-.32 1-.37 2-.07 1.3-.07 1.7-.07 4.8s0 3.5.07 4.8c.05 1 .22 1.6.37 2 .2.5.43.8.76 1.1.33.33.62.56 1.1.76.4.15 1 .32 2 .37 1.3.07 1.7.07 4.8.07s3.5 0 4.8-.07c1-.05 1.6-.22 2-.37.5-.2.8-.43 1.1-.76.33-.33.56-.62.76-1.1.15-.4.32-1 .37-2 .07-1.3.07-1.7.07-4.8s0-3.5-.07-4.8c-.05-1-.22-1.6-.37-2-.2-.5-.43-.8-.76-1.1-.33-.33-.62-.56-1.1-.76-.4-.15-1-.32-2-.37-1.3-.07-1.7-.07-4.8-.07Zm0 3.6a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8Zm0 10.6a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Zm5.2-11.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg>
            </a>
            <a className="social-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.53 8.53 0 0 1-2.7 1.03A4.26 4.26 0 0 0 12 9.26c0 .33.04.66.1.97A12.1 12.1 0 0 1 3 5.15a4.25 4.25 0 0 0 1.32 5.68 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.17 4.3 4.3 0 0 1-1.12.15c-.27 0-.54-.03-.8-.08a4.26 4.26 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2 19.54a12.05 12.05 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.55c.84-.6 1.58-1.35 2.17-2.2Z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
