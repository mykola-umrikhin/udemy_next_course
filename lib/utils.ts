import { tagMap } from "@/constants/tagMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDevIconClassName = (tagName: string) => {
  const normalizedTagName = tagName.replace(/[ .]/g, "").toLowerCase();

  return tagMap[normalizedTagName]
    ? `${tagMap[normalizedTagName]} colored`
    : "devicon-code-plain"; // Default icon if no match
};
