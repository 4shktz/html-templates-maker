# Introduction

The HTMLTemplateMaker module is designed to generate HTML, CSS and JavaScript files from a customized template. Here's how to use this module:

# Installation 

`npm install html-template-maker`

## Code example

```js
const HTMLTemplateMaker = require('html-template-maker');

const template = new HTMLTemplateMaker();

template.setTitle('My Title');
template.addStylesheet('styles');
template.addScript('script');
template.addContent('<h1>Hello, World!</h1>');

template.generateFiles('dist/index.html', 'dist/styles.css', 'dist/script.js');
```

### Command line arguments

`node index.js <title> <file_name_css> <file_name_js>`
