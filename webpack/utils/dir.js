const path = require('path');

module.exports = {
    src: path.join(process.cwd(), 'src'),
    app: path.join(process.cwd(), 'src/app.ts'),
    dist: path.join(process.cwd(), 'dist')
};
