const { spawn } = require('child_process');
const express = require('express');
const app = express();
app.use(express.static('public'));
// app.use('/static')
// create an array of page names
const pages = ['index', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9','page10','page11'];

app.get(`/`, (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
  });

// register a route for each page
pages.forEach(page => {
  app.get(`/${page}.html`, (req, res) => {
    res.sendFile(`${__dirname}/${page}.html`);
  });
});
const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});
app.post('/submit', (req, res) => {
  console.log('Submit button clicked');
  const pdfProcess = spawn('node', ['pdf.js']);
  pdfProcess.on('close', (code) => {
  console.log(`pdf.js exited with code ${code}`);
  console.log("Pdf Downloaded");
  process.exit(); // This will terminate the Node.js process
  });
})
