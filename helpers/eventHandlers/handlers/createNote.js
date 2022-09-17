import { clearElement } from "../../components/clearElement.js";
import { createNoteDiv } from "../../components/createNoteDiv.js";
import { notes } from "../../../data/data.js";
import { images } from "../../../data/images.js";

const newNoteForm = document.querySelector(".new-note-form");
const newNoteFormButton = newNoteForm.querySelector(".form-button");
const formTitle = newNoteForm.querySelector(".form-title");

const onCreateSubmitHandler = (e) => {
  e.preventDefault();
  const notesInfoBlock = document.querySelector(".notes-info-container");
  clearElement(notesInfoBlock);
  if (e.submitter.id === "cancel") {
    newNoteForm.style.display = "none";
  }
  if (e.submitter.id === "submit") {
    
    const name = e.currentTarget.children[0].children["name"].value;
    const category = e.currentTarget.children[0].children["category"].value;
    const content = e.currentTarget.children[0].children["content"].value; 
    debugger;
    const adds = {
      picture: images[`${category}`],
      name: name,
      createdAt: Date.now(),
      category: category,
      content: content,
      dates: "",
      edit: '<ion-icon name="pencil-outline"></ion-icon>',
      archive: '<ion-icon name="archive-outline"></ion-icon>',
      delete: '<ion-icon name="trash-outline"></ion-icon>',
    };

    notes.push(adds);
  }
  
  createNoteDiv(notes);
  newNoteForm.removeEventListener("submit", onCreateSubmitHandler);
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
