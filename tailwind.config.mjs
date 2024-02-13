/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				'sans' :  "'Poppins', sans-serif",
				'title' : "Herabara"
			},
			colors: {
				'primary': {
					'50': '#EAECEE',
					'100': '#D5D9DE',
					'200': '#ACB3BD',
					'300': '#828D9B',
					'400': '#59677A',
					'500': '#2F4159',
					'600': '#263447',
					'700': '#1C2735',
					'800': '#131A24',
					'900': '#090D12',
				},
				'secondary': {
					'50': '#FCFCFD',
					'100': '#F9F9FA',
					'200': '#F2F3F5',
					'300': '#ECECF0',
					'400': '#E5E6EB',
					'500': '#DFE0E6',
					'600': '#B2B3B8',
					'700': '#86868A',
					'800': '#595A5C',
					'900': '#2D2D2E',
				},
				'gris' : {
					'50': '#e9e9e9',
					'100': '#D3D3D3',
					'200': '#BDBDBD',
					'300': '#A7A7A7',
					'400': '#919191',
					'500': '#7A7A7A',
					'600': '#646464',
					'700': '#4E4E4E',
					'800': '#383838',
					'900': '#222222',
				}
			}
		},
	},
	plugins: [],
}
