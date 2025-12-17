import { useState } from "react";
import CardManfaat from "../CardManfaat";
import DetailViewManfaat from "./DetailViewManfaat";
import { categoriesData } from "../../../data/dataManfaat";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";

const Manfaat = () => {
  const [activeCategoryTitle, setActiveCategoryTitle] = useState<string | null>(
    null
  );
  const activeCategory = categoriesData.find(
    (c) => c.title === activeCategoryTitle
  );

  return (
    <Section id="benefit">
      <Container>
        <header className="mb-16">
          <h3 className="text-5xl lg:text-6xl font-extrabold text-[#37723B] mb-4">
            Manfaat Penggunaan <br /> Eco Enzyme
          </h3>
          <p className="lg:text-xl font-medium text-[#414A37]">
            Eco Enzyme adalah solusi alami dan serbaguna. Klik untuk melihat
            detail manfaatnya di setiap kategori.
          </p>
        </header>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {categoriesData.map((category, index) => (
              <CardManfaat
                key={index}
                item={category}
                onClick={setActiveCategoryTitle}
              />
            ))}
          </div>
        </div>
        {activeCategoryTitle && activeCategory && (
          <DetailViewManfaat
            item={activeCategory}
            onClose={() => setActiveCategoryTitle(null)}
          />
        )}
      </Container>
    </Section>
  );
};

export default Manfaat;
