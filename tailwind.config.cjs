/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'aeonik': ['aeonik', 'sans-serif']
			},
			colors: {
				darkgray: '#141414',
				lightgray: '#1F1F1F',
				brand: '#D71F2B'
			},
		},
	},
	plugins: [],
}
