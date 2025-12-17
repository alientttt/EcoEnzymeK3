import type { Category } from "../../data/dataManfaat";
import { ArrowRight } from "lucide-react";
const CardManfaat = ({item,onClick,}: {item: Category;onClick: (title: string) => void;}) => {
  return (
    <div
      onClick={() => onClick(item.title)}
      className="group bg-[#dfdad5] rounded-[1rem] p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#37723B]/20 relative overflow-hidden flex flex-col items-start text-left h-full w-full lg:w-80"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-[#37723B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden shadow-lg">
        <img
          src={item.img}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h4 className="text-xl font-bold text-[#37723B] mb-2 mt-2">
        {item.title}
      </h4>
      <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed">
        {item.caption}
      </p>

      <div className="mt-auto flex items-center text-sm font-bold text-[#37723B] group-hover:gap-2 transition-all">
        <span>Lihat Manfaat Lebih Lanjut</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
};
export default CardManfaat;
