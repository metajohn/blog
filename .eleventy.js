module.exports = function(eleventyConfig) {

    // Copy static assets directly to output (_site/assets)
    eleventyConfig.addPassthroughCopy("src/assets");

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

        dir: { 
            input: 'src', 
            output: '_site'
        }
    }; 
};