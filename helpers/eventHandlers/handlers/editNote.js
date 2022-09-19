import { createNoteDiv } from "../../components/createNoteDiv.js";
import { notes } from "../../../data/data.js";
import { images } from "../../../data/images.js";
import { createSummaryDiv } from "../../components/createSummaryDiv.js";
import { checkDataPresence } from "../../misc/checkDataPresense.js";

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

  const name = editNoteName.value;
  const category = editNoteCategory.value;
  const content = editNoteContent.value;
  const contentHasDates = checkDataPresence(content);
  notes.filter((i) =>
    i.createdAt == id
      ? ((i.name = name),
        (i.category = category),
        (i.content = content),
        (i.dates = contentHasDates ? contentHasDates.join() : ""),
        (i.picture = images[`${category}`]))
      : null
  );

  createNoteDiv(notes);
  createSummaryDiv(notes);
  editNoteForm.style.display = "none";
};

export const editNote = (e) => {
  id = e.currentTarget.parentElement.children[2].id;
  const { name, content, category } = notes.find((i) => i.createdAt == id);
  editNoteName.value = name;
  editNoteContent.value = content;
  editNoteCategory.value = category;
  editNoteForm.style.display = "flex";
  editNoteForm.addEventListener("submit", editNoteSubmitHandler);
};
