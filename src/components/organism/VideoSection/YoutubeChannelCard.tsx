import React from "react";
interface YoutubeChannelCardProps {
  channelName: string;
  subText: string;
  logoSrc: string;
  href: string;
  className?: string;
}
const YoutubeChannelCard: React.FC<YoutubeChannelCardProps> = ({
  channelName,
  subText,
  logoSrc,
  href,
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative flex items-center gap-5 
        w-full max-w-xl p-5 overflow-hiddencursor-pointer
        ${className}
      `}
      aria-label={`Kunjungi channel YouTube ${channelName}`}
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-50 transition-colors duration-500" />

      <figure className="relative z-10 flex-shrink-0">
        <div className="p-1 border-2 rounded-full">
          <img
            src={logoSrc}
            alt={`${channelName} Logo`}
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
      </figure>

      <div className="relative z-10 flex flex-col items-start justify-center">
        <h3 className="text-xl font-bold transition-colors">{channelName}</h3>
        <p className="text-sm font-medium flex items-center gap-1">
          {subText}
          <span className="" title="Verified">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </p>
      </div>
    </a>
  );
};

export default YoutubeChannelCard;
