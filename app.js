const express = require('express');
const bodyParser = require ('body-parser');
const app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000, () => {
    console.log('---------');
    console.log('Server up');
    console.log('---------');
})