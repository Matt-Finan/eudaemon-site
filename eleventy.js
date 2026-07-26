const markdownIt = require("markdown-it");
const markdownItContainer = require("markdown-it-container");

module.exports = function (eleventyConfig) {
  // Markdown with the "changed my mind" container:
  //   ::: revised 12.08.2026
  //   text...
  //   :::
  const md = markdownIt({ html: true, typographer: true });
  md.use(markdownItContainer, "revised", {
    validate: (params) => params.trim().match(/^revised\s+(.*)$/),
    render: (tokens, idx) => {
      const m = tokens[idx].info.trim().match(/^revised\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<aside class="revised"><span class="rev-label"><span class="dot"></span>Revised ${md.utils.escapeHtml(m[1])}</span>\n`;
      }
      return "</aside>\n";
    },
  });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // dd.mm.yyyy, matching the project's own file-naming habit
  eleventyConfig.addFilter("dateDisplay", (d) => {
    const dt = d instanceof Date ? d : new Date(d);
    const p = (n) => String(n).padStart(2, "0");
    return `${p(dt.getUTCDate())}.${p(dt.getUTCMonth() + 1)}.${dt.getUTCFullYear()}`;
  });
  eleventyConfig.addFilter("rfc3339", (d) => {
    const dt = d instanceof Date ? d : new Date(d);
    return dt.toISOString();
  });
  eleventyConfig.addFilter("padSeries", (n) => String(n).padStart(2, "0"));

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => a.data.series - b.data.series)
  );

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
