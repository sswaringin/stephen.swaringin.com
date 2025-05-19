export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/bundle.css');
  eleventyConfig.addPassthroughCopy('src/css');

  /* posts collection */
  eleventyConfig.addCollection('posts', (collection) => {
    return collection
      .getFilteredByGlob('./src/posts/*.md')
      .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
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
