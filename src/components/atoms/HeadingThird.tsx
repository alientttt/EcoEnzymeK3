type headingProps = {
  titleThird: string;
  style?: string;
};
const HeadingThird = ({ titleThird,style }: headingProps) => {
  return <h3 className={`text-[#2D5128] text-5xl font-bold text-center p-12 ${style}`}>{titleThird}</h3>;
};
export default HeadingThird;
