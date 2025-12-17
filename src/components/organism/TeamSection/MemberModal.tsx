import { X } from "lucide-react";
import type { Member } from "../../../data/dataMember";

const MemberModal = ({
  item,
  onClose,
}: {
  item: Member;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-[50%] h-auto lg:max-w-6xl lg:h-[45vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col-reverse lg:flex-row relative animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 bg-white/80 hover:bg-[#37723B] hover:text-white text-[#37723B] rounded-full transition-colors shadow-lg"
        >
          <X size={28} />
        </button>

        <div className="desc-member flex-1 p-8 lg:p-16 flex flex-col justify-center overflow-y-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-bold text-[#37723B]/60 tracking-widest">
              Hi , saya
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#37723B] mb-2">
            {item.name}
          </h2>
          <h3 className="lg:text-xl text-gray-400 font-medium mb-8">
            NPM 20234350{item.description}
          </h3>
        </div>

        <div className="lg:w-1/2 w-full lg:h-full relative bg-gray-100">
          <img
            src={item.imageReal}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
};
export default MemberModal;
