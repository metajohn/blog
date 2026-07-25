module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.ignores.add("src/drafts");

    // Environmental path prefix: /blog/ for production, / for local
    const prefix = process.env.NODE_ENV === "production" ? "/blog/" : "/";

    // The Bulletproof Obsidian Link Translator
    eleventyConfig.addTransform("transform-obsidian-links", function(content) {
        if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
            
            // Catches ANY link ending in .md and rewrites it into a clean folder URL
            let updatedContent = content.replace(/href="([^"]+)\.md"/g, (match, path) => {
                // Extract just the filename without folder paths (e.g., "posts/test-post" -> "test-post")
                const filename = path.split('/').pop();
                return `href="${prefix}posts/${filename}/"`;
            });
            
            return updatedContent;
        }
        return content;
    });

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        pathPrefix: prefix,

        dir: { 
            input: 'src', 
            output: '_site'
        }
    }; 
};