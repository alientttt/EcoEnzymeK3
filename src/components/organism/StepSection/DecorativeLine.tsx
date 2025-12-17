import { memo } from "react";
const DecorativeLine = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none opacity-60">
    <svg
      className="relative block w-[200%] h-[100px] md:h-[150px] animate-pulse-slow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="blurFilter" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-green-700/30"
        filter="url(#blurFilter)"
      />
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        className="fill-green-800/20"
        filter="url(#blurFilter)"
      />
    </svg>
  </div>
);
const DecorativeLineMemo = memo(DecorativeLine);
export default DecorativeLineMemo;
