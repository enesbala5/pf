import type { RequestHandler } from './$types';
import { isTheme } from 'src/types';

// PUT /theme
export const PUT: RequestHandler = async ({ request }: any) => {
	const theme = await request.text();

	if (!isTheme(theme)) {
		return new Response(`not a valid theme value: ${theme}`, { status: 400 });
	}

	return new Response(JSON.stringify(`Theme set: ${theme}`), {
		headers: {
			'set-cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/`,
		},
	});
};

export const DELETE: RequestHandler = async () => {
	return new Response(JSON.stringify(`Theme deleted.`), {
		status: 204,
		headers: {
			'set-cookie': `theme= ; Max-Age=0; SameSite=Strict; HttpOnly; Path=/`,
		},
	});
};
