const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  reactStrictMode: true,
  // optional
  modifyVars: {
    '@primary-color': '#F97316',
    '@success-color': '#22C55E',
    '@processing-color': '#3B82F6',
    '@error-color': '#EF4444',
    '@highlight-color': '#EF4444',
    '@warning-color': '#FBBF24',
    '@normal-color': '#D1D5DB',
    '@border-radius-base': '4px',
    '@padding-lg': '26px',
    '@padding-md': '18px',
    '@padding-sm': '14px',
    '@padding-xs': '10px',
    '@padding-xss': '6px',
    '@height-base': '36px',
    '@height-lg': '44px',
    '@height-sm': '26px',
    '@font-size-base': '16px',
    '@font-size-sm': '14px',
    '@line-height-base': '1.643',
    '@btn-padding-horizontal-base': '16px',
    '@btn-padding-horizontal-sm': '8px',
  },
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config
  },
})
