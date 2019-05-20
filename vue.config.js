module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pn-anim/'
    : '/',
  transpileDependencies: [
    'd3-array',
    'd3-scale',
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
      },
    },
  },
};
