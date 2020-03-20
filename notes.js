const fs = require('fs')
const chalk = require('chalk')


/* const addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    }) 
*/
const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)

    if(!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else{
        console.log(chalk.red.inverse('Note title taken!'))
    } 
}
/* 
const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
 */
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
}
/* 
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not found!'))
    }
} */
const readNotes = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}


const listNotes = () =>{
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    });
}

/* 
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
 */
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
/* 
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return[]
    }
}
 */
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return[]
    }
}
module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes, 
    readNotes: readNotes
}

/* module.exports = function getNotes(){
    return "Here's my note...."
} */
