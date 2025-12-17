import React from "react";

interface FaqSectionProps {
  id: string; 
  title: string;
  children: React.ReactNode;
}

const FaqSection: React.FC<FaqSectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="faq-section pt-4 pb-8 space-y-6">
      <h2
        className="faq-section__title text-3xl font-bold text-[#273B29] border-l-4 border-[#7DA381] pl-3"
      >
        {title}
      </h2>
      <div className="faq-section__content space-y-4">{children}</div>
    </section>
  );
};

export default FaqSection;