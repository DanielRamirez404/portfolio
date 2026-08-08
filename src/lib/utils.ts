import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitIntoN(str: string, n: number) {
  const size = Math.ceil(str.length / n);
  return Array.from({ length: n }, (_, i) => str.slice(i * size, (i + 1) * size));
};

export function generateUUID(): string {
  return crypto.randomUUID();
}
