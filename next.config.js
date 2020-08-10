// next.config.js
const withFonts = require('nextjs-fonts');
module.exports = withFonts({
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
});