import { createNote } from "./handlers/createNote.js";
import { deleteNote } from "./handlers/deleteNote.js";
import { editNote } from './handlers/editNote.js';
import { archiveNote } from "./handlers/archivenote.js";


export const eventHandler = {

    "createNote": createNote,
    "deleteNote": deleteNote,
    "editNote": editNote,
    "archiveNote":archiveNote,
};
