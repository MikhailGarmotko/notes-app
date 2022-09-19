import { createNoteDiv } from "../../components/createNoteDiv.js";
import { notes } from "../../../data/data.js";
import { images } from "../../../data/images.js";
import { createSummaryDiv } from "../../components/createSummaryDiv.js";
import { checkDataPresence } from "../../misc/checkDataPresense.js";

const newNoteForm = document.querySelector(".new-note-form");
const newNoteFormButton = newNoteForm.querySelector(".form-button");
const formTitle = newNoteForm.querySelector(".form-title");

const onCreateSubmitHandler = (e) => {
  e.preventDefault();
  const targetElem = e.currentTarget.children[0];

  if (e.submitter.id === "cancel") {
    newNoteForm.style.display = "none";
  }
  if (e.submitter.id === "submit") {
    const name = targetElem.children["name"].value;
    const category = targetElem.children["category"].value;
    const content = targetElem.children["content"].value;
    const contentHasDates = checkDataPresence(content);

    const adds = {
      picture: images[`${category}`],
      name: name,
      createdAt: Date.now(),
      category: category,
      content: content,
      dates: contentHasDates ? contentHasDates.join() : "",
      edit: '<ion-icon name="pencil-outline"></ion-icon>',
      archive: '<ion-icon name="archive-outline"></ion-icon>',
      delete: '<ion-icon name="trash-outline"></ion-icon>',
      status: "active",
    };

    notes.push(adds);
  }

  createNoteDiv(notes);
  createSummaryDiv(notes);
  newNoteForm.removeEventListener("submit", onCreateSubmitHandler);
  targetElem.children["name"].value = "";
  targetElem.children["name"].placeholder = "Input name ...";
  targetElem.children["category"].value = "Task";
  targetElem.children["content"].value = "";
  targetElem.children["content"].placeholder = "....";
  newNoteForm.style.display = "none";
};

export const createNote = () => {
  newNoteForm.style.display = "flex";
  newNoteForm.children[0].children["name"].placeholder = "Input name ...";
  newNoteForm.children[0].children["category"].value = "Task";
  newNoteForm.children[0].children["content"].placeholder = "....";
  newNoteFormButton.innerText = "Create";
  formTitle.innerText = "Create note";
  newNoteForm.addEventListener("submit", onCreateSubmitHandler);
  return;
};
