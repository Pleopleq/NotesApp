const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const path = require('path');
const _ = require('lodash');
const mongoose = require('mongoose');
const Note = require('./schema/notes.js');

const uri = "mongodb+srv://pleo:test123@noteapp-4t67y.mongodb.net/test?retryWrites=true&w=majority";
const db = mongoose.connection;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
  console.log('Database UP')
  console.log('------------')
});


app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'schema')));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');


const notes = {};

    // HomePage route //

app.get('/', async (req, res) => {

    const allNotes = await Note.find(notes);
    res.render( "index.ejs", { allNotes })
});


// ///////////
// Note list///
// ////////////
app.get('/notes', async (req, res) => {

    const allNotes = await Note.find(notes);
    res.render ('notes/notes.ejs', { allNotes })
});

/////////////////////////
// Create Notes route //
/////////////////////////

app.post('/notes', (req, res) => {

    const note = new Note(
        {
            title: req.body.title,
            content: req.body.content,
        }
    );

    note.save( (err) => {
        if (err) return handleError(err);
       console.log('Note saved')
      });

    res.redirect('/notes')
});

//////////////////////
// Edit notes route //
///////////////////////

app.get('/notes/:id', async (req, res) => {
    const postId = req.params.id;
    const allNotes = await Note.find(notes);

    const found = _.find(allNotes , {'id': postId});

    res.render('notes/edit.ejs', { found , note_id: postId})
});


app.post('/notes/:id', (req, res) =>{
    const noteId = req.params.id
    
    Note.findByIdAndUpdate(noteId, {title: req.body.title, content: req.body.content}, (err) =>{
        if (err){
            console.log(err);
        } else {
            res.redirect('/notes')
        }
    })
})


app.listen(3000, () => {
    console.log('---------');
    console.log('Server up');
    console.log('---------');
})