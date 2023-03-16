module.exports = {
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
