import { STEPS_DATA } from "../../../data/dataStep";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import StepCardMemo from "./StepCard";

const StepSection: React.FC = () => {
  return (
    <Section id="step">
      <Container className="relative z-10">
          <header className="mb-10 lg:mb-24">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#37723B] leading-tight">
              Tahap Pembuatan <br />
              Eco Enzyme.
            </h1>
          </header>

          <div className="relative">
            <div className="hidden lg:block absolute top-[92px] left-0 w-full h-[2px] bg-stone-300 z-0" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              {STEPS_DATA.map((step) => (
                <StepCardMemo key={step.id} data={step} />
              ))}
            </div>
          </div>
      </Container>
    </Section>
  );
};

export default StepSection;
