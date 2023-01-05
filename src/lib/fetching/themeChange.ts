import { darkModeUnsynced } from '$lib/info/darkMode';
import { navigation } from '$lib/info/nav';

export const enableDarkMode = async () => {
	// darkMode.set(true);
	darkModeUnsynced.set(true);
	fetch(navigation.theme, {
		method: 'POST',
		body: JSON.stringify({
			darkMode: true,
		}),
	});
};

export const disableDarkMode = async () => {
	// darkMode.set(false);
	darkModeUnsynced.set(false);

	fetch(navigation.theme, {
		method: 'POST',
		body: JSON.stringify({
			darkMode: false,
		}),
	});
};
