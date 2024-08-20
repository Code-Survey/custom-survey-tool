module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/custom-survey-tool/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    proxy: 'http://localhost:4000'
  }
}