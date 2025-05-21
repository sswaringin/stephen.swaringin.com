// import sortByDisplayOrder from "./src/utils/sort-by-display-order.js";
import dateFilter from './src/filters/date-filters.js';
import w3DateFilter from "./src/filters/w3-date-filter.js";
export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/bundle.css');
  eleventyConfig.addPassthroughCopy('src/css');

  // Collections
  // eleventyConfig.addCollection('posts-featured', (collection) => {
  //   return sortByDisplayOrder(collection.getFilteredByGlob('./src/posts/*.md'));
  // });
  eleventyConfig.addCollection('blog', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

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
