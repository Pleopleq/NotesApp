const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


const notes = [
    {title: 'First post', content: 'First post yeyeyeye'},
    {title: 'Second post', content: 'asdfasdfasdfljagsdfpjagsdfuiagsd´fuiagsdfñiugasdi' },
    {title: 'Third Post', content: 'Fsdfasdfasdfljagsdfpjagsdfuiagsd´fuiagsdfñiugasdisdfasdfasdfljagsdfpjagsdfuiagsd´fuiagsdfñiugasdisdfasdfasdfljagsdfpjagsdfuiagsd´fuiagsdfñiugasdisdfasdfasdfljagsdfpjagsdfuiagsd´fuiagsdfñiugasdie'}
];


app.get('/', (req, res) => {
    res.render( "index.ejs", { notes })
})




app.get('/notes', (req, res) => {
    res.render('notes/notes.ejs', { notes })
})

app.post('/notes', (req, res) => {
    const note = {
        title: req.body.title,
        content: req.body.content
    }
    notes.push(note);
    res.redirect('/notes')
})


app.listen(3000, () => {
    console.log('---------');
    console.log('Server up');
    console.log('---------');
})