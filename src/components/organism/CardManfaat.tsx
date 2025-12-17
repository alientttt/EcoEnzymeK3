import type { Category } from "../../data/dataManfaat";
import { ArrowRight } from "lucide-react";

const CardManfaat = ({
  item,
  onClick,
}: {
  item: Category;
  onClick: (title: string) => void;
}) => {
  return (
    <article
      onClick={() => onClick(item.title)}
      className="
        group relative flex flex-col items-start h-96 w-full lg:w-80 p-4
        text-[#414A37] rounded-[1rem] overflow-hidden
        hover:shadow-2xl 
        transition-all duration-300 cursor-pointer
        bg-center bg-cover bg-no-repeat
      "
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

      <div className="relative z-10 flex flex-1 justify-end items-start w-full p-4">
        <h2 className="text-xl font-bold text-[#F8F7F6] border border-[#F8F7F6]/50 rounded-full w-fit px-4 backdrop-blur-sm">
          {item.title}
        </h2>
      </div>

      <div
        className="
          box-desc relative z-10 flex h-fit w-full justify-between items-end 
          text-[#F8F7F6] font-normal text-lg max-w-2xl 
          p-4 rounded-xl transition-all duration-500
          border border-transparent
          hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 hover:shadow-xl
        "
      >
        <h4 className="flex-1 pr-4">{item.caption}</h4>
        <div className="shrink-0 mb-1">
          <ArrowRight size={30} />
        </div>
      </div>
    </article>
  );
};

export default CardManfaat;
