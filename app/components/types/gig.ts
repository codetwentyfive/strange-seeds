export interface Gig {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  venue: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressRegion: string;
    addressCountry: string;
  };
  ticketsLink: string;
  priceCurrency: string;
  validFrom: string;
  description: string;
  image: string;
}

