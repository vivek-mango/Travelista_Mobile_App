module.exports = {
  root: true,
  extends: '@react-native',
};

// module.exports = {
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-native/all',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2021,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: ['react', 'react-native', '@typescript-eslint', 'import'],
//   rules: {
//     'react/display-name': 'off',
//     'react/no-unescaped-entities': 'off',
//     'import/no-anonymous-default-export': 'off',
//     '@typescript-eslint/no-unused-vars': 'error',
//     '@typescript-eslint/ban-ts-comment': 'off',
//     '@typescript-eslint/no-explicit-any': 'off',
//     '@typescript-eslint/no-non-null-assertion': 'off',
//     'no-empty-function': 'off',
//     'no-console': ['error', {allow: ['warn', 'error', 'info']}],

//     // Add new line above comment
//     'lines-around-comment': [
//       'error',
//       {
//         beforeLineComment: true,
//         beforeBlockComment: true,
//         allowBlockStart: true,
//         allowClassStart: true,
//         allowObjectStart: true,
//         allowArrayStart: true,
//       },
//     ],

//     // Add new line above return
//     'newline-before-return': 'error',

//     // Add new line below import
//     'import/newline-after-import': ['error', {count: 1}],

//     '@typescript-eslint/ban-types': [
//       'error',
//       {
//         extendDefaults: true,
//         types: {
//           '{}': false,
//         },
//       },
//     ],
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//     'import/parsers': {
//       '@typescript-eslint/parser': ['.ts', '.tsx'],
//     },
//     'import/resolver': {
//       typescript: {
//         alwaysTryTypes: true,
//         project: ['./tsconfig.json'],
//       },
//     },
//   },
//   env: {
//     'react-native/react-native': true,
//     es6: true,
//     node: true,
//   },
// };
