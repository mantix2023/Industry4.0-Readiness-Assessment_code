const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a new PDF document
const doc = new PDFDocument();

// Set the header text and logo path
// const headerText = 'MANTIX DIGITAL SOLUTIONS PVT LTD';
// const logoPath = './files/mantixlogo.png';

// Define the header function
// const addHeader = () => {
//   // Set the font and size
  
//   doc.font('Helvetica-Bold')
//     .fontSize(16)
//     .fillColor('#0070c0');

//   // Get the page width
//   const pageWidth = doc.page.width;

//   // Define the background color and draw a filled rectangle behind the header text and logo
// //   doc.fillColor('#cdcdcd').rect(doc.page.margins.left, doc.page.margins.top, pageWidth - doc.page.margins.left - doc.page.margins.right, 50).fill();

//   // Add the logo to the header
//   doc.image(logoPath, {
    
//     width: 100,
//     height: 100,
//     align: 'right',
//     valign: 'top',
//     fit: [100, 100]
//   });

  // Add the header text
//   doc.text(headerText, {
//     align: 'left',
//     width: pageWidth - doc.page.margins.left - doc.page.margins.right - 50,
//     height: 50,
//     continued: false,
//     indent: 60,
//     y: doc.page.margins.top + 15
//   });

//   // Draw a line under the header
//   doc.lineWidth(1).moveTo(doc.page.margins.left, doc.page.margins.top + 50).lineTo(pageWidth - doc.page.margins.right, doc.page.margins.top + 50).stroke();
// };

// // Call the header function for the first page
// addHeader();

// Add the header to all pages
// doc.on('pageAdded', () => {
//   addHeader();
// });

doc.image('C:/Users/MYPC/Downloads/page4.png', { width: 550 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the second page
doc.image('C:/Users/MYPC/Downloads/page5.png', { width: 500 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the third page
doc.image('C:/Users/MYPC/Downloads/page6.png', { width: 550 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the fourth page
doc.image('C:/Users/MYPC/Downloads/page7.png', { width: 550 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the fifth page
doc.image('C:/Users/MYPC/Downloads/page8.png', { width: 550 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the sixth page
doc.image('C:/Users/MYPC/Downloads/page9.png', { width: 550 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the seventh page
doc.image('C:/Users/MYPC/Downloads/page10.png', { width: 550 });


// Save the PDF file to disk
doc.pipe(fs.createWriteStream('C:/Users/MYPC/Downloads/output.pdf'));
console.log("pdf downloaded successfully");
doc.end();
