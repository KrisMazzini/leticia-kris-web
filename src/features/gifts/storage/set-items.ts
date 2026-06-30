import { STORAGE_KEYS } from "@/core/storage";

export function setStorageItems(cartIds: string[]) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartIds));
}
