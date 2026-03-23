export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Shivani Packers & Movers",
    "image": "https://shivanipackers.com/logo.png",
    "@id": "https://shivanipackers.com",
    "url": "https://shivanipackers.com",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123, MP Nagar Zone 2, Near Board Office",
      "addressLocality": "Bhopal",
      "postalCode": "462011",
      "addressRegion": "MP",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.2333,
      "longitude": 77.4348
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/shivanipackers",
      "https://www.instagram.com/shivanipackers",
      "https://twitter.com/shivanipackers"
    ]
  };
};
