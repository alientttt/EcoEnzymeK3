import product1 from "../assets/product-pageDP1.webp";
import product2 from "../assets/product-pageDP2.webp";
import product3 from "../assets/product-pageDP3.webp";
import product4 from "../assets/product-pageDP4.webp";
import product5 from "../assets/product-pageDP5.webp";
import product6 from "../assets/product-pageDP6.webp";
import product7 from "../assets/product-pageDP7.webp";
import product8 from "../assets/product-pageDP8.webp";

export interface Product {
  id: number;
  name: string;
  category: "Home Care" | "Pertanian" | "Lingkungan";
  imageIcon: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pupuk Organik",
    category: "Pertanian",
    imageIcon: product1,
    description:
      "Eco enzyme dapat digunakan sebagai pupuk cair untuk tanaman.",
  },
  {
    id: 2,
    name: "Pestisida Alami",
    category: "Pertanian",
    imageIcon: product2,
    description:
      "Pestisida organik untuk mengusir hama tanpa bahan kimia berbahaya",
  },
  {
    id: 3,
    name: "Cairan Pembersih Rumah",
    category: "Home Care",
    imageIcon: product3,
    description:
      "Pembersih tangan alami dan serbaguna yang ampuh membunuh kuman.",
  },
  {
    id: 4,
    name: "Pewangi & Disinfektan Alami",
    category: "Home Care",
    imageIcon: product4,
    description:
      "Penghilang bau, bahkan sebagai antibakteri alami",
  },
  {
    id: 5,
    name: "Aktivator Kompos",
    category: "Lingkungan",
    imageIcon: product5,
    description: "Aktivator pengurai untuk mempercepat proses pembuatan kompos.",
  },
  {
    id: 6,
    name: "Pupuk Padat dari Ampas",
    category: "Pertanian",
    imageIcon: product6,
    description: "Sangat bermanfaat untuk pertanian dan tanaman rumah.",
  },
  {
    id: 7,
    name: "Cairan untuk Struktur Tanah",
    category: "Lingkungan",
    imageIcon: product7,
    description: "Cairan yang membantu memperbaiki struktur tanah.",
  },
  {
    id: 8,
    name: "Sabun Alami",
    category: "Home Care",
    imageIcon: product8,
    description: "Menurunkan jejak pencemaran dibanding sabun komersial",
  },
];

export const CATEGORIES = [
  "Semua",
  "Home Care",
  "Pertanian",
  "Lingkungan"
];