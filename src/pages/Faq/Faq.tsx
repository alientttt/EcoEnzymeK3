import React, { useCallback } from "react";
import HeaderFaq from "./HeaderFaq";
import AsideNav from "./AsideNav";
import TechnologyContent from "./TechnologySection";
import CodeContent from "./CodeContent";
import style from "./style.module.css";

const sections = [
  { id: "teknologi", title: "Teknologi" },
  { id: "seputar-code", title: "Seputar Code" },
];

const Faq: React.FC = () => {
  const handleNavigate = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleExit = useCallback(() => {
    window.location.href = "/";
  }, []);

  return (
    <div className={style.faq}>
      <HeaderFaq onExit={handleExit} />

      <div className={style.faq__container}>
        <main className={style.faq__grid}>
          <nav className={style.faq__nav}>
            <AsideNav
              sections={sections}
              onNavigate={handleNavigate}
              activeSectionId="teknologi"
            />
          </nav>

          <div className={style.faq__content}>
            <TechnologyContent />
            <CodeContent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Faq;
