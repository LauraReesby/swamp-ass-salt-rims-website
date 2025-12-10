import nextConfig from 'eslint-config-next'

const config = [
  ...nextConfig,
  {
    rules: {
      // Allow natural punctuation in JSX content without requiring HTML entities.
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default config
