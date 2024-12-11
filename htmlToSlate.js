const { htmlToSlateAST } = require('@graphcms/html-to-slate-ast');

async function convertHtmlToSlate(htmlInput) {
    try {
        // Sanitize input
        if (!htmlInput || typeof htmlInput !== 'string') {
            throw new Error('Invalid HTML input');
        }

        // Remove img tags from the HTML
        const cleanedHtml = htmlInput.replace(/<img[^>]*>/g, '');

        // Convert the cleaned HTML to Slate AST
        const slateAST = await htmlToSlateAST(cleanedHtml);

        return {
            ast: slateAST,
            slug: "undefined"
        };
    } catch (error) {
        console.error('Error converting HTML to Slate AST:', error);
        throw error;
    }
}

// Example usage
async function main() {
    try {
        // Example HTML - replace this with your actual HTML source
        const sampleHtml = '<div><h1>Hello World</h1><p>This is a test</p></div>';
        
        const result = await convertHtmlToSlate(sampleHtml);
        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('Main process error:', error);
    }
}

// Run the script
//main();

// Export the function for use in other files
module.exports = convertHtmlToSlate;