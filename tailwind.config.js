/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./*.html"],
	theme: {
		extend: {
			dropShadow: {
				cardDropShadow: "-9px 5px 6px #50ADB7",
			},
		},
	},
	plugins: [],
};
