const { spawn } = require('child_process');

// Run node.js
const nodeProcess = spawn('node', ['node.js']);

nodeProcess.on('close', (code) => {
    console.log(`node.js exited with code ${code}`);
    // Run app.js
    console.log("server is running on http://localhost:3000/")
    if(code === 0){
        const appProcess = spawn('node', ['app.js']);

        appProcess.on('close', (code) => {
        console.log(`app.js exited with code ${code}`);

            // Run pdf.js
        // const pdfProcess = spawn('node', ['pdf.js']);

        // pdfProcess.on('close', (code) => {
        // console.log(`pdf.js exited with code ${code}`);
        // console.log("Pdf Downloaded");
        });
    }
    });





