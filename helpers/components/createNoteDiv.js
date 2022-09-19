import { createNoteElement } from "./createNoteElement.js";
import { onClickNoteHandler } from "../eventHandlers/onClickNoteHandler.js";
import { clearElement } from "./clearElement.js";

export const createNoteDiv = (notes) => {
  const notesInfoBlock = document.querySelector(".notes-info-container");
  clearElement(notesInfoBlock);
  const createNoteButton = document.querySelector(".create-note-button");
  createNoteButton.addEventListener("click", (e) => onClickNoteHandler(e));

  notes.map((i) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("notes-info");
    noteDiv.id = Date.now();
    for (let key in i) {
      noteDiv.append(createNoteElement("div", i[key], key, noteDiv));
    }
    notesInfoBlock.append(noteDiv);
  });
};
