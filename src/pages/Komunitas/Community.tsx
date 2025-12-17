import { ArrowUpRight } from "lucide-react";
import { Section } from "../../components/layout/Section";

const Community = () => {
  return (
    <Section className="min-h-screen bg-[url('/hero-image-community.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center gap-10 lg:gap-4 p-4">
      <header className="text-center max-w-4xl">
        <span className="text-green-700 font-medium">ECO ENZYME</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          AYO GABUNG KOMUNITAS ECO ENZYME BERSAMA KAMI
        </h1>
      </header>
      <div>
        <a
          href="/"
          className="group flex
            items-center gap-3 bg-primaryLightC border-2 border-primaryDarkC px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_#273B29] hover:translate-y-1 hover:shadow-none transition-all"
        >
          <span className="font-bold text-lg text-primaryDarkC">
            Ayo Telusuri
          </span>
          <div className="bg-[#cfff5e] rounded-full p-1 border border-primaryDarkC">
            <ArrowUpRight className="w-5 h-5 text-primaryDarkC" />
          </div>
        </a>
      </div>
    </Section>
  );
};

export default Community;
