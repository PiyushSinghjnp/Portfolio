module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn', // Downgrade to warning
    'react/no-unescaped-entities': 'off', // Turn off this rule
  },
};