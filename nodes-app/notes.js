const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note already exists'));
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

const saveNotes = notes => fs.writeFileSync('notes.json', JSON.stringify(notes))

const removeNote = title => {
    console.log('Removing the note: ', title)
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.blue('List of notes: '));
    notes.forEach((note) => console.log(chalk.red(note.title)))
}

const printNote = (note) => {
    console.log(chalk.blue.inverse(note.title))
    console.log(chalk.blue(note.body))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk`{green.underline \nNote with title }{green.inverse.underline ${note.title}}{green.underline found}`)
        printNote(note)
    } else {
        console.log(chalk`{red.underline \nNo note with title }{red.inverse.underline ${title}}{red.underline  found}`);
        
    }
}

module.exports = {
    addNote,
    listNotes,
    readNote,
    removeNote
}