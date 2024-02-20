const HTMLTemplateMaker = require('./index');

const template = new HTMLTemplateMaker();

template.setTitle(process.argv[2]);

for (let i = 3; i < process.argv.length - 1; i++) {
    template.addStylesheet(process.argv[i]);
}

template.addScript(process.argv[process.argv.length - 1]);

template.addContent('<h1>Hello, World!</h1>');

template.generateFiles('index.html', 'styles.css', 'script.js');