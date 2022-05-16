const fs = require('fs');

const uuidv1 = require('uuid/v1');

class Store {
    addNote(note) {
        const {title, text} = note;

        if (!title || !text) {
            throw new Error('Title and text are required')
        }
        const newNote = {title, text, id: uuidv1() };


    }
}