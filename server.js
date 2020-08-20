const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Smart Platform UI');
});

app.listen(8002, () => console.log('Smart Platform UI listening on port 8002'));