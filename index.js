import { createNoteDiv } from "./helpers/components/createNoteDiv.js";
import { notes } from './data/data.js';
try {
    createNoteDiv(notes);
} catch (error) {
    debugger;
    alert(error)
}
