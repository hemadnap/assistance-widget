const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// /dist as CDN
app.use('/dist', express.static('node_modules/'));
// / as dist of src
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
