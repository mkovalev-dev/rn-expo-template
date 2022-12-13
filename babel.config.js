module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          '@Assets': './src/assets',
          '@Components': './src/components',
          '@Modules': './src/modules',
          '@Navigations': './src/navigations',
          '@Pages': './src/pages',
          '@Services': './src/services',
        },
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      }],
    ],
  };
};
