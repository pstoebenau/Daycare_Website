/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#118AB2",
				"primary-alt": "#073B4C",
				"secondary": "#dd2b55",
			}
		},
	},
	plugins: [],
}
