import typography from '@tailwindcss/typography'

import { theme } from 'tailwindcss/defaultConfig'

const { screens } = theme

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'purple': '#120B2F',
			'aqua': '#41DEF4',
			'pink': '#BE357F',
			'cian': '#1EB8F9'
    },
		screens: {
			...screens,
			'xs': '480px',
			'3xl': '1920px',
		},
		extend: {
			fontFamily: {
        raleway: ['var(--raleway-font)', '-apple-system', 'Helvetica Neue', 'sans-serif'],
      },
			backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, #6885B0 0%, #9B7FA6 17%, #FF6F5E 60%, #FF8C73 81%, #FDB473 100%)',
      }
		},
	},
	plugins: [typography],
}
