export interface StepSpecification {
  id: number;
  stepLabel: string;
  title: string;
  description: string;
  items: string[];
}

export const STEPS_DATA: StepSpecification[] = [
  {
    id: 1,
    stepLabel: "Step 1",
    title: "Persiapan Bahan & Wadah",
    description: "Siapkan bahan dan wadah",
    items: [
      "Siapkan wadah plastik bersih dan campurkan bahan dengan rasio 1 bagian gula, 3 bagian sampah organik, dan 10 bagian air."
    ],
  },
  {
    id: 2,
    stepLabel: "Step 2",
    title: "Pencampuran",
    description: "Gabungkan semua bahan",
    items: [
      "Larutkan gula dalam air hingga 60% volume wadah, lalu masukkan potongan kulit buah atau sayur dan aduk hingga merata.",
    ],
  },
  {
    id: 3,
    stepLabel: "Step 3",
    title: "Fermentasi",
    description: "Proses fermentasi 3 bulan",
    items: [
      "Tutup rapat, beri label, dan simpan di tempat gelap selama 3 bulan. Buka tutup seminggu sekali untuk mengeluarkan gas.",
    ],
  },
  {
    id: 4,
    stepLabel: "Step 4",
    title: "Panen & Penyaringan",
    description: "Memanen hasil fermentasi",
    items: [
      "Setelah 3 bulan, saring cairan berwarna coklat dan simpan di botol bersih untuk digunakan sebagai pembersih atau penyubur tanaman.",
    ],
  },
];
