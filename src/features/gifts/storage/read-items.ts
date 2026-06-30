import { STORAGE_KEYS } from "@/core/storage";

export function readStorageItems(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) ?? "[]");
  } catch {
    return [];
  }
}
