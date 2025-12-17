import { SOCIAL_DATA } from "../../../data/dataSocialMedia";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <section className="relative w-full h-full overflow-y-hidden p-4 md:p-8 lg:p-12 text-white">
      <article
        className={`${styles.footerImage} w-full flex flex-col justify-center items-center mx-auto rounded-md p-4 gap-10 animate-fade-in-up`}
      >
        <header className="max-w-4xl text-center space-y-4 mt-10 md:mt-0">
          <h2 className="font-extrabold text-6xl lg:text-7xl tracking-tight">
            Join to community!
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Klik link di bawah ini untuk terhubung langsung melalui platform
            online dengan komunitas kami
          </p>
        </header>
        <article className="bg-[#F8F7F6] text-[#414A37] w-full max-w-md md:max-w-2xl lg:max-w-7xl rounded-md p-6 md:p-8 flex flex-col items-center gap-6 md:gap-8">
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            {SOCIAL_DATA.map((l)=>(
              <li key={l.id} className="w-full md:mx-auto">
              <a href={l.link} target="_blank" rel="noopener noreferrer" className="w-full md:w-28 py-1 px-4 border border-[#414A37] rounded-full flex justify-center items-center font-medium text-sm md:text-base transition-all duration-300 ease-in-out
                    hover:bg-[#414A37] hover:text-[#F8F7F6] capitalize">{l.style}</a>
            </li>
            ))}
          </ul>
         <div className="w-full px-4 md:px-12">
            <hr className="border-t border-[#414A37]/30 w-full" />
          </div>
          {/* Footer Text */}
          <div className="text-center font-semibold text-sm md:text-base tracking-wide text-[#414A37]/80">
            <span>&copy;{new Date().getFullYear()}Kelompok 3</span>
          </div>
        </article>
      </article>
    </section>
  );
};
export default Footer;
