/* eslint-disable */
const colors = require('tailwindcss/colors')
const animations = require('./tailwind/animations')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './stores/**/*.{js,ts,jsx,tsx,mdx}',
        './o-ui/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: '#effefc',
                    100: '#c8fff7',
                    200: '#91fef1',
                    300: '#52f6ea',
                    400: '#1ee3d9',
                    500: '#05c7c0',
                    600: '#01a09e',
                    700: '#068383',
                    800: '#0a6465',
                    900: '#0e5253',
                },
            },
            typography(theme) {
                return {
                    DEFAULT: {
                        css: {
                            // a: { color: theme('colors.primary.200') },
                            h1: { color: theme('colors.primary.400') },
                            h2: { color: theme('colors.primary.400') },
                            h3: { color: theme('colors.primary.400') },
                            h4: { color: theme('colors.primary.400') },
                        },
                    },
                }
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
