const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const path = require('path');
const crypto = require('crypto');
const _ = require('lodash');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const noteSchema = require('./schema/notes.js')
const uri = "mongodb+srv://pleopleq:test123@noteapp-4t67y.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
  console.log('Connected')
});


app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


const notes = [
    {title: 'First post', content: 'First post yeyeyeye', id: '232safa34323'},
    {title: 'Second post', content: 'asdfasdfasdfljagsdfpjagsdfuiagsd´fuiagsdfñiugasdi', id: '2dfa3213234' }
];

    // HomePage route //

app.get('/', (req, res) => {
    res.render( "index.ejs", { notes })
});

    // Notes route //

app.get('/notes', (req, res) => {
    res.render('notes/notes.ejs', { notes })
});

app.post('/notes', (req, res) => {
    
    const id = crypto.randomBytes(16).toString('hex');

    const note = {
        title: req.body.title,
        content: req.body.content,
        id : id
    }
    notes.push(note);
    res.redirect('/notes')
});

    // Edit notes route //

app.get('/notes/edit/:id', (req, res) => {
    const postId = req.params.id;
    const found = _.find(notes , {'id': postId});
    res.render('notes/edit.ejs', { found })
});


app.listen(3000, () => {
    console.log('---------');
    console.log('Server up');
    console.log('---------');
})