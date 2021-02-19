module.exports = {
  root: true,
  extends: ['react-app'],

  plugins: ['import'],
  rules: {
    'react/prop-types': 0,
    'import/no-anonymous-default-export': 0,
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '^[a-zA-Z]',
            group: 'builtin',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
