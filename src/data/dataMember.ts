export interface Member {
  name: string;
  description: string;
  image: string;
  imageReal?: string;
}

import adera from "../assets/adera-card.webp";
import akmal from "../assets/mahesa-card.webp";
import ifal from "../assets/ifal-card.webp";
import zahra from "../assets/zahra-card.webp";
import bagas from "../assets/bagas-card.webp";
import tiara from "../assets/tiara-card.webp";
import devin from "../assets/devin-card.webp";
import danu from "../assets/danu-card.webp";

import aderaReal from "../assets/adera.webp";
import akmalReal from "../assets/akmal.webp";
import ifalReal from "../assets/ifal.webp";
import zahraReal from "../assets/zahra.webp";
import bagasReal from "../assets/bagas.webp";
import tiaraReal from "../assets/tiara.webp";
import devinReal from "../assets/devin.webp";
import danuReal from "../assets/danu.webp";

export const Members: Member[] = [
  {
    name: "Zahra Aulia Salsabila",
    description: "1621",
    image: zahra,
    imageReal: zahraReal
  },
  {
    name: "Tiara Aulia",
    description: "1645",
    image: tiara,
    imageReal:tiaraReal
  },
  {
    name: "Bagas Aditya",
    description: "1625",
    image: bagas,
    imageReal:bagasReal
  },
  {
    name: "Ade Rahmawati",
    description: "1606",
    image: adera,
    imageReal:aderaReal
  },
  {
    name: "Ifal Maulana",
    description: "1627",
    image: ifal,
    imageReal:ifalReal
  },
  {
    name: "Devin Fariz",
    description: "1642",
    image: devin,
    imageReal:devinReal
  },
  {
    name: "Danu Hadiwijoyo",
    description: "1629",
    image: danu,
    imageReal:danuReal
  },
  {
    name: "Akmal Mahesa",
    description: "1641",
    image: akmal,
    imageReal:akmalReal
  },
];
