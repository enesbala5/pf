import { writable } from "svelte/store";

type CategoryMobile = "dev" | "uiux" | "other"

export const preloadImageUrls = writable(['']);
export const selectedCategoryMobile = writable(<CategoryMobile>'dev')