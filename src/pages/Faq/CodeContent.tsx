import React, { memo } from "react";
import Accordion, { ComparisonImage } from "./Accordion";
import FaqSection from "./FaqSection";

interface ComparisonItem {
  id: string;
  title: string;
  comparisonContent: {
    vanillaTitle: string;
    vanillaSrc: string;
    tailwindReactTitle: string;
    tailwindReactSrc: string;
  };
}

const comparisonData: ComparisonItem[] = [
  {
    id: "css-vs-tailwind",
    title: "CSS VANILA vs TAILWIND CSS",
    comparisonContent: {
      vanillaTitle: "Vanilla CSS Code",
      vanillaSrc:
        "https://buildwithangga.com/tips/contoh-css-menarik-untuk-website-design",
      tailwindReactTitle: "Tailwind CSS Code",
      tailwindReactSrc: "https://www.petanikode.com/tailwind-dasar/",
    },
  },
  {
    id: "js-vs-react",
    title: "JAVASCRIPT vs REACT JS",
    comparisonContent: {
      vanillaTitle: "Vanilla JavaScript Code",
      vanillaSrc: "https://pixabay.com/id/images/search/javascript/",
      tailwindReactTitle: "React.js + TypeScript Code",
      tailwindReactSrc: "https://www.petanikode.com/reactjs-untuk-pemula/",
    },
  },
];

const CodeContent: React.FC = memo(() => {
  return (
    <FaqSection id="seputar-code" title="Seputar Code">
      <p className="text-[#273B29]/90">
        Berikut adalah perbandingan penggunaan{" "}
        <span className="text-yellow-400">Javascript - </span>
        <span className="text-orange-600">HTML - </span> 
        <span className="text-blue-400">CSS </span>
        murni Vanilla dengan
        penggunaan React.js dan Tailwind CSS :
      </p>

      {comparisonData.map((item) => (
        <Accordion key={item.id} accordionId={item.id} title={item.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <ComparisonImage
              title={item.comparisonContent.vanillaTitle}
              src={item.comparisonContent.vanillaSrc}
              alt={`Kode perbandingan: ${item.comparisonContent.vanillaTitle}`}
            />
            <ComparisonImage
              title={item.comparisonContent.tailwindReactTitle}
              src={item.comparisonContent.tailwindReactSrc}
              alt={`Kode perbandingan: ${item.comparisonContent.tailwindReactTitle}`}
            />
          </div>
          <blockquote className="mt-4 p-3 border-l-4 border-[#F3C47B] bg-white/50 text-sm italic">
            Penggunaan React.js dan Tailwind CSS cenderung membuat kode lebih
            ringkas, mudah dibaca, dan modular, sesuai prinsip *clean code*.
          </blockquote>
        </Accordion>
      ))}
    </FaqSection>
  );
});

export default CodeContent;
