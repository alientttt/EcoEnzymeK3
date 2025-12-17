interface logoProps {
  image: string;
  className?: string;
}
const LogoCircle = ({image,className}:logoProps) => {
  return (
    <div className={`${className}`}>
      <img src={image} alt="" />
    </div>
  )
}
export default LogoCircle