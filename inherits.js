try {
  module.exports = require('util').inherits
} catch (e) {
  module.exports = require('./inherits_browser.js')
}
