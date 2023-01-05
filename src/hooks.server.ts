import type { Handle } from '@sveltejs/kit';

import { browser } from '$app/environment';

export const handle: Handle = async ({ event, resolve }) => {
	const darkModeCookie = event.cookies.get('darkMode');

	// ? DARK MODE
	if (darkModeCookie) {
		const darkMode = darkModeCookie === 'true';
		event.locals.darkMode = darkMode;
	} else {
		// ? Optional UserPreference Setting
		// if (browser) {
		// 	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		// 	event.locals.darkMode = prefersDarkMode;
		// }
		event.locals.darkMode = false;
	}

	return await resolve(event);
};
