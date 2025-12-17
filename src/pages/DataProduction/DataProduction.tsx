import React, { useState, useMemo } from "react";
import { Search, ArrowLeft, Leaf } from "lucide-react";
import { Link } from "wouter";
import { CATEGORIES, PRODUCTS } from "../../data/dataPageProduct";
import CardProduct from "../../components/organism/CardProduct";

const DataProduction: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Logic Filter
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#EAE5E3] font-sans relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-[-100px] w-96 h-96 bg-[#7DA381]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Navbar / Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-eco-dark/60 hover:text-eco-dark mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-eco-dark tracking-tight">
              Katalog <span className="text-eco-primary">Produk</span>
            </h1>
            <p className="text-eco-dark/70 mt-2 max-w-lg">
              Temukan produk olahan Eco Enzyme berkualitas untuk kebutuhan rumah
              tangga dan pertanian Anda.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-eco-primary transition-colors" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari produk..."
                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border-2 border-transparent focus:border-eco-primary/30 focus:ring-4 focus:ring-eco-primary/10 outline-none transition-all shadow-sm"
              />
            </div>
          </div>
        </header>

        <div className="flex overflow-x-auto pb-4 gap-3 mb-8 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-eco-dark text-white shadow-lg shadow-eco-dark/20"
                  : "bg-white text-eco-dark/60 hover:bg-white/80 hover:text-eco-dark border border-transparent hover:border-eco-dark/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {filteredProducts.map((product) => (
              <CardProduct
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-eco-dark/20">
            <Leaf className="w-16 h-16 text-eco-dark/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-eco-dark">
              Produk tidak ditemukan
            </h3>
            <p className="text-eco-dark/60">
              Coba cari dengan kata kunci lain atau kategori berbeda.
            </p>
          </div>
        )}

        {/* CTA Section (Footer Banner) */}
        <div className="bg-eco-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-eco-primary opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Catatan Penting
              </h2>
              <p className="text-white/70 max-w-xl">
                Seluruh foto pada halaman ini merupakan ilustrasi untuk
                mempermudah penyajian visual. Produk eco enzyme asli tersedia
                dan sudah beredar di pasaran.
              </p>
            </div>
            <a
              href="https://id.shp.ee/ogHLYPN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-eco-primary text-white font-bold rounded-2xl hover:bg-[#8Cb391] transition-colors shadow-lg shadow-eco-primary/20 whitespace-nowrap"
            >
              Cek Product di <span className="text-orange-300">Shoppe</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProduction;
