/* eslint-disable no-undef */
module.exports = {
    root: true,
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};