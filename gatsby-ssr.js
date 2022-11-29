require( './src/assets/global.css');
require('bootstrap/dist/css/bootstrap.min.css');
const React = require("react")
const Layout = require("./src/components/Layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

