import badgehouse from "../assets/house.webp";
import badgefarmer from "../assets/farmer.webp";
import badgeleaf from "../assets/fruit-waste.webp";


export interface Category {
  title: string;
  caption: string;
  img: string;
  alt: string;
  details: string[];
}

export const categoriesData: Category[] = [
  {
    img: badgeleaf,
    title: "Untuk Lingkungan",
    caption: "Mengurangi sampah organik, menjaga kebersihan air dan udara.",
    alt: "lingkungan-image",
    details: [
      "Mengurai polutan di udara (Nitrogen Monoksida, Sulfur Dioksida)",
      "Membersihkan saluran air dan sungai dari bahan kimia berbahaya",
      "Mengurangi jumlah limbah organik di TPA",
      "Alternatif deterjen yang ramah lingkungan",
    ],
  },
  {
    img: badgehouse,
    title: "Untuk Rumah Tangga",
    caption: "Pembersih alami, hemat biaya, aman tanpa bahan kimia.",
    alt: "rumah-tangga-image",
    details: [
      "Pembersih lantai serbaguna dan desinfektan alami",
      "Mencuci piring & pakaian (dicampur air)",
      "Penghilang bau tidak sedap di toilet dan dapur",
      "Mengusir serangga (semut, kecoa) tanpa pestisida",
    ],
  },
  {
    img: badgefarmer,
    title: "Untuk Pertanian",
    caption:
      "Pupuk organik, menyuburkan tanah, dan mengusir hama secara alami.",
    alt: "pertanian-image",
    details: [
      "Pupuk daun dan penyubur tanah (rasio 1:1000 dengan air)",
      "Pengusir hama alami (rasio 1:500 dengan air)",
      "Meningkatkan kualitas dan hasil panen",
      "Memperbaiki kondisi tanah yang rusak oleh bahan kimia",
    ],
  },
];

