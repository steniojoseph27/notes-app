const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    } ,
    /* handler: function(argv){
        notes.addNotes(argv.title, argv.body )
    } */
    handler (argv){
        notes.addNotes(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    /* handler: function(argv){
        notes.removeNote(argv.title)
    } */
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    /* handler: function(){
        console.log('reading the note')
    } */
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list', 
    describe: 'List your notes',
    /* handler: function(){
        console.log('listing out all notes')
    } */
    handler(){
        notes.listNotes()
    }
})

yargs.parse()
