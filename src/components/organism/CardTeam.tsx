import type { Member } from "../../data/dataMember";

const CardTeam = ({
  item,
  onClick,
}: {
  item: Member;
  onClick: (name: string) => void;
}) => {
  return (
    <div className="relative group">
      <figure className="w-full relative">
        <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 border">
          <img
            src={item.image}
            alt="image-people"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          onClick={() => onClick(item.name)}
          className="label-card w-full absolute bottom-5 transform flex flex-col justify-center items-center p-4 bg-[#F8F7F6] text-[#414A37] 
          invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 translate-y-[100px] group-hover:translate-y-0 cursor-pointer"
        >
          <span className="lg:text-xs xl:text-xl font-medium">{item.name}</span>

          <span className="lg:text-xs xl:text-xl font-medium">
            {item.description}
          </span>
        </div>
      </figure>
    </div>
  );
};

export default CardTeam;
