export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Shivani Packers & Movers",
    "image": "https://shivanipackers.com/logo.png",
    "@id": "https://shivanipackers.com",
    "url": "https://shivanipackers.com",
    "telephone": "+918819017542",
    "email": "shivanipackersandmovers03@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SHOP NO.-02, H.NO.04, Nawab Colony, Ashoka Garden",
      "addressLocality": "Bhopal",
      "postalCode": "462023",
      "addressRegion": "MP",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.2394,
      "longitude": 77.4354
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
