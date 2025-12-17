import { memo } from "react";
import type { StepSpecification } from "../../../data/dataStep";

const StepCard = ({ data }: { data: StepSpecification }) => {
  return (
    <div className="relative flex flex-col items-start group">
      <div className="mb-8 w-full">
        <h3 className="text-2xl font-bold text-gray-800 font-sans tracking-tight">
          {data.stepLabel}
        </h3>
        <p className="text-sm text-gray-500 mt-1 font-medium">{data.title}</p>
      </div>

      <div className="md:absolute top-[88px] md:top-[85px] left-0 w-4 h-4 rounded-full bg-stone-600 border-2 border-white z-10 transition-colors duration-300 group-hover:bg-green-600 group-hover:scale-125 shadow-sm" />

      <article
        className="
          mt-12 w-full h-full bg-gray-50/50 backdrop-blur-sm 
          border border-gray-200 rounded-[5px] p-6 
          transition-all duration-300 ease-out
          group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-green-300 group-hover:bg-white
          flex flex-col
        "
      >
        <h4 className="text-lg font-bold text-green-700 mb-3 group-hover:text-green-800 transition-colors">
          {data.description}
        </h4>
        <div className="text-stone-500 text-base leading-relaxed space-y-1 font-normal">
          {data.items.map((item, idx) => (
            <span key={idx}>{item} </span>
          ))}
        </div>
      </article>
    </div>
  );
};
const StepCardMemo = memo(StepCard);
export default StepCardMemo;
