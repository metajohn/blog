const { HtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

    // Copy static assets directly to output (_site/assets)
    eleventyConfig.addPassthroughCopy("src/assets");

    // Adds standard HTML Base Plugin - needed for pathPrefix below
    eleventyConfig.addPlugin(HtmlBasePlugin);

    // Ignore drafts folder completely
    eleventyConfig.ignores.add("src/drafts");

    // The Master Link Translator: Converts Obsidian links into clean Web URLs
    eleventyConfig.addTransform("transform-obsidian-links", function(content) {
        if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
            let updatedContent = content.replace(/href="posts\/([^"]+)\.md"/g, 'href="/posts/$1/"');
            updatedContent = updatedContent.replace(/href="\.\/posts\/([^"]+)\.md"/g, 'href="/posts/$1/"');
            return updatedContent;
        }
        return content;
    });

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        // Obsidian needs root/posts/post but github pages wants blog/posts/post 
        pathPrefix: process.env.NODE_ENV === "production" ? "/blog/" : "/",

        dir: { 
            input: 'src', 
            output: '_site'
        }
    }; 
};