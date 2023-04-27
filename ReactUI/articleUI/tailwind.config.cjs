/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			margin: {
				lg: "8vw",
				md: "6vw",
				sm: "2w",
			},
		},
		extend: {
			colors: {
				primary: "#008DCF",
				red: "#EC3237",
				background: "#EEEEEE",
			},
			fontFamily: {
				nunito: "'Nunito', sans-serif",
			},
			borderRadius: {
				'5xl': '10.5rem',
			  },
			  height: {
				'128': '29rem',
			  }
		},
	},
	plugins: [],
};
