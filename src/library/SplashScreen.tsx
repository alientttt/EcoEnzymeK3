import React, { useEffect, useState, useRef } from "react";
const DURATION = {
  lineDraw: 2000,      // Garis menggambar selama 2 detik
  textReveal: 1000,    // Teks muncul perlahan
  staggerDelay: 200,   // Jeda antara kata "ECO" dan "ENZYME"
  holdTime: 1000,      // Waktu diam sebelum menghilang
  exitSpeed: 800,      // Kecepatan menghilang
} as const;

// Easing function untuk gerakan yang sangat halus (Bezier Curve)
const EASING = "cubic-bezier(2.45, 2.7, 0.76, 1.9)"; // Custom "Ease Out Quint"

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  const [showOutro, setShowOutro] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Refs untuk SVG path
  const shadowPathRef = useRef<SVGPathElement>(null);
  const whitePathRef = useRef<SVGPathElement>(null);

  // 1. Setup Panjang Garis SVG
  useEffect(() => {
    [shadowPathRef, whitePathRef].forEach((ref) => {
      if (ref.current) {
        const length = ref.current.getTotalLength();
        // Set stroke dasharray & offset sama dengan panjang garis (agar terlihat kosong)
        ref.current.style.strokeDasharray = `${length}`;
        ref.current.style.strokeDashoffset = `${length}`;
      }
    });
  }, []);

  // 2. Mengatur Flow Waktu (Intro -> Hold -> Outro)
  useEffect(() => {
    // Total waktu intro = Waktu garis + sedikit buffer sebelum hold
    const introTime = DURATION.lineDraw + 700; 
    
    // Waktu total sebelum memicu Outro
    const timeBeforeOutro = introTime + DURATION.holdTime;

    const timer = setTimeout(() => {
      setShowOutro(true);
    }, timeBeforeOutro);

    return () => clearTimeout(timer);
  }, []);

  // 3. Menangani Selesainya Outro
  useEffect(() => {
    if (showOutro) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onAnimationEnd();
      }, DURATION.exitSpeed + 500); // Tambah buffer sedikit
      return () => clearTimeout(timer);
    }
  }, [showOutro, onAnimationEnd]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#E0D8D5] z-50 font-sans">
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl px-4">
        
        {/* === SVG WAVY LINE === */}
        <div className="relative mb-6 transform translate-y-4"> {/* Container SVG */}
          <svg
            viewBox="0 0 636 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[300px] md:w-[500px] lg:w-[636px] h-72" // Responsif
          >
            {/* Shadow Line (Lapis Belakang) */}
            <path
              ref={shadowPathRef}
              d="M16.1924 199.002C16.1924 199.002 85.3581 30.0358 148.192 67.0019C175.271 82.9325 163.55 126.066 194.192 133.002C235.483 142.348 217.89 45.3233 260.192 47.0019C288.839 48.1386 292.111 82.1789 319.692 90.0019C376.273 106.05 392.881 17.0293 451.692 17.5019C525.005 18.091 599.692 133.002 599.692 133.002"
              stroke="#4F4745"
              strokeWidth="35"
              strokeLinecap="round"
              className={showOutro ? "animate-line-undraw" : "animate-line-draw"}
              style={{
                animationDuration: showOutro ? `${DURATION.exitSpeed}ms` : `${DURATION.lineDraw}ms`,
                animationTimingFunction: EASING,
                animationFillMode: "forwards",
              }}
            />

            {/* White Line (Lapis Depan) */}
            <path
              ref={whitePathRef}
              d="M37.1924 199.002C37.1924 199.002 106.358 30.0358 169.192 67.0019C196.271 82.9325 184.55 126.066 215.192 133.002C256.483 142.348 238.89 45.3233 281.192 47.0019C309.839 48.1386 313.111 82.1789 340.692 90.0019C397.273 106.05 413.881 17.0293 472.692 17.5019C546.005 18.091 620.692 133.002 620.692 133.002"
              stroke="#F8F7F6"
              strokeWidth="35"
              strokeLinecap="round"
              className={showOutro ? "animate-line-undraw" : "animate-line-draw"}
              style={{
                animationDuration: showOutro ? `${DURATION.exitSpeed}ms` : `${DURATION.lineDraw}ms`,
                animationDelay: "100ms", // Sedikit delay untuk efek depth
                animationTimingFunction: EASING,
                animationFillMode: "forwards",
              }}
            />
          </svg>

          {/* MHS Bubble (Mengambang di atas garis) */}
          <div 
            className={`absolute top-[15%] left-[12%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-xs md:text-sm font-bold text-orange shadow-lg
            ${showOutro ? "animate-pop-out" : "animate-pop-in"}`}
            style={{
               animationDelay: showOutro ? "0ms" : `${DURATION.lineDraw * 0.4}ms`, // Muncul saat garis melewati area ini
               animationFillMode: "both",
               animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" // Bouncy effect
            }}
          >
            MHS
          </div>
        </div>

        {/* === TEXT ECO ENZYME === */}
        <h1 className="text-5xl md:text-7xl font-black text-[#FF5500] uppercase tracking-wider flex gap-4 overflow-hidden py-2">
          {/* Kata 1: ECO */}
          <span className="block overflow-hidden">
            <span
              className={`block ${showOutro ? "animate-slide-up-out" : "animate-slide-up-in"}`}
              style={{
                animationDuration: `${DURATION.textReveal}ms`,
                // HARMONI: Mulai muncul saat garis sudah berjalan 60% (1200ms)
                animationDelay: showOutro ? "100ms" : "1200ms", 
                animationFillMode: "both",
                animationTimingFunction: EASING,
              }}
            >
              ECO
            </span>
          </span>

          {/* Kata 2: ENZYME */}
          <span className="block overflow-hidden">
            <span
              className={`block text-[#273B29] ${showOutro ? "animate-slide-up-out" : "animate-slide-up-in"}`}
              style={{
                animationDuration: `${DURATION.textReveal}ms`,
                // HARMONI: Muncul sedikit setelah ECO (Staggered)
                animationDelay: showOutro ? "0ms" : `1400ms`, 
                animationFillMode: "both",
                animationTimingFunction: EASING,
              }}
            >ENZYME
            </span>
          </span>
        </h1>
      </div>

      {/* === GLOBAL STYLES & KEYFRAMES === */}
      <style jsx global>{`
        /* Animasi Garis SVG */
        @keyframes line-draw {
          from { stroke-dashoffset: 1000; } /* Ganti 1000 dengan nilai approx panjang path jika JS belum load */
          to { stroke-dashoffset: 0; }
        }
        @keyframes line-undraw {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 1000; opacity: 0; }
        }
        .animate-line-draw { animation-name: line-draw; }
        .animate-line-undraw { animation-name: line-undraw; }

        /* Animasi Teks (Slide Up Reveal) */
        @keyframes slide-up-in {
          from {
            transform: translateY(110%);
            opacity: 0;
          }
          to {
            transform: translateY(0%);
            opacity: 1;
          }
        }
        @keyframes slide-up-out {
          from {
            transform: translateY(0%);
            opacity: 1;
          }
          to {
            transform: translateY(-110%);
            opacity: 0;
          }
        }
        .animate-slide-up-in { animation-name: slide-up-in; }
        .animate-slide-up-out { animation-name: slide-up-out; }

        /* Animasi Bubble (Pop) */
        @keyframes pop-in {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes pop-out {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0); opacity: 0; }
        }
        .animate-pop-in { animation-name: pop-in; }
        .animate-pop-out { animation-name: pop-out; }
      `}</style>
    </div>
  );
};

export default SplashScreen;