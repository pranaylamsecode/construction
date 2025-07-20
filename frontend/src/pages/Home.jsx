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
    src: '/images/trolleyimage.png',
    alt: 'Tractor Trolley',
    caption: 'Tractor Trolley – For flexible, smaller deliveries',
  },
  {
    src: '/images/tipperimage.png',
    alt: 'Tipper Truck',
    caption: 'Tipper Truck – For bulk, high-volume transport',
  },
];

// Use import.meta.env for Vite or fallback to empty string
const FRONTEND_SERVER =
  typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_FRONTEND_SERVER
    ? import.meta.env.VITE_FRONTEND_SERVER
    : '';

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
      <div className="main-bg-overlay" />
      <section className="hero">
        <div className="hero-background" />
        <img src={`/images/logo-icon.png`} alt="Nagpur Murum Depot Logo" className="logo" />
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
                  <img src={`${vehicle.src}`} alt={vehicle.alt} onError={handleImgError} />
                ) : (
                  <img src={`${FRONTEND_SERVER}${vehicle.src}`} alt={vehicle.alt} />
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

      {/* ✅ Improved Component-Specific CSS */}
      <style jsx>{`
        .homepage {
          font-family: 'Segoe UI', Arial, sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #f3f4f6 100%);
          color: #222;
          padding: 0;
          min-height: 100vh;
          position: relative;
          z-index: 1;
        }
        .main-bg-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(120deg, #f97316 0%, #fbbf24 100%);
          opacity: 0.13;
          z-index: 0;
          pointer-events: none;
        }
        .hero {
          text-align: center;
          margin-bottom: 2.5rem;
          position: relative;
          padding: 2.5rem 1.5rem 2rem 1.5rem;
          background: linear-gradient(120deg, #fff 60%, #f3f4f6 100%);
          border-radius: 0 0 32px 32px;
          box-shadow: 0 4px 24px 0 rgba(249, 115, 22, 0.07);
          z-index: 1;
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(120deg, #f97316 0%, #fff 100%);
          opacity: 0.1;
          z-index: 0;
          border-radius: 0 0 32px 32px;
        }
        .logo {
          margin: 0 auto 1rem;
          display: block;
          z-index: 1;
          position: relative;
          width: 180px;
          height: 180px;
          object-fit: contain;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 12px 0 rgba(249, 115, 22, 0.1);
          border: 3px solid #f97316;
        }
        .title {
          font-size: 2.7rem;
          font-weight: 900;
          letter-spacing: 1.5px;
          margin-bottom: 0.3rem;
          color: #f97316;
          text-shadow:
            0 2px 8px #fff7,
            0 1px 0 #fbbf24;
        }
        .subtitle {
          font-size: 1.3rem;
          color: #444;
          margin-bottom: 1.3rem;
          font-weight: 500;
        }
        .badges {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
          margin-top: 0.7rem;
        }
        .badge {
          padding: 0.6rem 1.3rem;
          border-radius: 999px;
          font-size: 1.08rem;
          color: white;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          letter-spacing: 0.5px;
        }
        .fast {
          background: linear-gradient(90deg, #f97316 70%, #fbbf24 100%);
        }
        .quality {
          background: linear-gradient(90deg, #3b82f6 70%, #60a5fa 100%);
        }
        .affordable {
          background: linear-gradient(90deg, #10b981 70%, #34d399 100%);
        }

        .info-section {
          display: flex;
          flex-direction: row;
          gap: 2.5rem;
          margin: 2.5rem auto 0 auto;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1000px;
        }

        .contact-card,
        .services-card {
          border: none;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          border-radius: 18px;
          background: linear-gradient(120deg, #fff 80%, #f3f4f6 100%);
          flex: 1 1 340px;
          min-width: 290px;
          max-width: 400px;
          box-shadow: 0 2px 16px rgba(249, 115, 22, 0.07);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-title {
          font-size: 1.35rem;
          margin-bottom: 1.1rem;
          font-weight: 800;
          color: #f97316;
          letter-spacing: 0.5px;
          text-align: center;
        }

        .contact-details {
          width: 100%;
          text-align: center;
        }
        .contact-details p,
        .contact-details a {
          display: block;
          margin: 0.25rem 0;
          font-size: 1.08rem;
          color: #222;
          text-decoration: none;
        }
        .contact-details a {
          color: #3b82f6;
          font-weight: 600;
        }
        .contact-details a:hover {
          text-decoration: underline;
        }

        .contact-buttons {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .contact-buttons a {
          background: linear-gradient(90deg, #3b82f6 70%, #60a5fa 100%);
          padding: 0.55rem 1.3rem;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.05rem;
          transition:
            background 0.2s,
            transform 0.1s;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.08);
        }
        .contact-buttons a:hover {
          background: linear-gradient(90deg, #2563eb 70%, #3b82f6 100%);
          transform: translateY(-2px) scale(1.04);
        }

        .service-list {
          padding-left: 1.2rem;
          width: 100%;
        }
        .service-list li {
          margin-bottom: 0.5rem;
          font-size: 1.08rem;
          color: #444;
          font-weight: 500;
          list-style: disc inside;
        }

        .fleet {
          margin: 3rem auto 0 auto;
          max-width: 1000px;
        }

        .fleet-gallery {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 1.2rem;
        }

        .fleet-card {
          flex: 1 1 260px;
          border: none;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(120deg, #fff 80%, #f3f4f6 100%);
          min-width: 240px;
          max-width: 420px;
          box-shadow: 0 2px 16px rgba(59, 130, 246, 0.07);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .fleet-image img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
          background: #f3f4f6;
          border-bottom: 2px solid #f97316;
        }

        .fleet-caption {
          padding: 1rem 0.7rem;
          text-align: center;
          font-size: 1.08rem;
          background: #f3f4f6;
          font-weight: 600;
          color: #222;
          width: 100%;
        }

        .service-hours {
          margin: 3rem auto 0 auto;
          max-width: 600px;
        }
        .hours-box {
          text-align: center;
          background: linear-gradient(90deg, #fbbf24 0%, #f97316 100%);
          color: #fff;
          border-radius: 14px;
          padding: 1.5rem 1rem;
          box-shadow: 0 2px 12px rgba(251, 191, 36, 0.09);
        }
        .hours-box .section-title {
          color: #fff;
          margin-bottom: 0.7rem;
          text-shadow: 0 2px 8px #f59e42aa;
        }
        .hours-box p {
          font-size: 1.15rem;
          font-weight: 600;
          margin: 0;
        }

        .cta {
          text-align: center;
          margin: 3rem auto 0 auto;
        }

        .cta-button {
          background: linear-gradient(90deg, #f97316 60%, #fbbf24 100%);
          color: white;
          padding: 1.2rem 2.5rem;
          border: none;
          border-radius: 12px;
          font-size: 1.18rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(249, 115, 22, 0.13);
          transition:
            background 0.2s,
            transform 0.1s;
          letter-spacing: 0.5px;
        }
        .cta-button:hover {
          background: linear-gradient(90deg, #ea580c 60%, #f59e42 100%);
          transform: translateY(-2px) scale(1.04);
        }

        .cta-note {
          margin-top: 0.9rem;
          font-size: 1.05rem;
          color: #555;
        }

        .footer {
          text-align: center;
          padding: 2.5rem 0 1.5rem;
          font-size: 1.05rem;
          color: #999;
          background: none;
          margin-top: 3rem;
        }

        /* --- Responsive Styles --- */
        @media (max-width: 1100px) {
          .info-section {
            flex-direction: column;
            gap: 2rem;
            align-items: center;
          }
          .fleet-gallery {
            flex-direction: column;
            gap: 1.5rem;
          }
          .fleet-card {
            max-width: 98vw;
          }
          .fleet-image img {
            height: 220px;
          }
        }
        @media (max-width: 700px) {
          .hero {
            padding: 1.2rem 0.5rem 1rem 0.5rem;
          }
          .logo {
            width: 120px;
            height: 120px;
          }
          .title {
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1rem;
          }
          .badges {
            gap: 0.5rem;
          }
          .badge {
            font-size: 0.95rem;
            padding: 0.4rem 0.8rem;
          }
          .info-section {
            flex-direction: column;
            gap: 1rem;
            margin-top: 1.2rem;
            max-width: 98vw;
          }
          .contact-card,
          .services-card {
            min-width: 0;
            max-width: 98vw;
            width: 100%;
            padding: 1.2rem 0.7rem 1rem 0.7rem;
          }
          .section-title {
            font-size: 1.1rem;
            margin-bottom: 0.7rem;
          }
          .service-list {
            padding-left: 0.7rem;
          }
          .service-list li {
            font-size: 0.98rem;
          }
          .fleet {
            margin-top: 1.2rem;
            max-width: 98vw;
          }
          .fleet-gallery {
            flex-direction: column;
            gap: 1rem;
            margin-top: 0.7rem;
          }
          .fleet-card {
            min-width: 0;
            max-width: 98vw;
            width: 100%;
          }
          .fleet-image img {
            height: 160px;
          }
          .fleet-caption {
            font-size: 0.98rem;
            padding: 0.7rem 0.4rem;
          }
          .service-hours {
            margin-top: 1.2rem;
            max-width: 98vw;
          }
          .hours-box {
            padding: 1rem 0.5rem;
          }
          .hours-box .section-title {
            font-size: 1rem;
          }
          .hours-box p {
            font-size: 1rem;
          }
          .cta {
            margin-top: 1.2rem;
          }
          .cta-button {
            font-size: 1rem;
            padding: 0.8rem 1.2rem;
          }
          .cta-note {
            font-size: 0.95rem;
          }
          .footer {
            padding: 1.2rem 0 1rem;
            font-size: 0.95rem;
            margin-top: 1.2rem;
          }
        }
        @media (max-width: 480px) {
          .hero {
            padding: 0.7rem 0.2rem 0.7rem 0.2rem;
          }
          .logo {
            width: 80px;
            height: 80px;
          }
          .title {
            font-size: 1.3rem;
          }
          .subtitle {
            font-size: 0.9rem;
          }
          .section-title {
            font-size: 0.98rem;
          }
          .contact-card,
          .services-card,
          .fleet-card,
          .service-hours,
          .fleet {
            padding: 0.5rem 0.2rem;
            max-width: 100vw;
          }
          .fleet-image img {
            height: 100px;
          }
        }
      `}</style>
    </main>
  );
};

export default HomePage;
