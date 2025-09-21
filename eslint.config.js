import js from '@eslint/js'

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
        'no-unused-vars': 'warn',
    },
  },
]
