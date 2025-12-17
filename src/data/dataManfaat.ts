import badgepertanian from "../assets/benefit1.png";
import badgelingkungan from "../assets/benefit2.png";
import badgehomecare from "../assets/benefit3.png";
import badgehealthcare from "../assets/benefit4.png";

export interface Category {
  title: string;
  caption: string;
  img: string;
  alt: string;
  details: string[];
}

export const categoriesData: Category[] = [
  {
    img: badgelingkungan,
    title: "Lingkungan",
    caption: "Untuk lingkungan lebih bersih",
    alt: "lingkungan-image",
    details: [
      "Mengurai polutan di udara (Nitrogen Monoksida, Sulfur Dioksida)",
      "Membersihkan saluran air dan sungai dari bahan kimia berbahaya",
      "Mengurangi jumlah limbah organik di TPA",
      "Alternatif deterjen yang ramah lingkungan",
    ],
  },
  {
    img: badgehomecare,
    title: "Home Care",
    caption: "Pembersih alami tanpa kimia",
    alt: "rumah-tangga-image",
    details: [
      "Pembersih lantai serbaguna dan desinfektan alami",
      "Mencuci piring & pakaian (dicampur air)",
      "Penghilang bau tidak sedap di toilet dan dapur",
      "Mengusir serangga (semut, kecoa) tanpa pestisida",
    ],
  },
  {
    img: badgepertanian,
    title: "Pertanian",
    caption:
      "Untuk bahan pertanian alami",
    alt: "pertanian-image",
    details: [
      "Pupuk daun dan penyubur tanah (rasio 1:1000 dengan air)",
      "Pengusir hama alami (rasio 1:500 dengan air)",
      "Meningkatkan kualitas dan hasil panen",
      "Memperbaiki kondisi tanah yang rusak oleh bahan kimia",
    ],
  },
  {
    img: badgehealthcare,
    title: "Health Care",
    caption:
      "Untuk kesehatan dan kebersihan",
    alt: "kesehatan-image",
    details: [
      "Mengurangi bau badan dan bau kaki (campuran air)",
      "Digunakan sebagai pembersih tangan alami",
      "Membantu menjaga kualitas udara di ruangan",
      "Alternatif produk kebersihan tanpa bahan kimia keras",
    ],
  },
];
