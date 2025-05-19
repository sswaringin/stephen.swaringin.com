import sortByDisplayOrder from "./src/utils/sort-by-display-order.js";
export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/bundle.css');
  eleventyConfig.addPassthroughCopy('src/css');

  /* posts collection */
  eleventyConfig.addCollection('posts', (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/posts/*.md'));
  });
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "docs",
    }
  }
};
