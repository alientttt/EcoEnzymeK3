import React, { useState, useCallback, memo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  accordionId: string;
}

const Accordion: React.FC<AccordionProps> = memo(
  ({ title, children, accordionId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = useCallback(() => {
      setIsOpen((prev) => !prev);
    }, []);

    const Icon = isOpen ? ChevronUp : ChevronDown;

    return (
      <section
        id={`accordion-${accordionId}`}
        className="accordion mb-4 rounded-xl overflow-hidden shadow-lg border border-[#7DA381]/50 bg-[#F5F2F1] transition-all duration-300"
      >
        <h3 className="accordion__header text-xl font-semibold">
          <button
            role="button"
            aria-expanded={isOpen}
            aria-controls={`panel-${accordionId}`}
            onClick={toggleAccordion}
            className="accordion__button flex justify-between items-center w-full p-5 text-[#273B29] hover:bg-[#7DA381]/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7DA381] focus:ring-opacity-50"
          >
            {title}
            <Icon
              className={`accordion__icon w-6 h-6 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </h3>

        <div
          id={`panel-${accordionId}`}
          role="region"
          aria-labelledby={`accordion-${accordionId}`}
          className={`accordion__panel grid transition-all duration-500 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden p-5 pt-0 text-[#273B29]/80">
            {children}
          </div>
        </div>
      </section>
    );
  }
);

interface ComparisonImageProps {
  title: string;
  src: string;
  alt: string;
}

const ComparisonImage: React.FC<ComparisonImageProps> = ({
  title,
  src,
  alt,
}) => (
  <div className="comparison-image flex flex-col items-center p-3 border border-[#273B29]/20 rounded-lg bg-white/70 shadow-inner">
    <h4 className="comparison-image__title text-lg font-medium mb-2 text-[#273B29]">
      {title}
    </h4>
    <img
      src={src}
      alt={alt}
      className="comparison-image__img w-full h-auto object-contain rounded-md"
      loading="lazy"
    />
  </div>
);

export default Accordion;
export { ComparisonImage };
