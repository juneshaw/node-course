const fs = require('fs')

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
}

module.exports = {
    addNote,
    removeNote
}