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
    <Section id="benefit" className="mt-16 mb-16">
      <Container>
        <header className="mb-14 flex items-center">
          <h3 className="flex-1 text-5xl lg:text-6xl font-extrabold text-[#37723B] mb-4">
            Manfaat Penggunaan <br /> Eco Enzyme
          </h3>
          <p className="lg:text-xl max-w-2xl font-normal text-[#414A37] text-left">
            Eco Enzyme adalah solusi alami dan serbaguna untuk kebutuhan makhluk
            hidup.Klik card di bawah untuk melihat detail manfaat.
          </p>
        </header>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-4 ">
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
