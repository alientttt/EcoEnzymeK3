import React, { memo } from "react";
import { Layers } from "lucide-react";

interface AsideNavProps {
  sections: { id: string; title: string }[];
  onNavigate: (id: string) => void;
  activeSectionId: string;
}

const AsideNav: React.FC<AsideNavProps> = memo(
  ({ sections, onNavigate, activeSectionId }) => {
    return (
      <aside className="p-4 rounded-lg bg-[#EAE5E3] border border-[#7DA381]/50 shadow-lg">
        <p className="aside-nav__title font-bold text-[#273B29] mb-3 flex items-center">
          <Layers className="w-4 h-4 mr-2" />
          Daftar Isi
        </p>
        <ul className="aside-nav__list space-y-1 text-sm text-[#273B29]/80">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`aside-nav__item w-full text-left py-1 px-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7DA381]
                  ${
                    activeSectionId === section.id
                      ? "bg-[#7DA381] text-white font-semibold"
                      : "hover:bg-[#7DA381]/10"
                  }`}
                onClick={() => onNavigate(section.id)}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
);

export default AsideNav;