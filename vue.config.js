module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pn-anim/'
    : '/',
  transpileDependencies: [
    /d3-.+/,
    'internmap',
    'bootstrap-vue',
  ],
};
