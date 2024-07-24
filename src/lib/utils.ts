import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// For to add dynamic classes with tailwind CSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
