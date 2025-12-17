import logohalodoc from "../assets/halodoc.webp";
import logojurnal from "../assets/jurnal.webp";
export interface Slide {
  title: string;
  content: string;
  url: string;
  logo: string;
  referensi: string;
}

export const slides: Slide[] = [
  {
    title: "Apa itu Eco Enzyme ?",
    content:
      "Eco enzyme adalah cairan organik yang dihasilkan dari fermentasi sampah berupa kulit buah, sayuran, air, dan gula merah.Proses fermentasi eco enzyme menghasilkan alkohol atau senyawa kimia lain yang bersifat asam dan membentuk kandungan konsentrat desinfektan.",
    url: "https://journals.upi-yai.ac.id/index.php/ikraith-teknologi/article/view/3242",
    logo: logojurnal,
    referensi: "Jurnal Eco Enzyme dengan Kulit Buah dan Sayuran Beserta Manfaatnya untuk Kehidupan Manusia"
  },
  {
    title: "Produksi Eco-Enzyme Masih Tanpa Standar Baku",
    content:
      "Belum ada regulasi atau standar mutu nasional yang kuat untuk penggunaan Eco-Enzyme dalam skala besar atau sebagai produk komersial, sehingga praktisi komunitas sering membuat sendiri dengan prosedur yang berbeda-beda.",
    url: "https://share.google/koVU9GGEoySPfSHdH",
    logo: logojurnal,
    referensi: "Jurnal Analisis Masalah Komersialisasi Eco Enzyme Pada Komunitas Eco Enzyme Nusantara"
  },
  {
    title: "Mengapa Eco Enzyme itu Penting?",
    content:
      "Eco enzyme membantu mengurangi sampah organik, menggantikan bahan kimia berbahaya, membersihkan air sungai, dan mendukung pertanian organik. Satu botol eco enzyme bisa menggantikan banyak produk pembersih kimia!",
    url: "https://www.halodoc.com/artikel/eco-enzyme-dari-sampah-organik-solusi-ramah-lingkungan-dan-hemat-biaya",
    logo: logohalodoc,
    referensi: "Artikel Eco enzyme dari sampah organik solusi ramah lingkungan dan hemat biaya"
  },
  {
    title: "Hal hal yang perlu diperhatikan",
    content:
      "Eco enzyme umumnya aman, namun dapat menyebabkan iritasi kulit atau reaksi alergi pada sebagian orang. Hindari penggunaan jika muncul iritasi, dan jangan dikonsumsi tanpa pengawasan dokter.",
    url: "https://www.halodoc.com/artikel/eco-enzyme-dari-sampah-organik-solusi-ramah-lingkungan-dan-hemat-biaya",
    logo: logohalodoc,
    referensi: "Artikel Eco enzyme dari sampah organik solusi ramah lingkungan dan hemat biaya"
  },
];
