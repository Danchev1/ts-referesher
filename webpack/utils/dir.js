const path = require('path');

module.exports = {
    srcPath: path.join(process.cwd(), 'src'),
    distPath: path.join(process.cwd(), 'dist'),
    entryPath: path.join(process.cwd(), 'src/app.ts'),
    indexHtmlPath: path.join(process.cwd(), 'src/index.html'),
};
