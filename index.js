const fs = require('fs');

class HTMLTemplateMaker {
    constructor() {
        this.head = '';
        this.body = '';
        this.stylesheets = [];
        this.scripts = [];
    }

    setTitle(title) {
        this.head += `<title>${title}</title>`;
    }

    addStylesheet(stylesheetPath) {
        this.stylesheets.push(`<link rel="stylesheet" href="${stylesheetPath}.css">`);
    }

    addScript(scriptPath) {
        this.scripts.push(`<script src="${scriptPath}.js"></script>`);
    }

    addContent(content) {
        this.body += content;
    }

    generateTemplate() {
        const stylesheetTags = this.stylesheets.join('\n');
        const scriptTags = this.scripts.join('\n');

        return `<!DOCTYPE html>
<html>
<head>
    ${this.head}
    ${stylesheetTags}
</head>
<body>
    ${this.body}
    ${scriptTags}
</body>
</html>`;
    }

    generateFiles(htmlPath, cssPath, jsPath) {
        const htmlContent = this.generateTemplate();

        fs.writeFileSync(htmlPath, htmlContent);
        fs.writeFileSync(cssPath, '');
        fs.writeFileSync(jsPath, '');
    }
}

module.exports = HTMLTemplateMaker;
