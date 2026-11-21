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
  },
];
