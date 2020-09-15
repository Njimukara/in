const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Simple route
app.get('/', (req, res) => {
    res.json({message: 'Welcome to Our Application'})
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});