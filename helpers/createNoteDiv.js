import { notes } from "../data/data.js";
import { createNoteElement } from "./createNoteElement.js";
import { onClickNoteHandler } from "./onClickNoteHandler.js";

export const createNoteDiv = () => {
  const notesInfoBlock = document.querySelector(".notes-info-container");
  const createNoteButton = document.querySelector(".create-note-button");
  createNoteButton.addEventListener('click', (e)=>onClickNoteHandler(e))  

  notes.map((i) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("notes-info");
    noteDiv.id = Date.now();
    for (let key in i) {
      noteDiv.append(createNoteElement("div", i[key], key));
    }

    notesInfoBlock.append(noteDiv);
  });
};
