const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3000;

// allow cross-origin requests
app.use(cors());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});
// Feedback widget
app.get('/feedback-widget.js', (req, res) => {
  res.sendFile(path.join(__dirname, './src/elements/feedback-widget/feedback-widget.js'));
});
app.get('/feedback-widget', (req, res) => {
  res.sendFile(path.join(__dirname, './views/feedback-widget.html'));
});

// Pre-footer
app.get('/pre-footer.js', (req, res) => {
  res.sendFile(path.join(__dirname, './src/elements/pre-footer/pre-footer.js'));
});
app.get('/pre-footer', (req, res) => {
  res.sendFile(path.join(__dirname, './views/pre-footer.html'));
});

// Demo
app.get('/demo', (req, res) => {
  res.sendFile(path.join(__dirname, './views/demo.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});