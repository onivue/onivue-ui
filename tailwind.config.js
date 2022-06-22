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
            typography(theme) {
                return {
                    DEFAULT: {
                        css: {
                            pre: { border: '10px solid' },
                            '[class~="lead"]': { color: theme('colors.gray.400') },
                            a: { color: theme('colors.gray.100') },
                            strong: { color: theme('colors.gray.100') },
                            'ul > li::before': { backgroundColor: theme('colors.gray.700') },
                            hr: { borderColor: theme('colors.gray.800') },
                            blockquote: {
                                color: theme('colors.gray.100'),
                                borderLeftColor: theme('colors.gray.800'),
                            },
                            h1: { color: theme('colors.red.100') },
                            h2: { color: theme('colors.red.100') },
                            h3: { color: theme('colors.red.100') },
                            h4: { color: theme('colors.red.100') },
                            code: { color: theme('colors.gray.100') },
                            'a code': { color: theme('colors.gray.100') },
                            pre: {
                                color: theme('colors.gray.200'),
                                backgroundColor: theme('colors.gray.800'),
                            },
                            thead: {
                                color: theme('colors.gray.100'),
                                borderBottomColor: theme('colors.gray.700'),
                            },
                            'tbody tr': { borderBottomColor: theme('colors.gray.800') },
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
