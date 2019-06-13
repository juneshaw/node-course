const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')
// console.log('args:', yargs)
// console.log('process argv: ', process.argv)

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Read a note')
    }
})

yargs.parse()