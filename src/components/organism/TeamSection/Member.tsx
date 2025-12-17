import { useState } from "react";
import { Members } from "../../../data/dataMember";
import { Section } from "../../layout/Section";
import CardTeam from "../CardTeam";
import MemberModal from "./MemberModal";

const Team = () => {
  const [activeCategoryName, setActiveCategoryName] = useState<string | null>(
    null
  );
  const activeCategory = Members.find((c) => c.name === activeCategoryName);
  return (
    <Section className="" id="team">
      <header className="mb-10 lg:mb-24">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-[#37723B] leading-tight text-center">
          Our Team
        </h2>
      </header>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Members.map((category, index) => (
          <CardTeam
            key={index}
            item={category}
            onClick={setActiveCategoryName}
          />
        ))}
      </article>
      {activeCategoryName && activeCategory && (
          <MemberModal
            item={activeCategory}
            onClose={() => setActiveCategoryName(null)}
          />
        )}
    </Section>
  );
};
export default Team;
