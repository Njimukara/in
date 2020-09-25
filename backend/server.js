const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var models = require('./models');
const router = require('./routes/routes');
const session = require('express-session');
// const passport = require('passport');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


//Simple route
app.get('/', (req, res) => {
    res.json({message: 'Welcome to Our Application'})
});

app.use('/api', router);

//Database initialisation
models.sequelize.sync().then(()=> {
    console.log('You areconnected to the databse successfully.');
}).catch((err) => {
    console.log(err, 'There have been some problems with the database connection.')
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});