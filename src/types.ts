const themes = ['light', 'dark'] as const;
export type Theme = typeof themes[number];

export const isTheme = (theme: unknown): theme is Theme =>
	typeof theme === 'string' &&
	themes.includes(theme as Theme);

export const tags = ['branding', 'ui-ux', 'smmm', 'tshirt', 'website', 'development', 'identity'] as const;
export type Tag = typeof tags[number];

export type User = {
	id: string;
	email: string;
};
