// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {},
  {
    rules: {
      'no-console': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
)
