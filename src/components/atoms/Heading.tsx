type headingProps = {
  title: string;
  style?: string;
};
const Heading = ({ title, style }: headingProps) => {
  return (
    <h1 className={`text-7xl font-bold text-center p-12 ${style}`}>{title}</h1>
  );
};
export default Heading;
