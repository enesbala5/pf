export const tags = ['branding', 'ui-ux', 'smmm', 'tshirt', 'website', 'development', 'identity'] as const;
export type Tag = typeof tags[number];

export type User = {
	id: string;
	email: string;
};
