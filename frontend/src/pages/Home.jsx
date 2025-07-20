import React from 'react';

// Correct image paths for public folder usage
const CONTACT = {
  name: 'Swapnil Bambal',
  phone: '+91 9850587750',
  email: 'swapnilbambal1@gmail.com',
  locations: ['Wadi', 'Hingna', 'Kalmeshwar', 'Katol', 'Saoner'],
};

const SERVICES = [
  'Red & Yellow Murum Supply',
  'Bhandara Sand, Kanhan Sand',
  '20 mm VSI & Non-VSI Aggregate',
  '10 mm Gravel',
  'Dust & Crushed Sand',
  'Tractor-Trolley & Tipper Service',
  'Plot Leveling & Road Base Work',
  'Bulk Orders for Contractors',
];

// Use public folder path for images (images should be in public/images)
const FLEET = [
  {
    src: '/src/style/images/trolleyimage.png',
    alt: 'Tractor Trolley',
    caption: 'Tractor Trolley – For flexible, smaller deliveries',
  },
  {
    src: '/src/style/images/tipperimage.png',
    alt: 'Tipper Truck',
    caption: 'Tipper Truck – For bulk, high-volume transport',
  },
];

const HomePage = () => {
  const handleQuoteClick = () => {
    window.open(
      `https://wa.me/919850587750?text=Hi%20Swapnil%2C%20I%20would%20like%20a%20quote%20for%20earth%20filling%20or%20construction%20material.`,
      '_blank'
    );
  };

  // fallback image for trolley if not loading
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = '/images/trolley-placeholder.jpg';
  };

  return (
    <main className="homepage">
      <section className="hero">
        <div className="hero-background" />
        <img src="/src/style/images/logo-icon.png" alt="Nagpur Murum Depot Logo" className="logo" />
        <h1 className="title">Nagpur Murum Depot</h1>
        <p className="subtitle">Reliable Earth Filling & Construction Material Supply</p>
        <div className="badges">
          <span className="badge fast">🚚 Fast Delivery</span>
          <span className="badge quality">💎 High Quality</span>
          <span className="badge affordable">💰 Affordable Rates</span>
        </div>
      </section>

      <section className="info-section">
        <div className="contact-card">
          <h2 className="section-title">Contact Info 📞</h2>
          <div className="contact-details">
            <p>{CONTACT.name}</p>
            <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <p>
              <strong>Nagpur:</strong> {CONTACT.locations.join(', ')}
            </p>
          </div>
          <div className="contact-buttons">
            <a
              href={`https://wa.me/91${CONTACT.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`}>Email</a>
          </div>
        </div>

        <div className="services-card">
          <h2 className="section-title">Our Services 🛠️</h2>
          <ul className="service-list">
            {SERVICES.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-hours">
        <div className="hours-box">
          <h2 className="section-title">Service Hours ⏰</h2>
          <p>
            Open Daily: <strong>7:00 AM – 7:00 PM</strong>
          </p>
        </div>
      </section>

      <section className="fleet">
        <h2 className="section-title">Fleet Highlights 🚛</h2>
        <div className="fleet-gallery">
          {FLEET.map((vehicle, idx) => (
            <div key={idx} className="fleet-card">
              <div className="fleet-image">
                {vehicle.alt === 'Tractor Trolley' ? (
                  <img src={vehicle.src} alt={vehicle.alt} onError={handleImgError} />
                ) : (
                  <img src={vehicle.src} alt={vehicle.alt} />
                )}
                <div className="fleet-caption">{vehicle.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <button onClick={handleQuoteClick} className="cta-button">
          <span>Get a Quote Now</span>
        </button>
        <p className="cta-note">Quick response on WhatsApp!</p>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Nagpur Murum Depot. All rights reserved.
      </footer>

      {/* ✅ Inline Component-Specific CSS */}
      <style jsx>{`
        .homepage {
          font-family: 'Segoe UI', Arial, sans-serif;
          background: linear-gradient(135deg, #fff 60%, #f3f4f6 100%);
          color: #222;
          padding: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .hero {
          text-align: center;
          margin-bottom: 2.5rem;
          position: relative;
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(120deg, #f97316 0%, #fff 100%);
          opacity: 0.08;
          z-index: 0;
        }

        .logo {
          margin: 0 auto 1rem;
          display: block;
          z-index: 1;
          position: relative;
          width: 128px;
          height: 100%;
        }
        .title {
          font-size: 2.3rem;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 0.2rem;
        }
        .subtitle {
          font-size: 1.25rem;
          color: #555;
          margin-bottom: 1.2rem;
        }
        .badges {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .badge {
          padding: 0.55rem 1.2rem;
          border-radius: 999px;
          font-size: 1rem;
          color: white;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .fast {
          background-color: #f97316;
        }
        .quality {
          background-color: #3b82f6;
        }
        .affordable {
          background-color: #10b981;
        }

        .info-section {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
        }

        .contact-card,
        .services-card,
        .hours-box {
          border: 1px solid #e5e7eb;
          padding: 1.5rem;
          border-radius: 14px;
          background: #fafafa;
          flex: 1 1 320px;
          min-width: 270px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .section-title {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          color: #f97316;
        }

        .contact-details p,
        .contact-details a {
          display: block;
          margin: 0.25rem 0;
          font-size: 1.05rem;
        }

        .contact-buttons {
          margin-top: 0.7rem;
        }
        .contact-buttons a {
          margin-right: 1rem;
          background: #3b82f6;
          padding: 0.5rem 1.1rem;
          color: white;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.2s;
        }
        .contact-buttons a:hover {
          background: #2563eb;
        }

        .service-list {
          padding-left: 1.2rem;
        }
        .service-list li {
          margin-bottom: 0.4rem;
          font-size: 1.05rem;
        }

        .fleet {
          margin-top: 2.5rem;
        }

        .fleet-gallery {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .fleet-card {
          flex: 1 1 260px;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          min-width: 240px;
          max-width: 320px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .fleet-image img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
          background: #f3f4f6;
        }

        .fleet-caption {
          padding: 0.85rem;
          text-align: center;
          font-size: 1.05rem;
          background: #f3f4f6;
          font-weight: 500;
        }

        .service-hours {
          margin-top: 2.5rem;
        }
        .hours-box {
          text-align: center;
        }

        .cta {
          text-align: center;
          margin-top: 2.5rem;
        }

        .cta-button {
          background: linear-gradient(90deg, #f97316 60%, #fbbf24 100%);
          color: white;
          padding: 1.1rem 2.2rem;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
          transition:
            background 0.2s,
            transform 0.1s;
        }
        .cta-button:hover {
          background: linear-gradient(90deg, #ea580c 60%, #f59e42 100%);
          transform: translateY(-2px) scale(1.03);
        }

        .cta-note {
          margin-top: 0.7rem;
          font-size: 1rem;
          color: #555;
        }

        .footer {
          text-align: center;
          padding: 2.2rem 0 1.2rem;
          font-size: 0.95rem;
          color: #999;
        }

        @media (max-width: 900px) {
          .info-section {
            flex-direction: column;
            gap: 1.5rem;
          }
          .fleet-gallery {
            flex-direction: column;
            gap: 1.2rem;
          }
        }
      `}</style>
    </main>
  );
};

export default HomePage;
