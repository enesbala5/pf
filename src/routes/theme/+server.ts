import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async ({ request, cookies }) => {
	const { darkMode } = await request.json();

	const darkModeCookieValueString = String(darkMode);
	cookies.set('darkMode', darkModeCookieValueString, {
		path: '/',
	});
	return json(`Set theme to: ${darkModeCookieValueString} || ${darkMode}`);
}) satisfies RequestHandler;
