const readingTime = require('./lib/reading-time');

module.exports = function(eleventyConfig, pluginNamespace) {
  eleventyConfig.namespace(pluginNamespace, () => {
    eleventyConfig.addFilter('readingTime', readingTime);
  });
};
