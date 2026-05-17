const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/L.GradientSymbology.js',
  output: {
    filename: 'leaflet-gradient-symbology.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'L',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  externals: {
    leaflet: 'L'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'leaflet-gradient-symbology.css'
    })
  ]
};
