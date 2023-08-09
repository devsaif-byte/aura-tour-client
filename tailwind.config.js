const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			colors: {
				charcoal: "#264653",
				persianGreen: "#2A9D8F",
				saffron: "#E9C46A",
				sandyBrown: "#F4A261",
				burntSienna: "#E76F51",
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("tailwind-saasblocks")],
};
