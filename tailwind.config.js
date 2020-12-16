module.exports = {
	purge: ['/src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'media',
	theme: {
		colors: {
			primary: {
				DEFAULT: '#00aec6',
			},
			secondary: {
				DEFAULT: '#FFFFFF',
				dark: '#1F2945',
			},
		},
		extend: {
			gridTemplateColumns: {
				layout: '1fr 2fr',
				layoutm: 'auto',
			},
			gridTemplateRows: {
				layout: '1fr auto',
				layoutm: 'auto 1fr auto',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}