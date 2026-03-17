import { ImageSourcePropType } from "react-native";
export type Program = {
  id: number;
  university: string;
  country: string;
  image: ImageSourcePropType;
  description: string;
  shortDescription: string;
  duration: string;
  language: string;
  field: string;
  requirements: Record<string, string>;
};
export const programs: Program[] = [
  {
    id: 1,
    university: "University of Toronto",
    country: "Canada",
    image: require("../assets/images/universities/toronto.jpg"),
    shortDescription:
      "Top ranked university offering multiple international programs.",
    description:
      "The University of Toronto is Canada's leading institution and one of the world's top research universities. International students benefit from a diverse campus with cutting-edge labs and world-class faculty.",
    duration: "1–2 years",
    language: "English",
    field: "STEM · Business · Arts",
    requirements: { IELTS: "6.5+", GPA: "3.0 / 4.0", Deadline: "Jan 15" },
  },
  {
    id: 2,
    university: "University of Melbourne",
    country: "Australia",
    image: require("../assets/images/universities/melbourne.jpg"),
    shortDescription:
      "Popular destination for international students with top global rankings.",
    description:
      "Australia's #1 university, consistently ranked in the global top 35. Located in one of the world's most liveable cities with strong industry connections.",
    duration: "1–3 years",
    language: "English",
    field: "Sciences · Law · Commerce",
    requirements: { IELTS: "6.5+", GPA: "3.0 / 4.0", Deadline: "Oct 31" },
  },
  {
    id: 3,
    university: "ETH Zürich",
    country: "Switzerland",
    image: require("../assets/images/universities/zurich.jpg"),
    shortDescription:
      "World-leading technical university, home to 21 Nobel laureates.",
    description:
      "ETH Zürich is consistently ranked among the best universities globally for science and technology, with a strong tradition of innovation and entrepreneurship.",
    duration: "1–2 years",
    language: "English / German",
    field: "Engineering · Physics · CS",
    requirements: { IELTS: "7.0+", GPA: "3.5 / 4.0", Deadline: "Dec 15" },
  },
  {
    id: 4,
    university: "National Univ. of Singapore",
    country: "Singapore",
    image: require("../assets/images/universities/singapore.jpg"),
    shortDescription:
      "Asia's top university, bridging East and West in a global city.",
    description:
      "NUS is consistently ranked Asia's #1 university. It offers a unique East-West academic experience in one of Asia's most dynamic cities with strong industry ties.",
    duration: "1–2 years",
    language: "English",
    field: "Business · CS · Engineering",
    requirements: { IELTS: "6.5+", GPA: "3.2 / 4.0", Deadline: "Feb 28" },
  },
];
