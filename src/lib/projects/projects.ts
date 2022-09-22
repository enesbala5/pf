import type { Tag } from 'src/types';
import { writable } from 'svelte/store';

export interface Project {
	projectName: string;
	projectDescription: string;
	date: string;
	thumbnail: string;
	id: string;
	tags: Tag[];
}

export const selectedTags = writable<Tag[]>([]);

export const projects: Project[] = [
	{
		projectName: 'List4Free',
		projectDescription:
			'Brand redefinition and identity design',
		date: 'October 2021',
		thumbnail: 'list4free.jpg',
		id: 'list4free',
		tags: ['branding', 'ui-ux', 'website'],
	},
	{
		projectName: 'Shargan Consulting',
		projectDescription:
			'Website development and database management',
		date: 'July 2022',
		thumbnail: 'list4free.jpg',

		id: 'sharganconsulting',
		tags: ['branding'],
	},
	{
		projectName: 'Click Properties',
		projectDescription:
			'Brand creation and Identity design. Coupled with a new website.',
		date: 'January 2022',
		thumbnail: 'list4free.jpg',

		id: 'clickproperties',
		tags: ['branding'],
	},
	{
		projectName: 'Universi Language Center',
		projectDescription:
			'Brand creation and Identity design. Coupled with a new website.',
		date: 'January 2022',
		thumbnail: 'list4free.jpg',

		id: 'universi',
		tags: ['smmm'],
	},
	{
		projectName: 'Venustre Clothing',
		projectDescription:
			'Brand creation and Identity design. Coupled with a new website.',
		date: 'January 2022',
		thumbnail: 'list4free.jpg',

		id: 'venustre',
		tags: ['branding', 'smmm', 'tshirt'],
	},
	{
		projectName: 'Softoptech',
		projectDescription:
			'Brand creation and Identity design. Coupled with a new website.',
		date: 'January 2022',
		thumbnail: 'list4free.jpg',

		id: 'softoptech',
		tags: ['branding'],
	},
];
