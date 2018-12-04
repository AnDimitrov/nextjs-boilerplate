/* eslint-disable */
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './asserts/antd-custom.less'),
    'utf8'
  )
)

// fix: prevents error when .css, .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
  require.extensions['.less'] = (file) => {}
}

module.exports = withCSS(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables
  },
}));
