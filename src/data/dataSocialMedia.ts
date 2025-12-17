import { Instagram, Youtube, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface LinkCategory {
  id: string;
  icon: LucideIcon;
  link: string;
  style: string;
}

export const SOCIAL_DATA: LinkCategory[] = [
  {
    id: "ig",
    icon: Instagram,
    link: "https://share.google/EOGpxCIGEa5g4UZ80",
    style: "instagram",
  },
  {
    id: "yt",
    icon: Youtube,
    link: "https://youtube.com/@eco-enzymenusantara4438?si=xLIFtadnqvlqSMLj",
    style: "youtube",
  },
  {
    id: "web",
    icon: Globe,
    link: "https://zerowaste.id/zero-waste-lifestyle/eco-enzyme/",
    style: "web",
  },
];
