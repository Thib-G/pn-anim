module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: [
          'es.array.iterator',
          'es.promise',
          'es.object.assign',
          'es.promise.finally',
          'es.symbol',
          'es.number.is-nan',
        ],
      },
    ],
  ],
};
