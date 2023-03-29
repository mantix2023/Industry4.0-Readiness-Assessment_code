const fs = require('fs');
const folderName = 'files';

if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log('Folder created successfully');
} else {
    console.log('Folder already exists');
}
