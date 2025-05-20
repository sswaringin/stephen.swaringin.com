import sortByDisplayOrder from "./src/utils/sort-by-display-order.js";
export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/bundle.css');
  eleventyConfig.addPassthroughCopy('src/css');

  /* posts collection */
  // eleventyConfig.addCollection('posts-featured', (collection) => {
  //   return sortByDisplayOrder(collection.getFilteredByGlob('./src/posts/*.md'));
  // });
  eleventyConfig.addCollection('blog', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
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
