try {
  var util = require('util')
  if (typeof util !== 'function') throw;
  module.exports = require('util').inherits;
} catch (e) {
  module.exports = require('./inherits_browser.js');
}
