const Path = require('path')

const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      include: Path.resolve(__dirname, './posts'),
      use: [
        {
          loader: require.resolve('./build/post-loader'),
        },
      ],
    })

    return config
  },
})
