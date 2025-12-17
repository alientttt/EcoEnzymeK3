import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../../../data/dataAbout";
import type { Slide } from "../../../data/dataAbout";
import { Section } from "../../layout/Section";
import styles from "./styles.module.css";

// Constants
const CARDS_PER_VIEW = 2;

// Types
type Direction = "left" | "right";

interface ClickCoords {
  x: number;
  y: number;
}

const About = () => {
  // State Management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("right");
  const [clickedSlideData, setClickedSlideData] = useState<Slide | null>(null);
  const [clickCoords, setClickCoords] = useState<ClickCoords | null>(null);

  // Computed Values
  const maxIndex = slides.length - CARDS_PER_VIEW;
  const visibleCards = slides.slice(
    currentIndex,
    currentIndex + CARDS_PER_VIEW
  );

  // Navigation Handlers
  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setClickedSlideData(null);
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
    setClickedSlideData(null);
  };

  // Click Handler
  const handleSlideClick = (index: number) => {
    return (event: React.MouseEvent<HTMLImageElement>) => {
      const currentSlide = slides[index];
      setClickedSlideData(currentSlide);
      setClickCoords({
        x: event.clientX,
        y: event.clientY,
      });

      console.log("Data Slide Yang Disimpan:", currentSlide);
    };
  };

  const handleCloseDetails = () => {
    setClickedSlideData(null);
    setClickCoords(null);
  };

  // Dynamic class helper
  const getSliderCardsClass = () => {
    const baseClass = styles.slider__cards;
    const directionClass =
      direction === "right"
        ? styles["slider__cards--slide-left"]
        : styles["slider__cards--slide-right"];
    return `${baseClass} ${directionClass}`;
  };

  return (
    <Section className={styles.about} id="about">
      <div className={styles.about__content}>
        {/* Slider Container */}
        <div className={styles.slider}>
          {/* Cards Wrapper */}
          <div className={styles.slider__wrapper}>
            {/* Navigation Buttons */}
            <div className={styles.slider__controls}>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`${styles.slider__button} ${styles["slider__button--prev"]}`}
                aria-label="Slide sebelumnya"
              >
                <ChevronLeft size={24} className={styles.slider__icon} />
              </button>
            </div>

            {/* Card Content */}
            <div key={currentIndex} className={getSliderCardsClass()}>
              {visibleCards.map((slide, index) => {
                const slideIndex = currentIndex + index;
                return (
                  <article
                    key={`${slide.title}-${slideIndex}`}
                    className={styles.card}
                  >
                    {/* Card Header */}
                    <div className={styles.card__header}>
                      <div className={styles.card__indicator}></div>
                      <h2 className={styles.card__title}>{slide.title}</h2>
                    </div>

                    {/* Card Content */}
                    <p className={styles.card__description}>{slide.content}</p>

                    {/* Card Footer */}
                    <footer className={styles.card__footer}>
                      <div className={styles.card__reference}>
                        <h3 className={styles["card__reference-label"]}>
                          Sumber Referensi :
                        </h3>
                        <img
                          src={slide.logo}
                          alt={`Logo ${slide.title}`}
                          onClick={handleSlideClick(slideIndex)}
                          className={styles.card__logo}
                          title="Klik untuk melihat detail referensi"
                        />
                      </div>
                    </footer>
                  </article>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className={styles.slider__controls}>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className={`${styles.slider__button} ${styles["slider__button--next"]}`}
                aria-label="Slide selanjutnya"
              >
                <ChevronRight size={24} className={styles.slider__icon} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {clickedSlideData && clickCoords && (
        <div
          className={styles.modal}
          style={{
            left: `${clickCoords.x}px`,
            top: `${clickCoords.y}px`,
            transform: "translate(1%, -50%)",
          }}
        >
          {/* Modal Header */}
          <div className={styles.modal__header}>
            <h3 className={styles.modal__title}>📚 Detail</h3>
            <button
              onClick={handleCloseDetails}
              className={styles.modal__close}
              aria-label="Tutup detail referensi"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className={styles.modal__body}>
            <div className={styles.modal__section}>
              <span className={styles.modal__label}>Judul:</span>
              <p className={styles.modal__text}>{clickedSlideData.title}</p>
            </div>

            <div className={styles.modal__section}>
              <span className={styles.modal__label}>Deskripsi:</span>
              <p
                className={`${styles.modal__text} ${styles["modal__text--small"]}`}
              >
                {clickedSlideData.referensi}
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className={styles.modal__footer}>
            <a
              className={styles.modal__link}
              href={clickedSlideData.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            <img
              src={clickedSlideData.logo}
              alt="Source logo"
              className={styles.modal__logo}
            />
          </div>
        </div>
      )}
    </Section>
  );
};

export default About;
