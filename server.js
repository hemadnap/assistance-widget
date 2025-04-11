const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// /dist as CDN
app.use('/dist', express.static('/dist'));
app.use('/src', express.static('src'));
app.use('/', express.static('src'));
// index.html as root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});
// set port 
const PORT = process.env.PORT || 3000;
// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//// client
//const client = express();
//client.use(cors());
//app.use('/', express.static('src'));
//// index.html as root
//app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/src/index.html');
//});

//// set port
//const CLIENT_PORT = process.env.CLIENT_PORT || 3100;
//// start client server
//client.listen(CLIENT_PORT, () => {
//    console.log(`Client is running on port ${CLIENT_PORT}`);
//});
//// serve static files
//client.use(express.static('src'));
//// serve static files from /src
//client.use('/dist', express.static('node_modules/'));