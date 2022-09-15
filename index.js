import { notes } from "./data/data.js";
import { createNoteElement } from "./helpers/createNoteElement.js";

const notesInfoBlock = document.getElementsByClassName("notes-info-container");

notes.map((i) => {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("notes-info");
  noteDiv.id = Date.now();
  for (let key in i) {
    noteDiv.append(createNoteElement("div", i[key], key));
  }

  notesInfoBlock[0].append(noteDiv);
});
