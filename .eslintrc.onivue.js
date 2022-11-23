// SOURCE: https://github.com/smartive/eslint-config
module.exports = {
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 0,
        'react/display-name': 0,
        'react-hooks/exhaustive-deps': 0,
        'react/forbid-component-props': ['warn', { forbid: ['style'] }],
        'import/no-named-as-default': 0,
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
    ],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    plugins: ['@typescript-eslint', 'prettier'],
}
