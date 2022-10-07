import type { Tag } from 'src/types';
import { identity } from 'svelte/internal';
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
		projectName: 'Click Properties',
		projectDescription:
			'Branding for an emerging, novel Real Estate company.',
		date: 'January 2022',
		thumbnail: 'click.svg',

		id: 'clickproperties',
		tags: ['branding', 'identity'],
	},
	{
		projectName: 'Universi Language Center',
		projectDescription:
			'Social Media Management with a focus on improving Brand Recognition.',
		date: 'January 2022',
		thumbnail: 'universi.svg',

		id: 'universi',
		tags: ['smmm'],
	},
	{
		projectName: 'Venustre Clothing',
		projectDescription:
			'Apparel Design and Branding, for an eco-friendly clothing company.',
		date: 'January 2022',
		thumbnail: 'venustre.svg',

		id: 'venustre',
		tags: ['branding', 'smmm', 'tshirt'],
	},
	{
		projectName: 'List4Free',
		projectDescription:
			'Brand creation and identity design for an up-and-coming Real Estate company.',
		date: 'October 2021',
		thumbnail: 'list4free.svg',
		id: 'list4free',
		tags: ['branding', 'ui-ux', 'website', 'identity'],
	},
	{
		projectName: 'Shargan Consulting',
		projectDescription:
			'Branding for a Consultancy Firm, that while forward-looking, has a solid foundation built over years.',
		date: 'July 2022',
		thumbnail: 'shargan.svg',

		id: 'sharganconsulting',
		tags: ['branding', 'identity'],
	},
	{
		projectName: 'Softoptech',
		projectDescription:
			'Branding for an established Albanian Tech company.',
		date: 'January 2022',
		thumbnail: 'softoptech.svg',

		id: 'softoptech',
		tags: ['branding'],
	},
];
