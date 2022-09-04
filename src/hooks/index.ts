import type { GetSession, Handle } from '@sveltejs/kit';
import type { Theme } from 'src/types';
import type { Writable } from 'svelte/store';

import { theme } from '$lib/state/theme';
import { isTheme } from '../types';
import { getCookieValue } from '$lib/state/getCookieValue';

export type SessionData = { theme: Theme };
export type SessionStore = Writable<SessionData>;

const getThemeFromCookie = (cookie: string | null) => {
	const theme = getCookieValue(cookie, 'theme');
	return isTheme(theme) ? theme : null;
};

export const handle: Handle = async ({
	event,
	resolve,
}) => {
	const cookie = event.request.headers.get('cookie');
	event.locals.theme = getThemeFromCookie(cookie);

	const response = await resolve(event);
	return response;
};

export const getSession: GetSession = ({ locals }) => {
	const theme = locals.theme;

	return { theme };
};
