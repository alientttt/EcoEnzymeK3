import React, { memo } from "react";
import { ArrowLeft } from "lucide-react";

interface HeaderFaqProps {
  onExit: () => void;
}

const HeaderFaq: React.FC<HeaderFaqProps> = memo(({ onExit }) => {
  return (
    <header className="sticky top-0 z-20 w-full bg-[#EAE5E3] shadow-md border-b border-[#7DA381]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <button
          onClick={onExit}
          aria-label="Kembali ke Halaman Utama"
          className="header-faq__exit-button p-2 text-[#273B29] hover:bg-[#7DA381]/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7DA381]"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-2xl font-bold text-[#7DA381] mr-auto ml-4">FAQ</h1>

      </div>
    </header>
  );
});

export default HeaderFaq;