import React from 'react'

export default function Home() {
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

    </main>
  )
}
