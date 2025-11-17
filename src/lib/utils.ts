import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 * Uses clsx for conditional classes and tailwind-merge to handle conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

export function hook(
  _this: { [x: string]: any },
  method: string | number,
  callback: (arg0: any) => void,
) {
  const orig = _this[method];

  return (...args: any) => {
    callback.apply(_this, args);

    return orig.apply(_this, args);
  };
}

export function sleep(ms: number | undefined) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function shuffleArray(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export function chunkArray(arr: any[], size: number) {
  const chunks: any[] = [];

  let index = 0;
  while (index < arr.length) {
    chunks.push(arr.slice(index, size + index));
    index += size;
  }

  return chunks;
}

export function ensureArray(arr?: any) {
  if (arr === undefined || arr === null) return [];
  if (Array.isArray(arr)) return arr;
  return [arr];
}
