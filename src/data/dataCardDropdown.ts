import toCommunity from "../assets/img-to-community.webp"
import toProduct from "../assets/img-to-product.webp"
import toFaq from "../assets/img-to-faq.webp"

export interface DropdownCardProps {
  imageSrc: string;
  label: string;
  href: string;
}

export const dataDropdownCard:DropdownCardProps[] = [
  {
    imageSrc: toCommunity,
    label: "To Community",
    href: "/komunitas"
  },
  {
    imageSrc: toProduct,
    label: "To Data Product",
    href: "/dataproduction"
  },
    {
    imageSrc: toFaq,
    label: "FAQ?",
    href: "/faq"
  },
]

