import { useTranslation } from "react-i18next";
import Project1 from "./assets/images/project-1.png";
import Project2 from "./assets/images/project-2.png";

export const projects = [
  {
    title: "Crowndevs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quamvelit, vulputate eu pharetra nec, mattis ac neque.",
    link: "https://crowndevs.netlify.app/",
    img: Project1,
  },
  {
    title: "Animaland",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quamvelit, vulputate eu pharetra nec, mattis ac neque.",
    link: "https://animaland.app/",
    img: Project2,
  },
];

export const languages = [
  { label: "Spanish", code: "es" },
  { label: "English", code: "en" },
];
