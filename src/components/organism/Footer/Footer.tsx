import { SOCIAL_DATA } from "../../../data/dataSocialMedia";
import styles from "./footer.module.css";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden p-4 md:p-8 lg:p-12 text-white"
    >
      <article
        className={`${styles.footerImage} relative w-full flex flex-col justify-between items-center mx-auto rounded-[2rem] p-8 md:p-16 animate-fade-in-up`}
      >
        {/* gradasi */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" />
        <header className="relative z-10 max-w-4xl text-center space-y-6 mt-12">
          <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium tracking-widest uppercase border border-white/30">
            Get Connected
          </span>
          <h2 className="font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none">
            Join the <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              community!
            </span>
          </h2>
          <p className="text-base md:text-xl max-w-xl mx-auto text-white/80 font-light leading-relaxed">
            Mari berkolaborasi dan bertumbuh bersama. Hubungi kami melalui
            platform sosial media favoritmu.
          </p>
        </header>

        <div className="relative z-10 w-full max-w-6xl mt-20">
          <article className="bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-10">
            <div className="flex flex-col gap-10">
              <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
                {SOCIAL_DATA.map((l) => (
                  <li key={l.id} className="group">
                    <a
                      href={l.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#414A37] font-bold text-sm transition-all duration-300 group-hover:bg-[#414A37] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/20 capitalize"
                    >
                      {l.style}
                      <ArrowUpRight
                        size={16}
                        className="opacity-50 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="space-y-6">
                <hr className="border-t border-white/10" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-medium tracking-widest text-white/50 uppercase">
                  <span>
                    &copy; {new Date().getFullYear()} Kelompok 3 — All Rights
                    Reserved
                  </span>
                  <div className="flex gap-8">
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Privacy Policy
                    </span>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Terms of Service
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
};

export default Footer;
