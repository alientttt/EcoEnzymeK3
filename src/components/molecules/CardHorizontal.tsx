type CardProps<T> = {
  item: T;
  fields: {
    image: keyof T;
    title: keyof T;
    url?: keyof T;
    description?: keyof T;
  };
};

const CardHorizontal = <T,>({ item, fields }: CardProps<T>) => {
  const Icon = item[fields.image] as React.ComponentType<any>;

  return (
    <a
      href={fields.url ? String(item[fields.url]) : "#"}
      className="bg-[#F8F7F6] backdrop-blur-sm p-4 rounded-xl shadow w-80 transition-transform duration-300 hover:scale-[1.02] cursor-pointer flex justify-start items-center gap-12"
    >
      <div className="w-[20%] rounded-[10px] overflow-hidden flex items-center justify-center bg-[#E0D8D5] p-2">
          <Icon className="w-6 h-6 text-[#675E5A]" />
      </div>

      <h3 className="text-base font-bold text-[#857974] w-[70%]">
        {String(item[fields.title])}
      </h3>
    </a>
  );
};

export default CardHorizontal;
