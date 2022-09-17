import { createNoteDiv } from "../../components/createNoteDiv.js";
import { clearElement } from "../../components/clearElement.js";
import { notes } from "../../../data/data.js";
import { images } from "../../../data/images.js";

const editNoteForm = document.querySelector(".edit-note-form");
let id = "";

// const editNoteFormClear = () => {
//     Array.from(editNoteForm.children[0]).map(i => {
//         if (i.category) { return };
//         i.innerText = "";
//     })
// };

const editNoteSubmitHandler = (e) => {
  e.preventDefault();
  const name = e.currentTarget.children[0].children[2].value;
  const category = e.currentTarget.children[0].children[4].value;
  const content = e.currentTarget.children[0].children[6].value;

  notes.filter((i) =>
    i.createdAt == id
      ? ((i.name = name), (i.category = category), (i.content = content), i.picture=images[`${category}`])
      : null
  );
  clearElement(notesInfoBlock);
  createNoteDiv(notes);
  // editNoteFormClear();
  editNoteForm.style.display = "none";
};

const editNoteName = editNoteForm.querySelector("#edit-note-name");
const editNoteCategory = editNoteForm.querySelector("#edit-note-category");
const editNoteContent = editNoteForm.querySelector("#edit-note-content");
debugger;
// const newNoteFormButton = newNoteForm.querySelector(".form-button");
// const formTitle = newNoteForm.querySelector(".form-title");
const notesInfoBlock = document.querySelector(".notes-info-container");

export const editNote = (e) => {
  id = e.currentTarget.parentElement.children[2].id;
  editNoteName.value = e.currentTarget.parentElement.children[1].innerText;
  editNoteCategory.value = e.currentTarget.parentElement.children[3].innerText;
  editNoteContent.value = e.currentTarget.parentElement.children[4].innerText;
  editNoteForm.style.display = "flex";
  editNoteForm.addEventListener("submit", editNoteSubmitHandler);
};
