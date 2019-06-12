const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your notes...'
}

const addNote = function(title, body) {
    console.log('Adding the note: ', title, body)
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log('Note already exists');
    }
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch {
        console.log('Error in loading notes')
        return []
    }
}

const saveNotes = function(notes) {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJson)
}

const removeNote = function(title) {
    console.log('Removing the note: ', title)
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title
    })
    saveNotes(notesToKeep)

    if (notesToKeep.length === notes.length) {
        console.log(chalk.bgRed('No note found!'))
    } else {
        console.log(chalk.bgGreen('Note removed!'))
    }
}

module.exports = {
    addNote,
    removeNote
}