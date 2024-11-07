import type { Config } from "tailwindcss";

// @ts-expect-error don't check tailwind-scrollbar-hide type
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			screens: {
				'3xl': '2000px',
			},
		},
	},
	plugins: [tailwindScrollbarHide],
};
export default config;
