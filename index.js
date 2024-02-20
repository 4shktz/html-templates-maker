const fs = require('fs');
const path = require('path');

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

        fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
        fs.writeFileSync(htmlPath, htmlContent);
        fs.writeFileSync(cssPath, '');
        fs.writeFileSync(jsPath, '');
    }
}

const args = process.argv.slice(2);

if (args.length < 3) {
    console.log('Usage: node index.js <title> <file_name_css> <file_name_js>');
} else {
    const templateMaker = new HTMLTemplateMaker();
    const title = args[0];
    const cssFilename = args[1];
    const jsFilename = args[2];

    templateMaker.setTitle(title);
    templateMaker.addStylesheet(cssFilename);
    templateMaker.addScript(jsFilename);

    const dist = path.join(__dirname, 'dist');
    const htmlPath = path.join(dist, 'index.html');
    const cssPath = path.join(dist, `${cssFilename}.css`);
    const jsPath = path.join(dist, `${jsFilename}.js`);

    templateMaker.generateFiles(htmlPath, cssPath, jsPath);
}

module.exports = HTMLTemplateMaker;
