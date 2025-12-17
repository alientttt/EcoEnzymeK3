import React, { memo } from "react";
import FaqSection from "./FaqSection";

const TechnologyContent: React.FC = memo(() => {
  return (
    <FaqSection id="teknologi" title="Teknologi Yang Digunakan">
      <p className="text-[#273B29]/90">
        Kami menggunakan teknologi berikut untuk memastikan website yang modern, responsif, dan mudah di-*maintain*:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-4 text-[#273B29]/90">
        <li>
          <span className="text-blue-500 font-bold">REACT JS</span> : Library berbasis komponen untuk membangun antarmuka pengguna (UI) yang interaktif dan efisien.
        </li>
        <li>
          <span className="text-cyan-500 font-bold">TAILWIND CSS</span> : Framework CSS utilitas-pertama untuk desain cepat dan konsisten, dipadukan dengan Vanilla CSS untuk layout kompleks.
        </li>
      </ul>
    </FaqSection>
  );
});

export default TechnologyContent;