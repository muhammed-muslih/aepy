export type OutletBrand = "aepy" | "bliss";

export interface Outlet {
  id: string;
  brand: OutletBrand;
  branchName: string;
  address: string;
  city: string;
  district: string;
  state: string;
  postalCode: string;
  phone?: string;
  image?: string;
  googleMapsUrl?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const outlets: Outlet[] = [
  {
    id: "station-road",
    brand: "aepy",
    branchName: "Station Road",
    address: "328/C, Station Road, Miraj",
    city: "Miraj",
    district: "Sangli",
    state: "Maharashtra",
    postalCode: "416410",
    image: "/images/original/outlets/aepy-store-placeholder.png",
    googleMapsUrl: "https://maps.app.goo.gl/gmqLE7hf4HYwXHZV6",
    coordinates: {
      lat: 16.81877753680747,
      lng: 74.64333627529007,
    },
  },
  {
    id: "arfa",
    brand: "aepy",
    branchName: "Arfa",
    address: "Plot No. 40/20, 40/22, Near Arfa Hotel, Shivaji Road, Miraj",
    city: "Miraj",
    district: "Sangli",
    state: "Maharashtra",
    postalCode: "416410",
    // image: "/images/original/outlets/aepy-store-placeholder.png",
    googleMapsUrl: "https://maps.app.goo.gl/Eu9Axd3Js2sx8zeb6",
    coordinates: {
      lat: 16.82958597391059,
      lng: 74.64535221085026,
    },
  },
  {
    id: "market",
    brand: "aepy",
    branchName: "Market",
    address: "Market Gala No. 13, 14, Kisan Chowk, Laxmi Market, Miraj",
    city: "Miraj",
    district: "Sangli",
    state: "Maharashtra",
    postalCode: "416410",
    image: "/images/original/outlets/aepy-store-placeholder.png",
    googleMapsUrl: "https://maps.app.goo.gl/RX8sPBBPK5iiR4KK7",
    coordinates: {
      lat: 16.82176674177196,
      lng: 74.65008152036746,
    },
  },
  {
    id: "sangli",
    brand: "aepy",
    branchName: "Sangli",
    address: "CS No. 13324, Shop No. 1 to 5, Pranoti Apartment, Sangli",
    city: "Sangli",
    district: "Sangli",
    state: "Maharashtra",
    postalCode: "416416",
    // image: "/images/original/outlets/aepy-store-placeholder.png",
    googleMapsUrl: "https://maps.app.goo.gl/F6X3pdaebuMPHMt47",
    coordinates: {
      lat: 16.85123668654116,
      lng: 74.58778423102403,
    },
  },
  {
    id: "midc",
    brand: "aepy",
    branchName: "MIDC",
    address: "Shop No. G-5 & G-6, Grand View Apartment, MIDC Road, Miraj",
    city: "Miraj",
    district: "Sangli",
    state: "Maharashtra",
    postalCode: "416410",
    image: "/images/original/outlets/aepy-store-placeholder.png",
    googleMapsUrl: "https://maps.app.goo.gl/W2Jmv5rMS4Pn4QNZ9",
    coordinates: {
      lat: 16.8406146,
      lng: 74.6364592,
    },
  },
  {
    id: "bliss-bakes",
    brand: "bliss",
    branchName: "Bliss Bakes",
    address: "Plot No. 329, Near Aepy Bakery, Station Road, Miraj",
    city: "Miraj",
    district: "Sangli",
    state: "Maharashtra",
    postalCode: "416410",
    // image: "/images/original/outlets/aepy-store-placeholder.png",
    googleMapsUrl: "https://maps.app.goo.gl/gmqLE7hf4HYwXHZV6",
    coordinates: {
      lat: 16.81877753680747,
      lng: 74.64333627529007,
    },
  },
];
