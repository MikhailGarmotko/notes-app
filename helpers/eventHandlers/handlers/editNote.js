import { createNoteDiv } from "../../components/createNoteDiv.js";
import { clearElement } from "../../components/clearElement.js";
import { notes } from "../../../data/data.js";
import { images } from "../../../data/images.js";
import { createSummaryDiv } from "../../components/createSummaryDiv.js";


const editNoteForm = document.querySelector(".edit-note-form");
const editNoteName = editNoteForm.querySelector("#edit-note-name");
const editNoteCategory = editNoteForm.querySelector("#edit-note-category");
const editNoteContent = editNoteForm.querySelector("#edit-note-content");
let id = "";

const editNoteSubmitHandler = (e) => {
  e.preventDefault();
  if (e.submitter.id === "cancel") {
    editNoteForm.style.display = "none";
    return;
  }
  // const name = e.currentTarget.children[0].children["edit-note-name"].value;
  const name = editNoteName.value;
  const category = editNoteCategory.value;
  const content = editNoteContent.value;
//   const category =
//     e.currentTarget.children[0].children["edit-note-category"].value;
//   const content =
//     e.currentTarget.children[0].children["edit-note-content"].value;

  notes.filter((i) =>
    i.createdAt == id
      ? ((i.name = name),
        (i.category = category),
        (i.content = content),
        (i.picture = images[`${category}`]))
      : null
  );

  createNoteDiv(notes);
  createSummaryDiv(notes);
  editNoteForm.style.display = "none";
};



export const editNote = (e) => {
  id = e.currentTarget.parentElement.children[2].id;
  editNoteName.value = e.currentTarget.parentElement.children["name"].innerText;
  editNoteCategory.value = e.currentTarget.parentElement.children["category"].innerText;

  const { content } = notes.find((i) => i.createdAt == id);
  editNoteContent.value = content;
  editNoteForm.style.display = "flex";
  editNoteForm.addEventListener("submit", editNoteSubmitHandler);
};
