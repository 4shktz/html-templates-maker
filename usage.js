const HTMLTemplateMaker = require('./index');

const template = new HTMLTemplateMaker();

template.setTitle(process.argv[2]);

for (let i = 3; i < process.argv.length - 1; i++) {
    template.addStylesheet(process.argv[i]);
}

template.addScript(process.argv[process.argv.length - 1]);

template.addContent('<h1>Hello, World!</h1>');

const title = process.argv[2];
const cssFilename = process.argv[3];
const jsFilename = process.argv[4];

const dist = 'dist'; 
const htmlPath = `${dist}/index.html`;
const cssPath = `${dist}/${cssFilename}.css`;
const jsPath = `${dist}/${jsFilename}.js`;

template.generateFiles(htmlPath, cssPath, jsPath);
