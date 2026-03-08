import { twMerge } from "tailwind-merge";

export function cnx(...inputs: string[]) {
  return twMerge(inputs);
}