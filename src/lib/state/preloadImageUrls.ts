import { writable } from "svelte/store";

type CategoryMobile = "dev" | "uiux" | "3d"

export const preloadImageUrls = writable(['']);
export const selectedCategoryMobile = writable(<CategoryMobile>'dev')