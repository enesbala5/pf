import { page } from '$app/stores';
import { derived, writable } from 'svelte/store';

export const darkModeUnsynced = writable<boolean | undefined>(undefined);
export const darkMode = derived([page, darkModeUnsynced], ([$page, $darkModeUnsynced], set) => {
	if ($darkModeUnsynced !== undefined) {
		set($darkModeUnsynced);
		return;
	}
	if ($page?.data?.darkMode) {
		set($page?.data?.darkMode ?? false);
		return;
	}
});
