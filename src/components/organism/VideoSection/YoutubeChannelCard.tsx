import React from "react";
import { ExternalLink } from "lucide-react";

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
        group relative flex flex-col items-center text-center
        w-full  p-8 bg-white border border-slate-100
        rounded-[2rem] transition-all duration-500
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2
        ${className}
      `}
      aria-label={`Kunjungi channel YouTube ${channelName}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

      <figure className="relative z-10 mb-6">
        <div className="relative p-1 bg-gradient-to-tr from-red-500 to-orange-400 rounded-full">
          <div className="bg-white p-1 rounded-full">
            <img
              src={logoSrc}
              alt={`${channelName} Logo`}
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>
        </div>
      </figure>

      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-red-600 transition-colors">
          {channelName}
        </h3>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
          {subText}
        </p>

        <p className="text-sm text-slate-500 mt-4 leading-relaxed line-clamp-2">
          Temukan konten inspiratif dan edukasi mengenai alam
        </p>

        <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-800 group-hover:gap-3 transition-all">
          <span>KUNJUNGI CHANNEL</span>
          <ExternalLink size={14} className="text-slate-400" />
        </div>
      </div>
    </a>
  );
};

export default YoutubeChannelCard;
