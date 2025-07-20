import React from 'react';

// Direct CDN import of TailwindCSS for DnD/demo purposes
// eslint-disable-next-line
const tailwindCdn = (() => {
  if (typeof window !== "undefined" && !document.getElementById("tailwind-cdn")) {
    const link = document.createElement("link");
    link.id = "tailwind-cdn";
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@3.4.3/dist/tailwind.min.css";
    document.head.appendChild(link);
  }
})();

const CONTACT = {
  name: "Swapnil Bambal",
  phone: "+91 9850587750",
  email: "swapnilbambal1@gmail.com",
  locations: ["Wadi", "Hingna", "Kalmeshwar", "Katol", "Saoner"],
};

const SERVICES = [
  "Red & Yellow Murum Supply",
  "Bhandara Sand, Kanhan Sand",
  "20 mm VSI & Non-VSI Aggregate",
  "10 mm Gravel",
  "Dust & Crushed Sand",
  "Tractor-Trolley & Tipper Service",
  "Plot Leveling & Road Base Work",
  "Bulk Orders for Contractors",
];

const FLEET = [
  {
    src: "/trolley-image.jpg",
    alt: "Tractor Trolley",
    caption: "Tractor Trolley – For flexible, smaller deliveries",
  },
  {
    src: "/tipper-image.jpg",
    alt: "Tipper Truck",
    caption: "Tipper Truck – For bulk, high-volume transport",
  },
];

const HomePage = () => {
  const handleQuoteClick = () => {
    window.open(
      `https://wa.me/919850587750?text=Hi%20Swapnil%2C%20I%20would%20like%20a%20quote%20for%20earth%20filling%20or%20construction%20material.`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 p-2 sm:p-4 md:p-8 lg:p-16">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center mb-12">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-72 h-72 md:w-[32rem] md:h-[32rem] bg-orange-100 rounded-full blur-3xl opacity-60 animate-pulse" />
        </div>
        <img
          src="/48ef3d34-afe0-4126-a3b9-99eca7249931.png"
          alt="Nagpur Murum Depot Logo"
          width={160}
          height={160}
          className="mx-auto mb-4 drop-shadow-xl rounded-full border-4 border-orange-200 bg-white"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-700 mb-2 tracking-tight drop-shadow">
          Nagpur Murum Depot
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
          Reliable Earth Filling &amp; Construction Material Supply
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <span className="inline-flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
            🚚 Fast Delivery
          </span>
          <span className="inline-flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
            💎 High Quality
          </span>
          <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
            💰 Affordable Rates
          </span>
        </div>
      </section>

      {/* Contact & Services */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Card */}
        <div className="border rounded-3xl p-6 sm:p-8 shadow-xl bg-white flex flex-col justify-between transition-transform hover:scale-[1.02] hover:shadow-2xl duration-200">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 flex items-center gap-2">
            <span>Contact Info</span>
            <span className="text-xl">📞</span>
          </h2>
          <div className="mb-2">
            <p className="font-semibold text-lg">{CONTACT.name}</p>
            <a
              href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
              className="block text-blue-700 hover:underline mt-1 text-base"
            >
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block text-blue-700 hover:underline text-base"
            >
              {CONTACT.email}
            </a>
            <p className="mt-2 text-gray-700 text-sm sm:text-base">
              <span className="font-medium">Nagpur:</span>{" "}
              {CONTACT.locations.join(", ")}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-start">
            <a
              href={`https://wa.me/91${CONTACT.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow transition"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.6 6.01L0 24l6.25-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.71.97.99-3.62-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow transition"
              aria-label="Email"
            >
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l7.88 6.99c.36.32.88.32 1.24 0L20 8.99V18H4z" />
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Services Card */}
        <div className="border rounded-3xl p-6 sm:p-8 shadow-xl bg-white transition-transform hover:scale-[1.02] hover:shadow-2xl duration-200">
          <h2 className="text-2xl font-bold mb-4 text-orange-700 flex items-center gap-2">
            <span>Our Services</span>
            <span className="text-xl">🛠️</span>
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2 text-base sm:text-lg">
            {SERVICES.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Hours */}
      <section className="mt-12 text-center">
        <div className="inline-block bg-white/80 rounded-2xl px-6 py-4 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-orange-700 flex items-center justify-center gap-2">
            <span>Service Hours</span>
            <span className="text-xl sm:text-2xl">⏰</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            Open Daily: <span className="font-semibold text-orange-700">7:00 AM – 7:00 PM</span>
          </p>
        </div>
      </section>

      {/* Fleet Highlights */}
      <section className="mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-orange-700 flex items-center justify-center gap-2">
          <span>Fleet Highlights</span>
          <span className="text-xl sm:text-2xl">🚛</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FLEET.map((vehicle, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition"
            >
              <div className="relative w-full aspect-[5/3] overflow-hidden rounded-2xl">
                <img
                  src={vehicle.src}
                  alt={vehicle.alt}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 rounded-b-2xl">
                  <p className="text-white text-xs sm:text-sm font-medium">{vehicle.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-14 text-center">
        <button
          className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-2xl text-lg sm:text-xl font-bold shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-200"
          onClick={handleQuoteClick}
        >
          <span className="inline-flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
            </svg>
            Get a Quote Now
          </span>
        </button>
        <p className="mt-3 text-gray-500 text-xs sm:text-sm">
          Quick response on WhatsApp!
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-400 text-xs sm:text-sm pb-4">
        &copy; {new Date().getFullYear()} Nagpur Murum Depot. All rights reserved.
      </footer>
    </main>
  );
};

export default HomePage;
