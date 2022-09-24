/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#118AB2",
				"primary-alt": "#073B4C",
				"secondary": "#06D6A0",
				"3": "#FFD166",
				"4": "#EF476F",
			}
		},
	},
	plugins: [],
}
