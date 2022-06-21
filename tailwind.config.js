const colors = require('tailwindcss/colors')
const animations = require('./tailwind/animations')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './stores/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    ...colors.amber,
                },
            },
            ...animations,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        // ...
    ],
}
