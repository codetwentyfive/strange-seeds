import { Gig } from './types/gig';

interface EventStructuredDataProps {
  gigs: Gig[];
}

export default function EventStructuredData({ gigs }: EventStructuredDataProps) {
  const structuredData = gigs.map((gig) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": `The Strange Seeds at ${gig.venue}`,
    "startDate": gig.startDate, // Note: This should be in ISO 8601 format
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": gig.venue,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": gig.address.addressLocality,
        "addressCountry": "DE" // Assuming all gigs are in Germany
      }
    },
    "image": [
      "/images/about-4.jpg",
      "/images/about-9.jpg",
      "/images/about-7.jpg"
    ],
    "description": "The Strange Seeds live in concert",
    "offers": {
      "@type": "Offer",
      "url": gig.ticketsLink,
      "price": "TBA",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "TBA"
    },
    "performer": {
      "@type": "MusicGroup",
      "name": "The Strange Seeds"
    },
    "organizer": {
      "@type": "Organization",
      "name": "The Strange Seeds",
      "url": "https://www.thestrangeseeds.com"
    }
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
