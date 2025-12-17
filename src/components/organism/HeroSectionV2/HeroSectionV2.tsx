import React from "react";
import styles from "./HeroSection.module.css";
import heroImage from "../../../assets/foto.png";
import { SocialMedia } from "./SocialMedia";
import { FeatureCard } from "./FeatureCard";
import PentagonBackground from "../../atoms/PentangonBackground";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Tutorial", href: "#step" },
  { name: "Contact", href: "#contact" },
];

const FEATURES = [
  { label: "Go to", title: "Product", href: "/dataproduction" },
  { label: "Go to", title: "Komunitas", href: "/komunitas" },
  { label: "Go to", title: "Faq", href: "/faq" },
];

const HeroSectionV2: React.FC = () => {
  return (
    <section className={styles.bentoHero}>
      <header className={styles.overNavigation}>
        <nav className={styles.overUl}>
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className={styles.overLink}>
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      <div className={styles.wrapperPentangon}>
        <PentagonBackground className={styles.wrapperSvg} />

        <img
          src={heroImage}
          alt="Eco Enzyme Hero Image"
          className={styles.imageCenter}
        />

        {/* 3. Main Content Grid */}
        <div className={styles.wrapperInnerPentangon}>
          {/* Logo Section */}
          <aside className={`${styles.wrapperLogo} ${styles.areaLogo}`}>
            <div className="wrapper-logo-text">
              <h1 className="logo-text text-[#F8F7F6] font-semibold text-xl">
                <span className="text-[#FF5500]">ECO</span>ENZYME
              </h1>
            </div>
            <SocialMedia styles={styles} />
          </aside>

          <article className={`${styles.wrapperHeroText} ${styles.areaHero}`}>
            <h2
              className={`${styles.textHero} text-3xl xl:text-5xl font-semibold`}
            >
              Earth-powered products{" "}
              <span className="text-[#414A37]">for eco-friendly living</span>
            </h2>
            <p className="text-sm lg:text-xs xl:text-base lg:text-right">
              Eco enzyme merupakan inovasi berbasis bahan alami yang berperan
              dalam pengelolaan limbah organik, mendukung keberlanjutan
              lingkungan, serta mendorong kesadaran akan pentingnya menjaga
              alam.
            </p>
            <a href="#all" className={styles.btnViewAll}>
              <span>Lets Explore</span>
            </a>
          </article>

          <section className={`${styles.wrapperCards} ${styles.areaCards}`}>
            {FEATURES.map((item, idx) => (
              <FeatureCard
                key={idx}
                label={item.label}
                href={item.href}
                title={item.title}
                className={styles.card}
              />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV2;
